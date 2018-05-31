var SQ_DIR = 'projects/w1-squeeze/';

var resources = Object.assign((typeof resources != 'undefined' ? resources : {}), {
      jsonpath: ['projects/w1-squeeze/lib/jsonpath.js'],
      d3: ['projects/w1-squeeze/lib/d3.js'],
      cluster: ['projects/w1-squeeze/cluster.js'],
      'cossy-site': [
        'siteAsJson','rendererModel',
      ].map(x=>SQ_DIR+ 'cossy/'+ x + '.js'),
})
if (typeof module != 'undefined')
  module.exports = resources;
