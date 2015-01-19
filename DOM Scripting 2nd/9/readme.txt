DOM要求"-"要换成驼峰命名法获取CSS属性 -- element.style.fontFamily
只有行内样式element.style才能获取到属性值
CSS的color为grey时，DOM获得的color值是grey
CSS的color为#999999时，DOM获得的color值是rgb(153, 153, 153)

表格的隔行变色
tr:nth-child(odd) {
	background-color: #fff;
}
tr:nth-child(even) {
	background-color: #ffc;
}