
pageClustering = function(siteAsJson, rendererModel,preview) {
    const excludeTypes = ['GoogleAdSense'];
    let clusterIds = {};

    function applyPath(obj,path) {
        const pathAr = path.split('$.').pop().split('#')[0].split('.');
        try {
            return pathAr.reduce((o,p)=>o[p],obj);
        } catch(e) {}
        // if (!ret)
        //     console.log('null val for path ' + path);
        // return ret || {};
    }
    function compIdOfPage(page,path) {
        if (!page || !page.structure) debugger;
        const comp = applyPath(page.structure.components,path);
        return comp && comp.id;
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
    function calcId(candidate,ids) {
        if (!ids[candidate]) {
            ids[candidate] = true;
            return candidate;
        }
        var match = candidate.match(/(.*)([0-9]+)$/);
        if (!match)
            return calcId(candidate+'2',ids);
        else
            return calcId(match[1]+(Number(match[2])+1),ids);
    }

    fileDesc = fn => ({ virtual: true, localTimeStamp: 0, eTag: "\"virtual\"", name: fn.split('/').pop(), length: 0, directory: false, location: fn, attributes: { readOnly: false } });
    
    const clusterDrivers = {
        StyledText: { short: 'Txt', params: ctx => ([
            { id: 'text', collectionType: 'richtext',
                get: page=> 
                    dataObjOfPage(page,ctx.path).text, 
                wixCodeSetter: 'html' 
            },
        ]) },
        LinkableButton: {
            short: 'Btn', 
            params: ctx => {
                return [
                    { id: 'label', get: page=> { 
                            const dataObj = dataObjOfPage(page,ctx.path).label;
                            return dataObj && dataObj.label;
                        }
                    },
                    { id: 'link' ,  collectionType: 'url', 
                        get: page=> { 
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
        Image: {
            short: 'Img', 
            params: ctx => {
                return [
                    { id: 'image', collectionType: 'image', 
                        get: page=> { 
                            const dataObj = dataObjOfPage(page,ctx.path);
                            return [dataObj.uri,dataObj.width,dataObj.height];
                        }
                    }]
                    .concat(ctx.protoDataObj.link ? 
                        [{ id: 'link' ,  collectionType: 'url', 
                            get: page=> { 
                            try {
                                const dataObj = dataObjOfPage(page,ctx.path);
                                return dataObj.link && translatePageRef(dataObj.link.pageId.slice(1));
                            } catch (e) {
                                console.log(dataObj,page,ctx,e);
                            }
                            }
                    }] : [])
            }
        },
        ImageButton: {
            short: 'Btn', 
            params: ctx => {
                return [
                    { id: 'image', collectionType: 'image', 
                        get: page=> { 
                            const dataObj = dataObjOfPage(page,ctx.path);
                            const anchorLink = page.data.document_data[dataObj.link.slice(1)];
                            return siteAsJson.pages.filter(p=>p.structure.id == anchorLink.pageId.slice(1))[0].title;
                        }
                    },
                    { id: 'link' ,  collectionType: 'url', 
                        get: page=> { 
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
        TPAWidget: { 
            short(ctx) {
                return this.overrideBaseId(ctx)
            },
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
        
function clusteringProps(p,unSupportedComps) {
    const paths = jsonpath.apply(p.structure.components,'$..*.componentType',x=>x)
        .map(x=>x.path.join('.')+'#'+x.value);
    const s = new Set(paths), ar = Array.from(s);
    const hasUnsupportedComps =  ! ar.filter(path=>{
        const dataObj = dataObjOfPage(p,path);
        if (dataObj && !clusterDrivers[dataObj.type]) 
            unSupportedComps.add(dataObj.type);
        return dataObj && clusterDrivers[dataObj.type]
    })[0];
    return { ar, s, hasUnsupportedComps, comps: p.structure.components}
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
    construct(page) {
        let self = {};
        self.page = page;
        self.pageId = page.value.structure.id;
        self.pages = [page];
        self.title = page.value.title;
//        self.id = 'Like'+ page.value.title.replace(/\W/g,'');
        page.cluster = self;
        return self;
    },
    calcParams(self) {
        const protoPage = self.pages[0];
        const pathsOfObjs = protoPage.ar;
        let paramIds = {};
        self.notSupportedComps = self.notSupportedComps || {};
        self.paramObjs = pathsOfObjs
            .filter(path=>applyPath(protoPage.comps,path).dataQuery)
            .map(path=>{ 
                const comp = applyPath(protoPage.comps,path);
                const protoDataObj = dataObjOfPage(protoPage.value,path);
                let idPart = 'unknown';
                const driver = clusterDrivers[protoDataObj.type];
                if (!driver)
                    self.notSupportedComps[protoDataObj.type] = (self.notSupportedComps[protoDataObj.type] || 0)+1;
                else
                    idPart = typeof(driver.short) == 'function' ? driver.short({path,protoDataObj}) : driver.short;
 
                var pagesWithParam = self.pages.filter(page=>dataObjOfPage(page.value,path));
                var effectiveType = driver && driver.overrideBaseId ? driver.overrideBaseId({path,protoDataObj}) : protoDataObj.type;
                const id = calcId(effectiveType,paramIds);
                const layoutDomain = Array.from(new Set(pagesWithParam
                    .map(page=>applyPath(page.value.structure.components,path)).map(x=>x.layout)
                    .map(layout=> [layout.x,layout.width].join(','))));
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
    
                return {id, idPart, layoutDomain, effectiveType, path, protoDataObj, params, pagesWithParam: pagesWithParam.length,         dataId: protoDataObj.id }
            })
            .filter(paramObj=>excludeTypes.indexOf(paramObj.effectiveType) == -1)
            .filter(paramObj=>paramObj.params && paramObj.params.length);

        self.id = calcId(self.paramObjs.slice(0,5).map(x=>x.idPart).join('').replace(/Wix/g,''),clusterIds);
    },
    calcDB(self) {
        self.db = {};
        const rows = self.pages.map(page=>{
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
            return pageVals;
        })
        self.bulkInsertParams = [self.id,rows,{}];
        const firstRecord = self.db[Object.getOwnPropertyNames(self.db)[0]];
        self.dbAsStr = `export const ${self.id} = ` + JSON.stringify(self.db,null,2);
        let fields = {};
        self.paramObjs.forEach(paramObj=>paramObj.params.forEach(param=>
            fields[param.id] = { displayName: param.id, type: param.collectionType || 'text'}));
        self.collectionDef= { id: self.id, displayName: self.id, displayField: 'title', fields }
    },
    addRouter(self) {
        const routerPtr = ds.routers.add(
            Object.assign({},_.find(preview.rendered.props.siteData.rendererModel.clientSpecMap.toJS()),{ 
                appDefinitionId: "wix-code", 
                prefix: self.id, 
                config: { routerFunctionName: `${self.id}_Router`, siteMapFunctionName: `${self.id}_SiteMap` } 
            }));
        ds.routers.pages.connect(routerPtr, {type: "DESKTOP", id: self.pageId }, self.pageId);
    },
    addControllerToPage(self) {
        const controlller = {
            type: "Component", layout: {width: 60,height: 78,x: 450,y: 70}, componentType: "platform.components.AppController",
            data: {
                type: "AppController",
                name: self.id + " item", controllerType: "router_dataset", applicationId: "dataBinding",
                },
            style: "controller1",
            connections: { type: "ConnectionList", items: [{type: "WixCodeConnectionItem","role": "dynamicDataset" }]},
        };
        self.pageControllerRef = ds.components.add({type: "DESKTOP", id: self.pageId }, controlller)
//            settings: `{"dataset":{"collectionName":"${self.id}","readWriteType":"READ","filter":null,"sort":null,"includes":null,"pageSize":20}}`,
    },
    addDynamicPageRouter(self) {
        self.dynamicPageRouter = ds.routers.add(
            Object.assign({},_.find(preview.rendered.props.siteData.rendererModel.clientSpecMap.toJS()),{ 
                appDefinitionId: "dataBinding", 
                prefix: self.id, 
                config: { patterns: {
                    "/{title}": {
                    pageRole: self.pageId,
                    title: "{title}",
                    config: { collection: self.id },
                    seoMetaTags: {}
                    }
                } }
        }));
        ds.routers.pages.connect(self.dynamicPageRouter, {type: "DESKTOP", id: self.pageId }, [self.pageId])
    },
    connectParams(self) {
        self.paramObjs.forEach(paramObj=>{
            paramObj.params.forEach(param=> ds.platform.controllers.connections.connect(
                { type: "DESKTOP", id: compIdOfPage(self.page.value,paramObj.path) },
                self.pageControllerRef,
                'textRole', // ??
                { properties: { label: { fieldName: param.id }, $text: { fieldName: param.id }  }} 
            ))
        })
    },
    injectDataBinding(self) {
        this.addControllerToPage(self);
        this.addDynamicPageRouter(self);
        setTimeout(()=>this.connectParams(self),1); // why on next timer??
    },
    bulkInsertToCollection(self) {
        const instance = _.find(rendererModel.clientSpecMap,x=>x.type == 'siteextension').instance;
        return fetch(
            `https://code-dev.apps.wix.com/api/wix/data-web.jsw/bulkInsert.ajax?viewMode=preview&instance=${instance}&scari=${ds.wixCode.fileSystem.getViewerInfo().scari}`,
            {
            "method":"POST", "mode":"cors",
            "headers":{ "Content-type": "application/json" },
            "referrer":"https://static.parastorage.com/services/cm-editor-app/1.386.0/import-panel.cdn.html?applicationId=9177",
            "referrerPolicy":"no-referrer-when-downgrade",
            "body": JSON.stringify(self.bulkInsertParams),
            "credentials": "include"
            }
        )
    },        
    wixCode(self) {
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
let clusters = [];

return {
    clusterCalc,
    injectDataBinding() {
        this.init();
        this.injectCollections();
        clusters.forEach(cl=>clusterCalc.injectDataBinding(cl) );
    },
    run() {
        this.init();
        this.removeRedundentPages();
        this.injectDB();
        this.injectRouters();
        this.injectWixCode();
    },
    init() {
        let unSupportedComps = new Set();
        const pages = siteAsJson.pages.map((page,i)=> 
            Object.assign({value: page, index:i , title: page.title }, clusteringProps(page,unSupportedComps)))
            .sort((p1,p2)=>p2.ar.length - p1.ar.length);
        const notToCluster = pages.filter(p=>p.hasUnsupportedComps);
        console.log(notToCluster.length + ' of ' + pages.length + ' pages can not be clustered because of unsupported components: ' + Array.from(unSupportedComps).join(','));
        const pagesToCluster = pages.filter(p=>!p.hasUnsupportedComps);
                    
        clusters = clusterPages(pagesToCluster); // clusters must be global. It is used by translatePageRef()
        clusters.forEach(cl=> { 
            clusterCalc.calcParams(cl);
            clusterCalc.calcDB(cl); 
        });
        window.clusters = clusters;
        return clusters;
    },
    injectDB() {
        clusters.forEach(cl=>ds.wixCode.fileSystem.writeFile(fileDesc(`backend/${cl.id}_db.js`),cl.dbAsStr));
        const routersFile = fileDesc('backend/routers.js');
        let content = 'import {ok, notFound, WixRouterSitemapEntry} from "wix-router";\n' + 
            clusters.map(cl=> routerFileContent.replace(/PAGE_ID/g,cl.id).replace(/PAGE_TITLE/g,cl.title)).join('\n');
        ds.wixCode.fileSystem.writeFile(routersFile, content);
        //clusters.forEach(cl=>clusterCalc.addRouter(cl) );
    },
    injectCollections() {
        clusters.forEach(cl=> {
            ds.wixCode.fileSystem.writeFile(fileDesc(`.schemas/${cl.id}.json`),JSON.stringify(cl.collectionDef))
                .then(() => ds.wixCode.fileSystem.flush())
                .then(() => clusterCalc.bulkInsertToCollection(cl));
        });
    },
    notSupportedComps() {
        let result = {};
        clusters.forEach(cl=>Object.getOwnPropertyNames(cl.notSupportedComps)
            .forEach(p=> result[p] = (result[p] || 0)+(cl.notSupportedComps[p] || 0) ) );
        return Object.getOwnPropertyNames(result).map(p=>`${p} - ${result[p]}`);
    },

    injectRouters() {
        clusters.forEach(cl=>clusterCalc.addRouter(cl) );
    },
    injectWixCode() {
        clusters.forEach(cl=>ds.wixCode.fileSystem.writeFile(fileDesc(`public/pages/${cl.pageId}.js`), clusterCalc.wixCode(cl)) );
    },
    removeRedundentPages() {
        clusters.forEach(cl=>cl.pages.slice(1).forEach(page=> {
                console.log('removing page ' + page.value.title);
                ds.pages.remove(page.value.structure.id,_=>console.log(page.value.title + ' page removed')) 
            } ));
        // ds.waitForChangesApplied
    },
    _keepTwoPages() {
        clusters.forEach(cl=>cl.pages.forEach(page=> {
                console.log('removing page ' + page.value.title);
                if (page.value.title != 'Home' && page != clusters[0].pages[0] && page != clusters[0].pages[1])
                    ds.pages.remove(page.value.structure.id,_=>console.log(page.value.title + ' page removed')) 
            } ));
        // ds.waitForChangesApplied
    },

    _removeMostOfTheRecurringPages() {
        clusters.forEach(cl=>cl.pages.slice(5).forEach(page=> {
                console.log('removing page ' + page.value.title);
                ds.pages.remove(page.value.structure.id,_=>console.log(page.value.title + ' page removed')) 
            } ));
        // ds.waitForChangesApplied
    },
    statistics() {
        console.log(clusters);
        console.log(clusters.map(cl=>`${cl.pages.length}: ${cl.pages[0].ar.length}-${cl.pages.slice(-1)[0].ar.length}`))
        pageCoverage = clusters.reduce((sum,cl)=>cl.pages.length+sum,0);
        console.log('Coverage: ' + pageCoverage + ' of ' + siteAsJson.pages.length);
    }
  }
}
 