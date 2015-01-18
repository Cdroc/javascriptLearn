function displayAddreviations () {
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	// 取得所有缩略词信息
	var abbrs = document.getElementsByTagName('abbr');
	if (abbrs.length < 1) return false;
	var titles = new Array();
	var texts = new Array();
	for (var i = abbrs.length - 1; i >= 0; i--) {
		if (abbrs[i].childNodes.length < 1) { // 兼容IE6
			continue;
		}
		var tl = abbrs[i].getAttribute("title");
		titles[titles.length] = tl;
		texts[texts.length] = abbrs[i].lastChild.nodeValue;
	}
	//创建dl dt dd
	var dList = document.createElement("dl");
	for (var j = texts.length - 1; j >= 0; j--) {
		var dTitle = document.createElement("dt");
		var txt = document.createTextNode(texts[j]);

		var dDe = document.createElement("dd");
		var tit = document.createTextNode(titles[j]);

		dTitle.appendChild(txt);
		dDe.appendChild(tit);

		dTitle.appendChild(dDe);
		dList.appendChild(dTitle);
	}

	if (dList.childNodes.length < 1) return false;

	document.getElementsByTagName("body")[0].appendChild(dList);
}

window.onload = function() {
	displayAddreviations();
	displayCitations();
};