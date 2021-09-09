import Vue from 'vue'
import Vuex from 'vuex'
import ajax1 from './../utils/ajax/ajax'
import $tui from './../utils/js/tui.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: { //存储全局变量的数据
		/* tabbar */
		bg: uni.getStorageSync("bg") || "red",
	},
	getters: { //提供用来获取state数据的方法
		getBg(state) {
			return state.bg;
		},
	},
	mutations: { //提供存储设置state数据的方法

	},
	actions: { //提供跟后台接口打交道的方法，并调用mutations提供的方法

	}
})

export default store
