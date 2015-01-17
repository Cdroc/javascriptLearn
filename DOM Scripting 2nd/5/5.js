function popUp (winURL) {
	window.open(winURL, "popUp", "width=720, height=480");
}

function prepareLinks() {
	if (!document.getElementsByTagName) return false; // 向后兼容
	var links = document.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		if (links[i].getAttribute("class") == "popUp") {
			links[i].onclick = function() {
				popUp(this.href);
				return false;
			}
		};
	};
}

window.onload = prepareLinks;