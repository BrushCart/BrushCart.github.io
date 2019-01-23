(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{171:function(n,e,t){"use strict";t.r(e);var a=t(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuex","aria-hidden":"true"}},[n._v("#")]),n._v(" Vuex")]),n._v(" "),t("h5",{attrs:{id:"_1、什么是vuex？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是vuex？","aria-hidden":"true"}},[n._v("#")]),n._v(" 1、什么是vuex？")]),n._v(" "),t("ul",[t("li",[n._v("每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。")])]),n._v(" "),t("h5",{attrs:{id:"_2、初始化vuex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、初始化vuex","aria-hidden":"true"}},[n._v("#")]),n._v(" 2、初始化vuex")]),n._v(" "),t("p",[n._v("（1）下载vuex")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cnpm i vuex -D\n")])])]),t("p",[n._v("（2）建一个store文件夹（store/index.js）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 初始化vuex\n\nimport Vue from 'vue';\nimport Vuex from 'vuex';\n\n// 引入module\nimport app from './module/app';\n\nVue.use(Vuex);\n\n// 生成一个vuex实例\nexport default new Vuex.Store({\n  modules: {\n    app\n  }\n})\n")])])]),t("p",[n._v("（3）在store文件夹里建一个module文件夹用来存放数据（store/module/app.js）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 存放数据的地方\nconst state = {\n  num: 100\n}\n\n// 派生数据（很少用）\nconst getters = {\n    doubleNum(state){\n        return state.num*2\n    }\n}\n\n// 同步改变\nconst mutations = {\n  changeNum(state, payload){\n    state.num = payload;\n  }\n}\n\n// 异步改变\nconst actions = {\n    \x3c!--changeNumAsync(context, payload){--\x3e\n        \n    \x3c!--}--\x3e\n    changeNumAsync({commit}, payload){\n        commit('changeNum', payload)\n    }\n}\n\nexport default {\n  // 命名空间\n  namespaced: true, // 配合module使用\n  state,\n  actions,\n  getters,\n  mutations\n}\n")])])]),t("p",[n._v("（4）在main.js里面引入store")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("import Vue from 'vue'\nimport App from './App.vue'\n\nimport store from './store'\n\nnew Vue({\n  el: '#app',\n  store,\n  render: h => h(App)\n})\n\n")])])]),t("p",[n._v("（5）在页面中使用")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<template>\n  <div>\n    <button @click=\"changeNum('+')\">+</button>\n    <span>{{num}}</span>\n    <button @click=\"changeNum('-')\">-</button>\n  </div>\n</template>\n<script>\n  export default {\n    name: 'app',\n    computed: {\n      num() {\n        return this.$store.state.app.num\n      }\n    },\n    methods: {\n      changeNum(type) {\n        if (type == '+') {\n          // this.$store.commit('changeNum', this.num+1)\n          this.$store.dispatch('changeNumAsync', this.num+1)\n        } else {\n          this.$store.commit('changeNum', this.num-1)\n        }\n      }\n    },\n    mounted(){\n      console.log(this.$store)\n    }\n  }\n<\/script>\n\n")])])])])}],!1,null,null,null);s.options.__file="vuex.md";e.default=s.exports}}]);