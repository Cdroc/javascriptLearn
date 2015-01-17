window.open(url, name, features) -- 创建新的浏览器窗口

a1 -- javascript: -- 伪协议 -- 兼容性差，不建议使用
a2 -- 用onclick调用js代码   -- 兼容性差，不建议使用
a3 -- 平稳退化
a4 -- this.getAttribute('href')简化为this.href
a5 -- 行为与结构分离开来

向后兼容 -- 使用逻辑非判断  -- if (!method) return false;