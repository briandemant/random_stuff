var clickTag = document.location.search.replace(/^.*clickTAG=(.*)$/, '$1');

function createLink(text, url) {
	var linkNode = document.createElement('a');
	linkNode.setAttribute('href', clickTag + url);
	var textNode = document.createTextNode(text);
	linkNode.appendChild(textNode)
	return linkNode;
}


document.body.appendChild(createLink('guloggratis', 'http://guloggratis.dk'))
document.body.appendChild(createLink('fmAdserving', 'http://fmadserving.dk'))