function divAddP() {
	var para = document.createElement("p");
	var testdiv = document.getElementById('testdiv');
	testdiv.appendChild(para);
	var txt = document.createTextNode("Hello world");
	para.appendChild(txt);
}

function divAdd() {
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	var txt3 = document.createTextNode(" content.");
	testdiv.appendChild(para);
	para.appendChild(txt1);
	para.appendChild(emphasis);
	emphasis.appendChild(txt2);
	para.appendChild(txt3);
}

window.onload = divAdd;