(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{206:function(n,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"es6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6","aria-hidden":"true"}},[n._v("#")]),n._v(" ES6")]),n._v(" "),t("h4",{attrs:{id:"_1、声明变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、声明变量","aria-hidden":"true"}},[n._v("#")]),n._v(" 1、声明变量")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// es5\n声明变量 var --- variable\n用大写的形式去声明常量:var PI = 3.14159255358;\n常量的值允许被修改\n\n// es6\n// 通过let 关键字代替 var 来声明变量，用发与var几乎一致\n当let/const遇到{}会形成这个变量的块级作用域\n声明变量 let --- 叫命令或关键字\n声明常量 const PI = 3.1415926;\n报错会阻断下面的代码执行\n报错:Assignment to constant variale \n常量的值不允许被修改\n// 变量、常量不得重复定义(相同作用域)\n报错:Identifier 'num' has already been declared\n")])])]),t("h4",{attrs:{id:"_2、变量提升"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、变量提升","aria-hidden":"true"}},[n._v("#")]),n._v(" 2、变量提升")]),n._v(" "),t("ul",[t("li",[n._v("es5")])]),n._v(" "),t("blockquote"),n._v(" "),t("pre",[t("code",[n._v("var 存在变量提升，只要在声明之前调用，就会有变量提升，并且值为undefined\n")])]),n._v(" "),t("ul",[t("li",[n._v("es6")])]),n._v(" "),t("blockquote",[t("p",[n._v("let 语句声明的参数没有变量提升")])]),n._v(" "),t("blockquote",[t("p",[n._v("暂时性死区的概念：在变量声明之前调用，都是该变量的暂时性死区")])]),n._v(" "),t("h4",{attrs:{id:"_3、解构赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、解构赋值","aria-hidden":"true"}},[n._v("#")]),n._v(" 3、解构赋值")]),n._v(" "),t("ul",[t("li",[t("strong",[n._v("三种状态")])])]),n._v(" "),t("ol",[t("li",[n._v("模式不匹配")]),n._v(" "),t("li",[n._v("解构不成功：声明了变量，没有赋值（undefined）")]),n._v(" "),t("li",[n._v("不完全解构")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称作解构赋值 \n// 数组的解构赋值\n// es5\nvar a = 1;\nvar b = 2;\nvar c = 3;\n// es6 好处:代码简洁\n// 数组\nlet [a,b,c] = [1,2,3];\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\n// 对象\nlet person = {\n    name: 'zs',\n    age: 18,\n    hoppy: ['吃饭', '睡觉', '打豆豆'],\n    address: '北京八维'\n}\nlet { obj: objs, obj: obj1 } = {\n    obj: person\n}\n\nconsole.log(objs)\n// 字符串\n// 会将字符串转换成类似数组的一个对象\nlet [a,b,c] = 'mmd';\n// a = m\n// b = m\n// c = d\nlet {length:len} = 'mmd';\n// len = 3\n\n// 数组的解构赋值在函数中应用\nlet fun = function([name,age]){ // 接收的是形参\n    console.log(name);\n    console.log(age);\n}\nfun(['zs',18]) // 传递的参数是实参\n\n// 对象的解构赋值在函数中应用\nlet fun = function({name,age}){ // 接收的是形参\n    console.log(name);\n    console.log(age);\n}\nfun({name:'zs',age:18}) // 传递的参数是实参\n\n\n// 通过数组的解构赋值，返回一个值\nlet fun = (val) => {\n    return [val, val + \"you aer the best!\"];\n}\nconsole.log(fun())\n\n// 通过对象的解构赋值来取json数据\nconst data = {\n    name:'zs',\n    age:18\n}\nlet {name,age} = data;\nconsole.log(name);\nconsole.log(age)\n\n")])])]),t("h4",{attrs:{id:"总结："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结：","aria-hidden":"true"}},[n._v("#")]),n._v(" 总结：")]),n._v(" "),t("ul",[t("li",[n._v("解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象")]),n._v(" "),t("li",[n._v("由于undefined和null无法转为对象，所以对他们进行解构赋值，都会报错")])]),n._v(" "),t("h4",{attrs:{id:"_4、语法提案的批准流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、语法提案的批准流程","aria-hidden":"true"}},[n._v("#")]),n._v(" 4、语法提案的批准流程")]),n._v(" "),t("ul",[t("li",[n._v("Stade 0 - Strawman (展示阶段)")]),n._v(" "),t("li",[n._v("Stage 1 - proposal (征求意见阶段)")]),n._v(" "),t("li",[n._v("Stage 2 - Draft (草案阶段)")]),n._v(" "),t("li",[n._v("Stage 3 - Candidate (候选人阶段)")]),n._v(" "),t("li",[n._v("Stage 4 - Finished (定案阶段)")])]),n._v(" "),t("h4",{attrs:{id:"_5、字符串扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、字符串扩展","aria-hidden":"true"}},[n._v("#")]),n._v(" 5、字符串扩展")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1、String.includes(string) 用来判断字符串中是否包含指定参数（string）\n2、String.startsWith(string) 字符串是否以XX开始\n3、String.endsWith(string) 字符串是否以XX开始\nstring.includes(string,start) \nstring 代表查询参数\nstart 代表查询起始位置\nincludes() 具备隐式转换\n\nlet str = '123木头人'\nconsole.log(str.includes('123',3)) // 结果为false\n\n\n// str.repeat() ''\n// str.repeat(0) ''\n// str.repeat(1) mmd\n// str.repeat(2) mmdmmd\nlet str = 'mmd';\nlet newString = str.repeat();\nconsole.log(newString)\n\nlet str = 'mmd';\nconsole.log(str.padStart(5,'*')) // **mmd\nconsole.log(str.padEnd(5,'*')) // mmd**\n")])])])])}],!1,null,null,null);s.options.__file="Es6.md";e.default=s.exports}}]);