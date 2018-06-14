// this is the background code...

// listen for our browerAction to be clicked
setTimeout(_=>console.log(window.frames[0].frames[0].documentServices),1000);

chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});