// utils
pageClustering = function(siteAsJson, rendererModel) {

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
    
    const clusterDrivers = {
        StyledText: ['text'],
        LinkableButton: {
            params: ctx => {
                return [
                    { id: 'this', get: page=> { 
                        try {
                            const dataObj = dataObjOfPage(page,ctx.path);
                            const anchorLink = page.data.document_data[dataObj.link.slice(1)];
                            const anchorName = anchorLink.anchorName;
                            return dataObj.label + ',' + siteAsJson.pages.filter(p=>p.structure.id == anchorLink.pageId.slice(1))[0].title;
                        } catch (e) {
                            console.log(dataObj,page,ctx,e);
                        }
                        }
                    },
                ]
            }
        },
        ImageButton: {
            params: ctx => {
                return [
                    { id: 'this', get: page=> { 
                        const dataObj = dataObjOfPage(page,ctx.path);
                        const anchorLink = page.data.document_data[dataObj.link.slice(1)];
                        const anchorName = anchorLink.anchorName;
                        return siteAsJson.pages.filter(p=>p.structure.id == anchorLink.pageId.slice(1))[0].title;
                    }
                    },
                ]
            }
        },
        TPAWidget: { 
            overrideBaseId: ctx => {
                const appData = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${ctx.protoDataObj.applicationId}")]`)[0];
                return appData.appDefinitionName.replace(/\s/g,'');
            },
            params: ctx => {
                return [ { id: 'images', get: page=> applyPath(page.structure.components,ctx.path).id + ' .. images TBD' } ]
            }
        },
    }
        


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
    cl.paramObjs = pathsOfObjs
        .filter(path=>applyPath(protoPage.comps,path).dataQuery)
        .map(path=>{ 
            const comp = applyPath(protoPage.comps,path);
            const protoDataObj = dataObjOfPage(protoPage.value,path);
            const driver = clusterDrivers[protoDataObj.type];
            var pagesWithParam = cl.pages.filter(page=>dataObjOfPage(page.value,path));
            if (driver) {
                var effectiveType = driver.overrideBaseId ? driver.overrideBaseId({path,protoDataObj}) : protoDataObj.type;
                var id = calcParamId(effectiveType);
                var params = [];
                if (Array.isArray(driver))
                    params = driver.map(p=>({ id: p, get: page => dataObjOfPage(page,path)[p] }));
                if (typeof driver == 'object' && driver.params)
                    params = driver.params({path,protoDataObj});
                params = params.map(param=> Object.assign(param,{
                    id: (param.id == 'this') ? id  : (id+ '.' + param.id),
                    domain: Array.from(new Set(pagesWithParam.map(page=>{ 
                        try {
                            if (dataObjOfPage(page.value,path))
                                return param.get(page.value)
                        } catch (e) {}
                    })))
                }))
                .filter(param=>param.domain.length > 1);

//                if (pagesWithParam.length < cl.pages.length)
//                    params.push({id: 'has'+id, domain: ['yes','no'], })
            }
            return {id, effectiveType, path, protoDataObj, params, pagesWithParam: pagesWithParam.length, dataId: protoDataObj.id }
        })
        .filter(paramObj=>excludeTypes.indexOf(paramObj.effectiveType) == -1)
        .filter(paramObj=>paramObj.params && paramObj.params.length);
    
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

    function calcDB(cl) {
        cl.db = {};
        cl.pages.forEach(page=>{
            let pageVals = { title: page.title};
            cl.paramObjs.forEach(paramObj=>paramObj.params.forEach(param=>{
                let val = '';
                try {
                    val = param.get(page.value);
                } catch (e) {}
                pageVals[param.id] = val;
            }
            ));
            cl.db[page.title] = pageVals;
        })
        cl.dbAsStr = `export const Like${cl.title.replace(/\s/g,'')} = ` + JSON.stringify(cl.db,null,2);
    }

    const pages = siteAsJson.pages.map((page,i)=> 
            Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
            .sort((p1,p2)=>p2.ar.length - p1.ar.length);
    let clusters = cluster(pages);
    clusters.forEach(cl=> { 
        calcParamsOfCluster(cl);
        calcDB(cl); 
    });

    return clusters;

}

//window.global = global || {}
//global.pageClustering = pageClustering;
