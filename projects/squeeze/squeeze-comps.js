jb.const('cossy_siteAsJson',global.cossy_siteAsJson);
jb.const('cossy_rendererModel',global.cossy_rendererModel);
jb.const('clusters',global.cluster(global.cossy_siteAsJson,global.cossy_rendererModel));

jb.component('w1-squeeze.main', {
  type: 'control', 
  impl :{$: 'group', 
    controls: [
      {$: 'table', 
        items: '%$clusters%', 
        fields: [
          {$: 'field', title: 'largest page', data: '%title%', width: '100' }, 
          {$: 'field', title: 'size', data: '%length%', width: '20' }, 
          {$: 'field', 
            title: 'other pages', 
            data :{$: 'join', separator: ',', items: '%%', itemName: 'item', itemText: '%title%' }, 
            width: '500', 
            numeric: false
          }
        ], 
        visualSizeLimit: 100
      }
    ]
  }
})

