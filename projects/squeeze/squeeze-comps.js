jb.const('cossy_siteAsJson',global.cossy_siteAsJson);
jb.const('cossy_rendererModel',global.cossy_rendererModel);
jb.const('clusters',global.cluster(global.cossy_siteAsJson,global.cossy_rendererModel));

jb.component('w1-squeeze.params', {
  type: 'control', 
  impl :{$: 'group', 
  title: 'params', 
  controls: [
    {$: 'table', 
      items: '%$clusters/params%', 
      fields: [
        {$: 'field', title: 'id', data: '%id%' }, 
        {$: 'field', title: 'domain', data: '%domain/length%' }, 
        {$: 'field', title: 'sample', data: '%domain[0]%' }
      ], 
      style :{$: 'table.with-headers' }, 
      visualSizeLimit: 100
    }
  ]
}
}) 

jb.component('w1-squeeze.main', {
  type: 'control', 
  impl :{$: 'group', 
    title: 'Site Clustering', 
    style :{$: 'group.div', width: 320, shadow: '2' }, 
    controls: [
      {$: 'label', 
        title: 'Site Clustering', 
        style :{$: 'label.card-title' }
      }, 
      {$: 'table', 
        items: '%$clusters%', 
        fields: [
          {$: 'field', title: 'largest page', data: '%title%', width: '100' }, 
          {$: 'field', title: 'size', data: '%pages/length%', width: '20' }, 
          {$: 'field.button', 
            title: 'params', 
            buttonText: '%params/length%', 
            action :{$: 'open-dialog', 
              id: '', 
              content :{$: 'group', 
                controls: [
                  {$: 'table', 
                    items: '%params%', 
                    fields: [
                      {$: 'field', title: 'id', data: '%id%' }, 
                      {$: 'field', title: 'domain', data: '%domain/length%' }, 
                      {$: 'field', title: 'sample', data: '%domain[0]%' }
                    ], 
                    style :{$: 'table.with-headers' }, 
                    visualSizeLimit: 100
                  }
                ]
              }, 
              title: 'Params'
            }, 
            width: '20', 
            style :{$: 'table-button.href' }
          }, 
          {$: 'field', 
            title: 'other pages', 
            data :{$: 'join', separator: ',', items: '%pages%', itemName: 'item', itemText: '%title%' }, 
            width: '300', 
            numeric: false
          }
        ], 
        visualSizeLimit: 100, 
        features :{$: 'css.margin', top: '', left: '5' }
      }
    ]
  }
})

