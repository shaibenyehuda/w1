const jsonpath = require('jsonpath');
global.jsonpath = jsonpath;
const fetch = require('node-fetch');
const fs = require('fs');
const { Observable, from } = require('rxjs');
const { map, filter, flatMap, take, toArray } = require('rxjs/operators');
require('./projects/squeeze/cossy/siteAsJson.js');
require('./projects/squeeze/cossy/rendererModel.js');
require('./projects/squeeze/cluster.js');

clusters = cluster(cossy_siteAsJson,cossy_rendererModel);
console.log(clusters);
console.log(clusters.map(cl=>`${cl.pages.length}: ${cl.pages[0].ar.length}-${cl.pages.slice(-1)[0].ar.length}`))
const pageCoverage = clusters.reduce((sum,cl)=>cl.pages.length+sum,0);
console.log('Coverage: ' + pageCoverage + ' of ' + cossy_siteAsJson.pages.length)

function fetchCategory(title,id,siteAsJson,rendererModel) {
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
   
    from(items.filter(x=>x.title == title)).pipe(flatMap(x=>galleryImages(x.value)),filter(x=>x),flatMap(x=>x.items),toArray()).subscribe(items=>
        fs.writeFileSync('/Users/shaiby/Downloads/imported-items.csv',
            '"Title","category","photo","page","ID","Created date","Updated date","Owner"\n'+
            items.map(i=> { 
                const metaData = JSON.parse(i.metaData.replace(/\\/g,''));
                return `"","${id}","image://v1/${i.mediaUrl}/${metaData.height}_${metaData.width}/${metaData.fileName}","","","",`
        }).join('\n'))
    )    
}

//fetchCategory("Free Cars","d5df13be-7e25-4498-9da3-9eceb9511339",cossy_siteAsJson,cossy_rendererModel);
//fetchCategory("Free Fruit","1ee1213d-a061-4b86-92e2-ddb12eb84d51",cossy_siteAsJson,cossy_rendererModel);

//console.log(pages.map(x=>x.ar.length).join(','))
//sameCluster(pages[0],pages[1]));


