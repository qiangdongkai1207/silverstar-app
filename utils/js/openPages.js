/**
 * @Description: 公共方法，打开页面
 * @author QDK
 * @param 
 * @return 
 * @createTime: 2021-9-9 10:45:29 ?F10: AM?
 */
const openPages = {
	// 跳转首页选择页面
	openIndexCategory() {
		uni.navigateTo({
			url: '/pages/system/index-category/index-category'
		});
	},
}

export default openPages
