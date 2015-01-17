function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var text = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false;
	var description = document.getElementById("description");
	placeholder.setAttribute("src", source); // placeholder.src = source;
	if (description) {
		description.firstChild.nodeValue = text;
	}
	return true;
}

function prepareGallery() {
	if (!document.getElementsByTagName || !document.getElementById) return false;
	var imagegallery = document.getElementById("imagegallery");
	if (!imagegallery) return false;
	var links = imagegallery.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick = function() {
			if(showPic(this)) {
				return false; // 取消链接被点击时的默认行为
			}
			return true;
		}
		//links[i].onkeypress = links[i].onclick;
	};
}

function addLoadEvent(func) {
	var old_onload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			old_onload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);

