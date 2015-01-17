function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);

	var testdiv = document.getElementById("testdiv");
	testdiv.innerHTML += "<p>I inserted <em>this</em> content.</p>";
}