function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var text = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	var description = document.getElementById("description");
	placeholder.setAttribute("src", source);
	//placeholder.src = source;
	description.firstChild.nodeValue = text;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.nodeType);
}

//window.onload = countBodyChildren;

