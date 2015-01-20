document.write
innerHTML

createElement
createTextNode
appendChild
insertBefore	-- parentElement.insertBefore(newElement, targetElement);
				-- targetElement.parentNode.insertBefore(newElement, targetElement);
nextSibling		-- 下一个兄弟元素

xhtml文档不会执行document.write，忽略innerHTML

Ajax -- request.onreadystatechange = func; -- 不要写成func()
	 -- readyState -- 0 -- 未初始化
				   -- 1 -- 正在加载
				   -- 2 -- 加载完成
				   -- 3 -- 正在交互
				   -- 4 -- 完成
	 -- responseText
	 -- responseXML -- DocumentFragment
	 