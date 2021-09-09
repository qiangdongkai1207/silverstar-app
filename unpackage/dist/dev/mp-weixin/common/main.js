(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*************************************************************!*\
  !*** E:/hbuilder_workspace/20210908/silverstar-app/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 4);
__webpack_require__(/*! ./utils/icon/iconfont.css */ 5);
__webpack_require__(/*! ./utils/css/public.css */ 6);


var _system = __webpack_require__(/*! ./system.js */ 7);






__webpack_require__(/*! ./utils/css/color_red.css */ 8);


var _store = _interopRequireDefault(__webpack_require__(/*! ./store/store.js */ 9));



var _ajax = _interopRequireDefault(__webpack_require__(/*! ./utils/ajax/ajax */ 11));








var _tui = _interopRequireDefault(__webpack_require__(/*! ./utils/js/tui.js */ 16));





var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.prototype.appid = _system.ID; // Vue.prototype.registerTeacher = registerTeacher
_vue.default.prototype.$store = _store.default; /* 5.配置ajax */_vue.default.prototype.ajax1 = _ajax.default;_ajax.default.setConfig(function (config) {/* 设置全局配置 */config.baseUrl = _system.SERVERURL; /* 根域名不同 */return config;});uni.setStorageSync("serverurl", _system.SERVERURL); /* 6.配置 thorUI */_vue.default.prototype.tui = _tui.default;_vue.default.prototype.$eventHub = _vue.default.prototype.$eventHub || new _vue.default(); /* 1.导入vue */_vue.default.config.productionTip = false;
App.mpType = 'app';
var app = new _vue.default(_objectSpread({
  store: _store.default },
App));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map