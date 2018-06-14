function gotoPreview() {
    const siteId = rendered.props.siteData.siteId;
    const metaSiteId = rendered.props.siteData.rendererModel.metaSiteId;
    document.location.href = `https://editor.wix.com/html/editor/web/renderer/render/document/${siteId}?isEdited=true&isSantaEditor=true&dsOrigin=Editor1.4&lang=en&metaSiteId=${metaSiteId}&disableSave=true`
}

fixJSON = o => JSON.parse(JSON.stringify(JSON.decycle(o)));

setTimeout(_=>{
    const siteAsJson = fixJSON(window.siteAsJson || (window.parent.frames[0].siteAsJson));
    const rendererModel = fixJSON(window.rendererModel|| (window.parent.frames[0].rendererModel));
    cluster = new pageClustering(siteAsJson,rendererModel);
    ds = Array.from(frames).filter(f=>f.documentServices)[0].documentServices;
},1000) // wait for libs to load
