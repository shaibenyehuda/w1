const jsonpath = require('jsonpath');
const fetch = require('node-fetch');
const fs = require('fs');
const { Observable, from } = require('rxjs');
const { map, filter, flatMap, take, toArray } = require('rxjs/operators');
require('./browser/siteAsJson.js');
require('./browser/rendererModel.js');

const paramDrivers = {
    StyledText: ['text'],
    LinkableButton: { 
        get: (dataObj,page) => {
            const anchorLink = page.data.document_data[dataObj.link.slice(1)];
            return {
                label: dataObj.label,
                type: dataObj.type,
                anchorName: anchorLink.anchorName,
                pageId: anchorLink.pageId
            }
        }
    },
    TPAWidget: { 
        get: (dataObj,page,comp) => {
            const appData = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${dataObj.applicationId}")]`)[0];
            const instance = appData.instance;
            const url = `http://progallery.wix.com/gallery.html?compId=${comp.id}&instance=${instance}`;
            return {
                instance,url
            }
        }
    },
}

function galleryImages(tpa) {
    if (!tpa || !tpa.dataQuery || !tpa.dataQuery.slice) return 'err';
    var app = jsonpath.query(siteAsJson,`$..*[?(@.id=="${tpa.dataQuery.slice(1)}")]`)[0].applicationId;
    var instance = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${app}")]`)[0].instance;
    var url = `http://progallery.wix.com/gallery.html?compId=${tpa.id}&instance=${instance}`;
    return fetch(url)
        .then(res=>{
            if (!res.ok) return;
            return res.text().then(html=>{
                if ((''+html).indexOf('ng-app="wixErrorPagesApp"') != -1) return 'err';
                var txt = html.substring(html.indexOf('window.prerenderedGallery ='));
                txt = txt.substring(txt.indexOf('({"items"'));
                txt = txt.substring(0,txt.indexOf('try {')).trim().slice(0,-1);
                var gallery = eval(txt);
                return gallery;
            })
        })
}
const types = jsonpath.query(siteAsJson,'$..componentType');
var widgets = '$..*[?(@.componentType=="wysiwyg.viewer.components.tpapps.TPAWidget")]';
var items = jsonpath.apply(siteAsJson,widgets,x=>x)
    .filter(x=>x.path[1] == 'pages')
    .filter(x=>x.path[4] == 'components') // TODO: structure
    .map(({path,value})=>({path,value,id:value.id,title:siteAsJson.pages[path[2]].title}));

//fetchCategory("Free Cars","d5df13be-7e25-4498-9da3-9eceb9511339");
//fetchCategory("Free Fruit","1ee1213d-a061-4b86-92e2-ddb12eb84d51");

function fetchCategory(title,id) {
    from(items.filter(x=>x.title == title)).pipe(flatMap(x=>galleryImages(x.value)),filter(x=>x),flatMap(x=>x.items),toArray()).subscribe(items=>
        fs.writeFileSync('/Users/shaiby/Downloads/imported-items.csv',
            '"Title","category","photo","page","ID","Created date","Updated date","Owner"\n'+
            items.map(i=> { 
                const metaData = JSON.parse(i.metaData.replace(/\\/g,''));
                return `"","${id}","image://v1/${i.mediaUrl}/${metaData.height}_${metaData.width}/${metaData.fileName}","","","",`
        }).join('\n'))
    )    
}

function leafs(obj) {
    let res = [];
    function doLeafs(inner,path) {
        Object.getOwnPropertyNames(inner).forEach(p=>{
            if (typeof inner[p] == 'object')
                return doLeafs(inner[p],path+'.'+p);
            res.push({path: path+'.'+p,val:inner[p]})
        })
    }
    doLeafs(obj,'');
    return res;
}

const pages = siteAsJson.pages.map((page,i)=> 
        Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
        .sort((p1,p2)=>p2.ar.length - p1.ar.length);

function clusteringProps(p) {
    let ar = jsonpath.apply(p.structure.components,'$..*.componentType',x=>x).map(x=>x.path.join('.')+'#'+x.value);
    let s = new Set(ar);
    return { ar: Array.from(s), s, comps: p.structure.components}
}

function cluster(pages) {
    let clusters = [];
    pages.forEach((page,i)=>{
        if (page.cluster) return;
        let cluster = [page];
        cluster.title = page.value.title;
        page.cluster = cluster;
        clusters.push(cluster);
        pages.slice(i).forEach(toCompare=>{
            if (!toCompare.cluster && toCompare.ar.filter(x=>!page.s.has(x)).length == 0) {
                cluster.push(toCompare);
                toCompare.cluster = cluster;
            }
        })
    })
    return clusters.filter(cl=>cl.length > 1).sort((p1,p2)=>p2.length-p1.length);
}

function applyPath(obj,path) {
    const pathAr = path.split('$.').pop().split('#')[0].split('.');
    var ret = pathAr.reduce((o,p)=>o[p],obj);
    if (!ret)
        console.log('null val for path ' + path);
    return ret || {};
}

function calcParamsOfCluster(cl) {
    const pathsOfObjs = cl[0].ar;
    cl.params = pathsOfObjs
        .filter(path=>applyPath(cl[0].comps,path).dataQuery)
        .map(path=>{ 
            let comp = applyPath(cl[0].comps,path);
            let dataObj = cl[0].value.data.document_data[comp.dataQuery.slice(1)];
            return {type: dataObj.type, app: dataObj.applicationId, comp, path, dataObj }
        }).map(e=>Object.assign(e,paramsOfType(e.type,e.dataObj,cl[0].value,e.comp)))
}

let clusters = cluster(pages);
calcParamsOfCluster(clusters[0]);
console.log(clusters[0].params);
console.log(clusters.map(cl=>`${cl.length}: ${cl[0].ar.length}-${cl.slice(-1)[0].ar.length}`))
const pageCoverage = clusters.reduce((sum,cl)=>cl.length+sum,0)
console.log('Coverage: ' + pageCoverage + ' of ' +pages.length)
//console.log(pages.map(x=>x.ar.length).join(','))
//sameCluster(pages[0],pages[1]));

function paramsOfType(type,dataObj,page,comp) {
    const driver = paramDrivers[type];
    if (Array.isArray(driver)) {
        var ret = {};
        driver.forEach(p=>ret[p] = dataObj[p])
        return ret;
    }
    if (typeof driver == 'object' && driver.get)
        return driver.get(dataObj,page,comp)
}

