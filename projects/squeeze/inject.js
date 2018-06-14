// this is the code which will be injected into a given page...
(function() {
//	console.log(Array.from(window.frames).map(f=>f.documentServices));
	// just place a div at top right
	function injectScript(file, node) {
		var th = document.getElementsByTagName(node)[0];
		var s = document.createElement('script');
		s.setAttribute('type', 'text/javascript');
		s.setAttribute('src', file);
		th.appendChild(s);
	}
	injectScript( chrome.extension.getURL('lib/jsonpath.js'), 'body');
	injectScript( chrome.extension.getURL('lib/cycle.js'), 'body');
	injectScript( chrome.extension.getURL('/cluster.js'), 'body');
	injectScript( chrome.extension.getURL('/router-file-content.js'), 'body');
	injectScript( chrome.extension.getURL('/squeeze-in-editor.js'), 'body');

	// var div = document.createElement('div');
	// div.style.position = 'fixed';
	// div.style.top = 0;
	// div.style.right = 0;
	// div.textContent = 'Injected!';
	// document.body.appendChild(div);

	// alert('inserted self... giggity');

})();