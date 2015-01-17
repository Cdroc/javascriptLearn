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

function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	/*
	var body_element = document.getElementsByTagName("body")[0];
	body_element.appendChild(placeholder);
	body_element.appendChild(description);
	*/
	var gallery = document.getElementById("imagegallery");
	/*
	gallery.parentNode.insertBefore(placeholder, gallery);
	gallery.parentNode.insertBefore(description, gallery);
	*/
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
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

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

