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
          {$: 'field', title: '#pages', data: '%pages/length%', width: '20' }, 
          {$: 'field.button', 
            title: '#params', 
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
            title: 'sample pages (first is master)', 
            data :{
              $pipeline: [
                '%pages%', 
                {$: 'slice', start: '0', end: '5' }, 
                {$: 'join', separator: ', ', items: '%%', itemName: 'item', itemText: '%title%' }
              ]
            }, 
            width: '300', 
            numeric: false
          }, 
          {$: 'field.control', 
            title: 'params', 
            control :{$: 'itemlist', 
                  title: '', 
                  items: '%params%', 
                  controls: [
                    {$: 'button', 
                      title: '%id%', 
                      style :{$: 'button.href' }
                    }
                  ], 
                  style :{$: 'custom-style', 
                    template: (cmp,state,h) => { 
                      return wixToVdom(cmp.ctx.data.pages[0].value.structure);
                      function wixToVdom(node) {
                        if (node.components)
                          return h('div',{class: 'box'},node.components.map(c=>wixToVdom(c)))
                        else {
                          const ctrl = state.ctrls.filter(ctrl=> '#' + ctrl.item.dataId == node.dataQuery)[0];
                          if (!ctrl) return h('div');
                          return jb.ui.item(cmp,h('div', {class: 'jb-item', 'jb-ctx': jb.ui.preserveCtx(ctrl[0].ctx)} ,
                              ctrl.map(singleCtrl=>h(singleCtrl))),ctrl.item);
                        }
                      }
                    },                  
                    css: ">* .box { border: 1px solid #ccc; padding: 5px}\n                .box { border: 1px solid #ccc; padding: 5px}",
                    features :{$: 'itemlist.init' }
                  }, 
                  itemVariable: 'item'
                }
          }
        ], 
        style :{$: 'table.mdl', 
          classForTable: 'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp', 
          classForTd: 'mdl-data-table__cell--non-numeric'
        }, 
        visualSizeLimit: 100, 
        features :{$: 'css.margin', top: '', left: '5' }
      }
    ]
  }
})

