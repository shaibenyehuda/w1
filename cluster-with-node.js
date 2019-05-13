global.jsonpath = require('jsonpath');
global.window = {};
const fs = require('fs');
require('./projects/squeeze/cluster.js');

function clusterToSpreadsheet(siteName) {
    const site = require(`./downloaded-content/_${siteName}.js`);
    const pages = site.pages.filter(pg=>pg.structure.id != 'masterPage');
    const masterPage = site.pages.filter(p=>p.structure.id == 'masterPage')[0];

    const cluster = new pageClustering(pages,site.rendererModel);
    const clusters = cluster.spreadsheet();
}

const siteName = getProcessArgument('site') || 'buildingsupplies';
const siteTgp = clusterToSpreadsheet(siteName)


function getProcessArgument(argName) {
    for (var i = 0; i < process.argv.length; i++) {
      var arg = process.argv[i];
      if (arg.indexOf('-' + argName + ':') == 0) 
        return arg.substring(arg.indexOf(':') + 1).replace(/'/g,'');  // replacing ' to prevent sql injection;
      if (arg == '-' + argName) return true;
    }
    return '';
}
