pageClustering = function(siteAsJson, rendererModel) {
    const excludeTypes = ['GoogleAdSense'];

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
        const comp = applyPath(page.structure.components,path);
        return comp && comp.dataQuery && page.data.document_data[comp.dataQuery.slice(1)];
    }
    
    fileDesc = fn => ({ virtual: true, localTimeStamp: 0, eTag: "\"virtual\"", name: fn.split('/').pop(), length: 0, directory: false, location: fn, attributes: { readOnly: false } });
    
    const clusterDrivers = {
        StyledText: ['text'],
        LinkableButton: {
            params: ctx => {
                return [
                    { id: 'label', get: page=> { 
                            const dataObj = dataObjOfPage(page,ctx.path).label;
                            return dataObj && dataObj.label;
                        }
                    },
                    { id: 'url', get: page=> { 
                        try {
                            const dataObj = dataObjOfPage(page,ctx.path);
                            const anchorLink = page.data.document_data[dataObj.link.slice(1)];
                            return anchorLink.pageId + ',' + siteAsJson.pages.filter(p=>p.structure.id == anchorLink.pageId.slice(1))[0].title;
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
                var instance = jsonpath.query(rendererModel,`$..*[?(@.applicationId=="${ctx.protoDataObj.applicationId}")]`)[0].instance;
                       
                return [ { id: 'this', 
                    get: page=> 
                        `http://progallery.wix.com/gallery.html?compId=${applyPath(page.structure.components,path).id}&instance=${instance}`
                } ]
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

function clusterPages(pages) {
    let clusters = [];
    pages.forEach((page,i)=>{
        if (page.cluster) return;
        let cluster = new Cluster(page);
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

class Cluster {
    constructor(page) {
        this.page = page;
        this.pages = [page];
        this.title = page.value.title;
        this.id = 'Like_'+ page.value.title.replace(/\W/g,'_');
        page.cluster = this;
    }
    calcParams() {
        const protoPage = this.pages[0];
        const pathsOfObjs = protoPage.ar;
        let paramIds = {};
        this.paramObjs = pathsOfObjs
            .filter(path=>applyPath(protoPage.comps,path).dataQuery)
            .map(path=>{ 
                const comp = applyPath(protoPage.comps,path);
                const protoDataObj = dataObjOfPage(protoPage.value,path);
                const driver = clusterDrivers[protoDataObj.type];
                var pagesWithParam = this.pages.filter(page=>dataObjOfPage(page.value,path));
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
                        }).filter(x=>x)))
                    }))
                    .filter(param=>param.domain.length > 1);
    
    //                if (pagesWithParam.length < this.pages.length)
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
        calcDB() {
            this.db = {};
            this.pages.forEach(page=>{
                let pageVals = { title: page.title};
                this.paramObjs.forEach(paramObj=>paramObj.params.forEach(param=>{
                    let val = '';
                    try {
                        val = param.get(page.value);
                    } catch (e) {}
                    pageVals[param.id] = val;
                }
                ));
                this.db[page.title] = pageVals;
            })
            this.dbAsStr = `export const ${this.id} = ` + JSON.stringify(this.db,null,2);
        }
        addRouterFiles() {
            ds.wixCode.fileSystem.writeFile(fileDesc('backend/routers.js'),routerFileContent.replace(/GENERIC_PAGE/g,this.id));
            ds.wixCode.fileSystem.writeFile(fileDesc(`backend/${this.id}_db.js`),this.dbAsStr);
        }
        addRouter() {
            ds.routers.add(_.find(rendered.props.siteData.rendererModel.clientSpecMap.toJS(),{appDefinitionId: "wix-code"}),
            null,
            {
                prefix: this.id, config: { routerFunctionName: `${this.id}_Router`, siteMapFunctionName: `${this.id}_SiteMap` }
            })
        }
            //ds.wixCode.fileSystem.writeFile(`public/pages/${cl.pages[0].value.structure.id}.js`,cl.wixCode)
    }
            
    const pages = siteAsJson.pages.map((page,i)=> 
            Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
            .sort((p1,p2)=>p2.ar.length - p1.ar.length);
    let clusters = clusterPages(pages);
    clusters.forEach(cl=> { 
        cl.calcParams();
        cl.calcDB(); 
    });

    return clusters;
}

//window.global = global || {}
//global.pageClustering = pageClustering;
