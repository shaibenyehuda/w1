global.clusterDrivers = {
    StyledText: ['text'],
    LinkableButton: { 
        get: e => {
            const anchorLink = e.page.data.document_data[e.dataObj.link.slice(1)];
            return {
                label: e.dataObj.label,
                type: e.dataObj.type,
                anchorName: anchorLink.anchorName,
                pageId: anchorLink.pageId
            }
        }
    },
    TPAWidget: { 
        get: (e,siteAsJson, rendererModel) => {
            const appData = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${e.dataObj.applicationId}")]`)[0];
            const instance = appData.instance;
            const url = `http://progallery.wix.com/gallery.html?compId=${e.comp.id}&instance=${instance}`;
            return {
                instance,url
            }
        }
    },
}

global.cluster = function(siteAsJson, rendererModel) {

function paramsOfType(e) {
    const driver = clusterDrivers[e.type];
    if (Array.isArray(driver)) {
        var ret = {};
        driver.forEach(p=>ret[p] = e.dataObj[p])
        return ret;
    }
    if (typeof driver == 'object' && driver.get)
        return driver.get(e,siteAsJson, rendererModel)
}

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
            return {type: dataObj.type, app: dataObj.applicationId, comp, path, dataObj, page: cl[0].value }
        }).map(e=>Object.assign(e,paramsOfType(e)))
}

const pages = siteAsJson.pages.map((page,i)=> 
        Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
        .sort((p1,p2)=>p2.ar.length - p1.ar.length);
let clusters = cluster(pages);
clusters.forEach(cl=>calcParamsOfCluster(cl));

return clusters;

}