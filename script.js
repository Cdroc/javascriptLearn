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

// 获取下一个元素node
function getNextElement(node) {
	if (node.nodeType == 1) {
		return node;
	}
	if (node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}

// 为element元素附加类别theclass
function addClass(element, theclass) {
	if (!element.className) {
		element.className = theclass;
	} else {
		var newClassName = element.className;
		newClassName += " ";
		newClassName += theclass;
		element.className = newClassName;
	}
}

// 为tag标签附加类别theclass // 要用自定义的getNextElement及addClass函数
function styleElementSiblings(tag, theclass) {
	if (!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem = null;
	for (var i = elems.length - 1; i >= 0; i--) {
		elem = getNextElement(elems[i].nextSibling);
		addClass(elem, theclass);
	};
}

// 移动元素elementID到(final_x, final_y)，每隔interval毫秒移动一次
function moveElement(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    //if (!elem.style.left || !elem.style.top) return false;
    if (!elem.style.left) elem.style.left = "0px";
    if (!elem.style.top) elem.style.top = "0px";
    if (elem.movement) {
    	clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) return true;
    var dist = 0;
    if (xpos < final_x) {
    	dist = Math.ceil((final_x - xpos) / 10);
    	xpos = xpos + dist;
    }
    if (xpos > final_x) {
    	dist = Math.ceil((xpos - final_x) / 10);
    	xpos = xpos - dist;
    }
    if (ypos < final_y) {
    	dist = Math.ceil((final_y - ypos) / 10);
    	ypos = ypos + dist;
    }
    if (ypos > final_y) {
    	dist = Math.ceil((ypos - final_y) / 10);
    	ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+interval+")";
    elem.movement = setTimeout(repeat, interval);
}

// 创建灰度图片
function createGSCanvas(imgElement) {
    // 如果浏览器不支持<canvas>就返回null
    if (!Modernizr.canvas) return null;
    var canvas = document.createElement("canvas");
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(imgElement, 0, 0);

    // 注意：getImageData只能操作与脚本位于同一个域中的图片
    // 建议在本地创建wamp服务，把文件放入wamp的www文件夹内
    // 在浏览器地址栏输入http://localhost/???.html
    var c = ctx.getImageData(0, 0, imgElement.width, imgElement.height);
    for (var i = c.height - 1; i >= 0; i--) {
        for (var j = c.width - 1; j >= 0; j--) {
            var x = (i * 4) * c.width + (j * 4);
            var r = c.data[x];
            var g = c.data[x + 1];
            var b = c.data[x + 2];
            c.data[x] = c.data[x + 1] = c.data[x + 2] = (g + r + b) / 3;
        };
    };
    ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
    return canvas.toDataURL();
}