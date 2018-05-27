const jsonpath = require('jsonpath');
const fetch = require('node-fetch');
const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap, flatMap, first } = require('rxjs/operators');
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
                //console.log(''+html);
            })
        })
}
function histogram(l) { 
    var res = {};
    l.forEach(item=>{
        res[item] = res[item] || 0;
        res[item]++;
    })
    return Object.getOwnPropertyNames(res)
        .map(p=>({id: p,count:res[p]}))
        .sort((x,y)=>y.count-x.count);
}
const types = jsonpath.query(siteAsJson,'$..componentType');
var widgets = '$..*[?(@.componentType=="wysiwyg.viewer.components.tpapps.TPAWidget")]';
var items = jsonpath.apply(siteAsJson,widgets,x=>x)
    .filter(x=>x.path[1] == 'pages')
    .filter(x=>x.path[4] == 'components')
    .map(({path,value})=>({path,value,id:value.id,title:siteAsJson.pages[path[2]].title}));
var cars = items.filter(x=>x.title == "Free Cars");
//cars.map(x=>galleryImages(x.value))
from(cars).pipe(flatMap(x=>galleryImages(x.value)),filter(x=>x),flatMap(x=>x.items),first()).subscribe(x=>console.log(JSON.stringify(x)))
//galleryImages(cars[2].value).then(x=>console.log(x));
//const types_histogram = histogram(types);






