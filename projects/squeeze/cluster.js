// if (typeof window == 'undefined')
//     window = global.win;

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
    function nickNameOfPage(page,path) {
        if (!page || !page.structure) debugger;
        const comp = applyPath(page.structure.components,path);
        const res = comp && comp.connectionQuery && page.data.connections_data[comp.connectionQuery].items[0].role;
        if (!res) debugger;
        return res;
    }
    function translatePageRef(pageId) {
        const pageName = siteAsJson.pages.filter(pg=>pg.structure.id == pageId)[0].title.replace(/\W/g,'');
        const cluster = clusters.filter(cl=>cl.pages.filter(pg => pg.value.structure.id == pageId).length)[0];
        if (!cluster)
            return `/${pageName}`;
        return `/${cluster.id}/${pageName}`;
    }
    
    fileDesc = fn => ({ virtual: true, localTimeStamp: 0, eTag: "\"virtual\"", name: fn.split('/').pop(), length: 0, directory: false, location: fn, attributes: { readOnly: false } });
    
    const clusterDrivers = {
        StyledText: { params: ctx => ([
            { id: 'text', 
                get: page=> 
                    dataObjOfPage(page,ctx.path).text, 
                wixCodeSetter: 'html' 
            },
        ]) },
        LinkableButton: {
            params: ctx => {
                return [
                    { id: 'label', get: page=> { 
                            const dataObj = dataObjOfPage(page,ctx.path).label;
                            return dataObj && dataObj.label;
                        }
                    },
                    { id: 'link' , get: page=> { 
                        try {
                            const dataObj = dataObjOfPage(page,ctx.path);
                            const anchorLink = page.data.document_data[dataObj.link.slice(1)];
                            return translatePageRef(anchorLink.pageId.slice(1));
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
                        `http://progallery.wix.com/gallery.html?compId=${applyPath(page.structure.components,ctx.path).id}&instance=${instance}`
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
        let cluster = clusterCalc.construct(page);
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

let notSupportedMessage = new Set();

const clusterCalc = {
    construct: page => {
        let self = {};
        self.page = page;
        self.pageId = page.value.structure.id;
        self.pages = [page];
        self.title = page.value.title;
        self.id = 'Like'+ page.value.title.replace(/\W/g,'');
        page.cluster = self;
        return self;
    },
    calcParams: self => {
        const protoPage = self.pages[0];
        const pathsOfObjs = protoPage.ar;
        let paramIds = {};
        self.notSupportedComps = self.notSupportedComps || {};
        self.paramObjs = pathsOfObjs
            .filter(path=>applyPath(protoPage.comps,path).dataQuery)
            .map(path=>{ 
                const comp = applyPath(protoPage.comps,path);
                const protoDataObj = dataObjOfPage(protoPage.value,path);
                const driver = clusterDrivers[protoDataObj.type];
                if (!driver)
                    self.notSupportedComps[protoDataObj.type] = (self.notSupportedComps[protoDataObj.type] || 0)+1;
 
                var pagesWithParam = self.pages.filter(page=>dataObjOfPage(page.value,path));
                var effectiveType = driver && driver.overrideBaseId ? driver.overrideBaseId({path,protoDataObj}) : protoDataObj.type;
                var id = calcParamId(effectiveType);
                var params = [];
                if (typeof driver == 'object' && driver.params)
                    params = driver.params({path,protoDataObj});
                else if (!driver)
                    params = Object.getOwnPropertyNames(protoDataObj).filter(p=>p!='id')
                        .map(p=>({ id: p, get: page => {
                            let ret = JSON.stringify(dataObjOfPage(page,path)[p]);
                            if (typeof ret == 'string' && ret.indexOf('#dataItem-') == 0)
                                ret = page.data.document_data[ret.slice(1)];
                            return ret;
                        }
                    }));

                params = params.map(param=> Object.assign(param,{
                    id: (param.id == 'this') ? id  : (id+ '_' + param.id),
                    wixCodeSetter: param.wixCodeSetter || param.id,
                    domain: Array.from(new Set(pagesWithParam.map(page=>{ 
                        try {
                            if (dataObjOfPage(page.value,path))
                                return param.get(page.value)
                        } catch (e) {}
                    }).filter(x=>x)))
                }))
                .filter(param=>param.domain.length > 1);
    
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
        },
        calcDB: self => {
            self.db = {};
            self.pages.forEach(page=>{
                let pageVals = { title: page.title};
                self.paramObjs.forEach(paramObj=>paramObj.params.forEach(param=>{
                    let val = '';
                    try {
                        val = param.get(page.value);
                    } catch (e) {}
                    pageVals[param.id] = val;
                }
                ));
                self.db[page.title.replace(/\W/g,'')] = pageVals;
            })
            self.dbAsStr = `export const ${self.id} = ` + JSON.stringify(self.db,null,2);
        },
        addRouter: self => {
            const routerPtr = ds.routers.add(
                Object.assign({},_.find(frames[0].rendered.props.siteData.rendererModel.clientSpecMap.toJS()),{ 
                    appDefinitionId: "wix-code", 
                    prefix: self.id, 
                    config: { routerFunctionName: `${self.id}_Router`, siteMapFunctionName: `${self.id}_SiteMap` } 
                }));
            ds.routers.pages.connect(routerPtr, {type: "DESKTOP", id: self.pageId }, self.pageId);
        },
        wixCode: self => {
            return `import wixWindow from 'wix-window';\n\n$w.onReady(function () { \n const data = wixWindow.getRouterData();\n`+
                self.paramObjs.map(paramObj=>{
                    const nickName = nickNameOfPage(self.page.value,paramObj.path);
                    return paramObj.params.map(param=> 
                        `  $w('#${nickName}').${param.wixCodeSetter} = data.${param.id};\n`)
                        .join('')
            }).join('') + '\n});'
        }
            //ds.wixCode.fileSystem.writeFile(`public/pages/${cl.pages[0].value.structure.id}.js`,cl.wixCode)
    }

    return ({
        clusterCalc,
        run() {
            this.init();
            this.removeRedundentPages();
            this.injectDB();
            this.injectRouters();
            this.injectWixCode();
        },
        init: () => {
            const pages = siteAsJson.pages.map((page,i)=> 
            Object.assign({value: page, index:i , title: page.title }, clusteringProps(page)))
            .sort((p1,p2)=>p2.ar.length - p1.ar.length);
            window.clusters = clusterPages(pages); // clusters must be global. It is used by translatePageRef()
            clusters.forEach(cl=> { 
                clusterCalc.calcParams(cl);
                clusterCalc.calcDB(cl); 
            });
            return clusters;
        },
        injectDB: () => {
            clusters.forEach(cl=>ds.wixCode.fileSystem.writeFile(fileDesc(`backend/${cl.id}_db.js`),cl.dbAsStr));
            const routersFile = fileDesc('backend/routers.js');
            let content = 'import {ok, notFound, WixRouterSitemapEntry} from "wix-router";\n' + 
                clusters.map(cl=> routerFileContent.replace(/PAGE_ID/g,cl.id).replace(/PAGE_TITLE/g,cl.title)).join('\n');
            ds.wixCode.fileSystem.writeFile(routersFile, content);
            //clusters.forEach(cl=>clusterCalc.addRouter(cl) );
        },
        notSupportedComps: () => {
            let result = {};
            clusters.forEach(cl=>Object.getOwnPropertyNames(cl.notSupportedComps)
                .forEach(p=> result[p] = (result[p] || 0)+(cl.notSupportedComps[p] || 0) ) );
            return Object.getOwnPropertyNames(result).map(p=>`${p} - ${result[p]}`);
        },

        injectRouters: () => {
            clusters.forEach(cl=>clusterCalc.addRouter(cl) );
        },
        injectWixCode: () => {
            clusters.forEach(cl=>ds.wixCode.fileSystem.writeFile(fileDesc(`public/pages/${cl.pageId}.js`), clusterCalc.wixCode(cl)) );
        },
        storeToSessionStorage: () => 
            sessionStorage.setItem('clusters',JSON.stringify(fixJSON(clusters))),

        loadFromSessionStorage: 
             sessionStorage.getItem('clusters'),
             
        removeRedundentPages: () => {
            clusters.forEach(cl=>cl.pages.slice(1).forEach(page=> {
                    console.log('removing page ' + page.value.title);
                    ds.pages.remove(page.value.structure.id,_=>console.log(page.value.title + ' page removed')) 
                } ));
            // ds.waitForChangesApplied
        },
    
        _removeMostOfTheRecurringPages: () => {
            clusters.forEach(cl=>cl.pages.slice(5).forEach(page=> {
                    console.log('removing page ' + page.value.title);
                    ds.pages.remove(page.value.structure.id,_=>console.log(page.value.title + ' page removed')) 
                } ));
            // ds.waitForChangesApplied
        },
        statistics: () => {
            console.log(clusters);
            console.log(clusters.map(cl=>`${cl.pages.length}: ${cl.pages[0].ar.length}-${cl.pages.slice(-1)[0].ar.length}`))
            pageCoverage = clusters.reduce((sum,cl)=>cl.pages.length+sum,0);
            console.log('Coverage: ' + pageCoverage + ' of ' + siteAsJson.pages.length);
        }
    })
}

//window.global = global || {}
//global.pageClustering = pageClustering;
