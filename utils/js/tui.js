const tui = {
	getUserInfo() {
		return uni.getStorageSync("userInfo") || null;
	},
	setUserInfo(json) {
		uni.setStorageSync('userInfo', json);
	},
	removeUserInfo(json) {
		uni.removeStorageSync('userInfo');
	},

	alert: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
	},
}

export default tui
