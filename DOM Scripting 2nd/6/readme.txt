window.load = func1;	   -- 只能加载一个函数，函数后不要加()
window.load = function() { -- 可以加载多个函数，但每次都要修改window.load
	func1();			   -- 函数后要加()
	func2();
}
addLoadEvent(func1);       -- 自定义一个addLoadEvent函数，把要加载的函数作为参数传递