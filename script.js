// 使window.load可以加载多个函数
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

// 在目标元素后面插入新元素
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

// 获取XMLHttpRequest
function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try{ return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch (e){}
			try{ return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch (e){}
			try{ return new ActiveXObject("Msxml2.XMLHTTP"); }
			catch (e){}
			return false;
		}
		return new XMLHttpRequest();
	}
}