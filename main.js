/* 2.导入 小图标和公共样式 */
import "./utils/icon/iconfont.css";
import "./utils/css/public.css";

/* 3.导入配置文件 */
import {
	SERVERURL,
	ID,
	registerTeacher
} from './system.js'
Vue.prototype.appid = ID
// Vue.prototype.registerTeacher = registerTeacher
import "./utils/css/color_red.css";
import "./utils/css/shadow.css";

/* 4.配置VUEX */
import store from './store/store.js'
Vue.prototype.$store = store

/* 5.配置ajax */
import ajax1 from './utils/ajax/ajax'
Vue.prototype.ajax1 = ajax1
ajax1.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = SERVERURL; /* 根域名不同 */
	return config;
});
uni.setStorageSync("serverurl", SERVERURL);

/* 6.配置 公共js */
import tui from './utils/js/tui.js'
import openPages from './utils/js/openPages.js'
Vue.prototype.tui = tui
Vue.prototype.openPages = openPages
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()

/* 1.导入vue */
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif