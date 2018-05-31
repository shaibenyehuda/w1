jb.resource('people',[
  { "name": "Homer Simpson" ,age: 42 , male: true},
  { "name": "Marge Simpson" ,age: 38 , male: false},
  { "name": "Bart Simpson"  ,age: 12 , male: true}
]);

jb.component('w1-squeeze.main', {
  type: 'control', 
  impl :{$: 'label', 
    title :'hello squeeze', 
  }
})

