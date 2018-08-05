{}




{
    $: 'Button', 
    style :{$: 'square-button' }, 
    text: 'hello',
    action: {$: 'gotoLink', }
    position: '100 123'
}


{ $:'box', 
    features :{$: 'background', color: '#23432' },
}

comps: [
    { $: 'Button', style :{$: 'plain-button'}, text: 'me',
    layout: '100 200 34 34',
}]}

x={$: 'box', ver: 2342323, comps: [
    {$: 'Button', text: 'hello', 
        features :{$: 'location', pos: '100 100 30 100' } 
    },
    {$: 'HoverBox', 
        regular :{$: 'Box', comps: [
                {$: 'line'},
                {$: 'RichText', text: 'about', style :{$: 'simple-v73' }},
                {$: 'RichText', text: 'Me', style :{$: 'fancy-31'}},
                {$: 'line' }
        ]},
        hover :{$: 'Box' , comps: [
            {$: 'text', text: 'aaa' }
        ]},
    }
]}


x = {$: 'HoverBox',
        regular :{$ :'Box',
         comps: [
            {$: 'line' , layout: '234 324 12 1' },
            {$: 'RichText', text: 'about',layout: '234 324 12 1'},
            {$: 'RichText', text: 'Me', style :{$: 'fancy-31'} ,layout: '234 324 12 1'},
            {$: 'line', layout: '234 324 12 1' }
        ]},
        hover :{$ :'Box' , comps: [
            {$: 'text', text: 'aaa' }
        ]}
    },
    { $: 'HoverBoxWithEffect', comps: [
        {$: 'line', features :{$hideOnHover: true }},
        {$: 'RichText', text: 'about', 
            features :{$hideOnHover: true }
        },
        {$: 'RichText', text: 'Me', style :{$: 'fancy-31'}, 
            features :{$: 'changeTextOnHover', text: 'aaaa'}
        },
        {$: 'RichText', text: 'Me', style :{$: 'fancy-31'}, 
            features :{$: 'animationOnHover', style:{$: 'left-to-right'} }
        },
        hoverEffects:{$: ''}, 
    ]},
    { $: 'HoverBoxWithIds', 
        regular :{$: 'Box', comps: [
            {$: 'line'},
            {$: 'RichText', id: 'about', text: 'about'},
            {$: 'RichText', text: 'Me', style :{$: 'fancy-31'}},
            {$: 'line' }
        ]},
        hover :{$ :'Box' , comps: [
            {$: 'text', text: 'aaa' },
            {$: 'RichText', id: 'about', overrideFeatures :{$: 'background', color: 'red' } }
        ]}
    }
};    

comp('Product-fancy1', {
    params: {
        title: { type: 'text' },
        SKU: { type: 'text' },
        price: { type: 'currency' },
        options: { type: 'product-option[]'},

        buttonText: { type: 'string' },
        price: { type: 'currency' }
    },
    impl :{$: 'Box', comps: [
        {$: 'Text', text: 'Buy Now'},
        {$: 'Button', text: '%$title%', action: {$: 'paypal', price: '%$price%'} },
    ],
        animation :{$: 'leftToRight', speed: '1',  }
    }
}


{ $: 'SitePagesMenu' }

{$: 'Menu', options: []}