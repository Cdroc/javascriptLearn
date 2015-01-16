element.setAttribute(attribute, value);
element.attribute = value;
 -- setAttribute的兼容性更好

元素节点的nodeType属性值是1
属性节点的nodeType属性值是2
文本节点的nodeType属性值是3

<p>的文本值并不是nodeValue，而是p.firstChild.nodeValue