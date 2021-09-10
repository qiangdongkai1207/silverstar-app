/**
 * @Description: 公共方法，打开页面
 * @author QDK
 * @param 
 * @return 
 * @createTime: 2021-9-9 10:45:29 ?F10: AM?
 */
const openPages = {
	// 跳转登录
	openLogin() {
		uni.navigateTo({
			url: '/pages/system/login/login'
		});
	},
	// 跳转首页选择页面
	openIndexCategory() {
		uni.navigateTo({
			url: '/pages/system/index-category/index-category'
		});
	},
	// 跳转首页选择页面
	openIndex() {
		uni.switchTab({
			url: '/pages/system/index/index'
		});
	},
	// 跳转首页选择页面
	openUser() {
		uni.switchTab({
			url: '/pages/user/user'
		});
	},
}

export default openPages
