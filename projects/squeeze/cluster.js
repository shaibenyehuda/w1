// utils
function applyPath(obj,path) {
    const pathAr = path.split('$.').pop().split('#')[0].split('.');
    try {
        return pathAr.reduce((o,p)=>o[p],obj);
    } catch(e) {}
    // if (!ret)
    //     console.log('null val for path ' + path);
    // return ret || {};
}
function dataObjOfPage(page,path) {
    if (!page || !page.structure) debugger;
    let comp = applyPath(page.structure.components,path);
    return comp && comp.dataQuery && page.data.document_data[comp.dataQuery.slice(1)];
}

global.clusterDrivers = {
    StyledText: ['text'],
    LinkableButton: {
        params: function(ctx,siteAsJson, rendererModel) {
            const getAnchorLink = page => page.data.document_data[dataObjOfPage(page,ctx.path).link.slice(1)];
            return [
                { id: 'label', get: page=> dataObjOfPage(page,ctx.path).label },
                { id: 'buttonType', get: page=> dataObjOfPage(page,ctx.path).type },
                { id: 'anchorName', get: page=> getAnchorLink(page,ctx.path).anchorName },
                { id: 'targetPageId', get: page=> getAnchorLink(page,ctx.path).pageId },
            ]
        }
    },
    TPAWidget: { 
        params: (ctx,siteAsJson, rendererModel) => {
            const appData = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${ctx.protoDataObj.applicationId}")]`)[0];
            const overrideBaseId = appData.appDefinitionName.replace(/\s/g,'');
            return [
                { id: 'compId', get: page=> applyPath(page.structure.components,ctx.path).id, overrideBaseId  }
            ]
        }
    },
}

global.cluster = function(siteAsJson, rendererModel) {

function clusteringProps(p) {
    let ar = jsonpath.apply(p.structure.components,'$..*.componentType',x=>x)
//        .filter(x=>x.value.split('.').pop() != 'SiteButton')
        .map(x=>x.path.join('.')+'#'+x.value);
    let s = new Set(ar);
    return { ar: Array.from(s), s, comps: p.structure.components}
}

function cluster(pages) {
    let clusters = [];
    pages.forEach((page,i)=>{
        if (page.cluster) return;
        let cluster = { pages: [page] };
        cluster.title = page.value.title;
        page.cluster = cluster;
        clusters.push(cluster);
        pages.slice(i).forEach(toCompare=>{
            if (!toCompare.cluster && toCompare.ar.filter(x=>!page.s.has(x)).length == 0) {
                cluster.pages.push(toCompare);
                toCompare.cluster = cluster;
            }
        })
    })
    return clusters.filter(cl=>cl.pages.length > 1).sort((p1,p2)=>p2.pages.length-p1.pages.length);
}

const excludeTypes = ['GoogleAdSense'];

function calcParamsOfCluster(cl) {
    const protoPage = cl.pages[0];
    const pathsOfObjs = protoPage.ar;
    let paramIds = {};
    cl.params = [].concat.apply([],pathsOfObjs
        .filter(path=>applyPath(protoPage.comps,path).dataQuery)
        .map(path=>{ 
            let comp = applyPath(protoPage.comps,path);
            let protoDataObj = dataObjOfPage(protoPage.value,path);
            return {type: protoDataObj.type, comp, path, protoDataObj, protoPage: protoPage.value }
        }).map(dataObjCtx=>paramsFromDriver(dataObjCtx)))
        .filter(param=>excludeTypes.indexOf(param.effectiveType) == -1)

    function paramsFromDriver(dataObjCtx) {
        const driver = global.clusterDrivers[dataObjCtx.type];
        let params = []
        if (Array.isArray(driver))
            params = driver.map(p=>({ id: p, get: page => dataObjOfPage(page,dataObjCtx.path)[p] }));
        if (typeof driver == 'object' && driver.params)
            params = driver.params(dataObjCtx,siteAsJson, rendererModel);
        if (params.length == 0) return [];
        let paramBaseId = calcParamId(params[0].overrideBaseId || dataObjCtx.protoDataObj.type);
        params.forEach(param=> {
            param.effectiveType = param.overrideBaseId || dataObjCtx.protoDataObj.type;
            param.id = paramBaseId + '.' + param.id;
            param.baseId = paramBaseId;
            param.dataId = dataObjCtx.protoDataObj.id; // for UI match
            param.domain = Array.from(new Set(cl.pages.map(page=>{ 
                if (dataObjOfPage(page.value,dataObjCtx.path))
                    return param.get(page.value)
            })));
        });
        return params;
    }
    function calcParamId(name) {
        if (!paramIds[name]) {
            paramIds[name] = true;
            return name;
        }
        var match = name.match(/(.*)([0-9]+)$/);
        if (!match)
            return calcParamId(name+'2');
        else
            return calcParamId(match[1]+(Number(match[2])+1));
    }
}

const pages = siteAsJson.pages.map((page,i)=> 
        Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
        .sort((p1,p2)=>p2.ar.length - p1.ar.length);
let clusters = cluster(pages);
clusters.forEach(cl=>calcParamsOfCluster(cl));

return clusters;

}