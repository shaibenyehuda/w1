function gotoPreview() {
    const siteId = rendered.props.siteData.siteId;
    const metaSiteId = rendered.props.siteData.rendererModel.metaSiteId;
    document.location.href = `https://editor.wix.com/html/editor/web/renderer/render/document/${siteId}?isEdited=true&isSantaEditor=true&dsOrigin=Editor1.4&lang=en&metaSiteId=${metaSiteId}&disableSave=true`
}

fixJSON = o => JSON.parse(JSON.stringify(JSON.decycle(o)));

setTimeout(_=>{
    let preview = [window, ...Array.from(window.parent.frames)].filter(x=>{try {return x.siteAsJson} catch (e) {}})[0];
    const siteAsJson = fixJSON(preview.siteAsJson);
    const rendererModel = fixJSON(preview.rendererModel);
    ds = preview.documentServices;
    cluster = new pageClustering(siteAsJson,rendererModel,preview, ds, editorAPI);
},1000) // wait for libs to load
