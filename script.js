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

// ajax请求
function ajax(url, fnSucc, fnFaild) {
	// 1.创建Ajax对象
	var oAjax = null;
	if (window.XMLHttpRequest) { // 或者写成if(typeof XMLHttpRequest) // 兼容IE6
		// XMLHttpRequest在IE6中被当成未定义的变量，会报错
		// window.XMLHttpRequest在IE6中被当成未定义的属性，会返回undefined
		// 非IE6
		oAjax = new XMLHttpRequest();
	} else {
		// IE6
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2.连接服务器
	// open(方法，文件名，异步传输)
	oAjax.open("GET", url, true); 
	// 3.发送请求
	oAjax.send();
	// 4.接收返回
	oAjax.onreadystatechange = function() {
		// oAjax.readyState // 浏览器和服务器，进行到哪一步
		if (oAjax.readyState == 4) { // 读取完成
			if (oAjax.status == 200) { // 读取成功
				fnSucc(oAjax.responseText);
			} else { // 读取失败
				if (fnFaild) {
					fnFaild(oAjax.status);
				}
			}
		}
	}
}