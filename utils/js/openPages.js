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
	// 跳转我的
	openUser() {
		uni.switchTab({
			url: '/pages/user/my-user'
		});
	},
	// 跳转商品详情
	openShopInfo(param) {
		var url = '/pages/shop/shopInfo';
		if (!!param) {
			url = url + "?" + param;
		}
		uni.navigateTo({
			url: url
		});
	},
	// 跳转选择学员
	openBindUserListCheck(param) {
		var url = '/pages/user/bind-user-list/bind-user-list-check';
		if (!!param) {
			url = url + "?" + param;
		}
		uni.navigateTo({
			url: url
		});
	},
	// 跳转学员信息表单
	openBindUserListForm(param) {
		var url = '/pages/user/bind-user-list/bind-user-list-form';
		if (!!param) {
			url = url + "?" + param;
		}
		uni.navigateTo({
			url: url
		});
	},
	// 跳转报名成功
	openShopOk(param) {
		var url = '/pages/shop/shop-ok/shop-ok';
		if (!!param) {
			url = url + "?" + param;
		}
		uni.navigateTo({
			url: url
		});
	},
	// 跳转优惠券
	openCoupon() {
		uni.navigateTo({
			url: '/pages/shop/coupon/coupon'
		});
	},
	// 跳转搜索
	openSeach() {
		uni.navigateTo({
			url: '/pages/util/search/search'
		});
	},
	// 跳转商品列表
	openShopList() {
		uni.navigateTo({
			url: '/pages/shop/list/list'
		});
	},
	// 跳转个人信息
	openUserInfo() {
		uni.navigateTo({
			url: '/pages/user/user-info/user-info'
		});
	},
	// 跳转商品详情
	openOrderList() {
		uni.navigateTo({
			url: '/pages/shop/order/order'
		});
	},
	// 跳转商品详情
	openOrderInfo() {
		uni.navigateTo({
			url: '/pages/shop/order/order-info/order-info'
		});
	},
}

export default openPages
