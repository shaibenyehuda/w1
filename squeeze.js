const jsonpath = require('jsonpath');
const fetch = require('node-fetch');
const fs = require('fs');
const { Observable, from } = require('rxjs');
const { map, filter, flatMap, take, toArray } = require('rxjs/operators');
require('./browser/siteAsJson.js');
require('./browser/rendererModel.js');

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

function sameCluster(p1,p2) {
    const diffs = { d1: p1.ar.filter(x=>!p2.s.has(x)), d2: p2.ar.filter(x=>!p1.s.has(x)) };
    return (diffs.d1.length == 0 || diffs.d2.length == 0)
}

function cluster(pages) {
    let clusters = [];
    pages.forEach((page,i)=>{
        if (page.cluster) return;
        let cluster = [page];
        page.cluster = cluster;
        clusters.push(cluster);
        pages.slice(i).forEach(toCompare=>{
            if (toCompare.ar.filter(x=>!page.s.has(x)).length == 0) {
                cluster.push(toCompare);
                toCompare.cluster = cluster;
            }
        })
    })
    return clusters.filter(cl=>cl.length > 1).sort((p1,p2)=>p2.length-p1.length);
}

function paramsOfCluster(cl) {
    const paths = cl[0].ar;
    paths.forEach(path=>{
        const props = new Set([].concat.apply([],cl.map(item=>Object.getOwnPropertyNames(pathToObj(item.path)))) )
    })

}

let clusters = cluster(pages);
//console.log(clusters.map(cl=>`${cl.length}: ${cl[0].ar.length}-${cl.slice(-1)[0].ar.length}`))
const pageCoverage = clusters.reduce((sum,cl)=>cl.length+sum,0)
console.log('Coverage: ' + pageCoverage + ' of ' +pages.length)
//console.log(pages.map(x=>x.ar.length).join(','))
//sameCluster(pages[0],pages[1]));




