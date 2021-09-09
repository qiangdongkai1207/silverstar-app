var appUpdate = {
	NewestVer: null, //云端版本号
	checkUrl: '',
	forcedUpdates: 0, //云端强制更新  1 强制 0不强制
	downloadUrl: '', //云端下载地址
	init(url) {
		if (url == null || url == '') return;
		this.checkUrl = url;
		if (window.plus) {
			this.plusReady();
		} else {
			document.addEventListener('plusready', this.plusReady, false);
		}
	},
	plusReady() {
		plus.runtime.getProperty(plus.runtime.appid, inf => {
			this.wgtVer = inf.version;
			this.getAppVersion();
		});
	},
	getAppVersion() {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			switch (xhr.readyState) {
				case 4:
					if (xhr.status == 200) {
						const obj = JSON.parse(xhr.responseText);
						debugger
						console.log(obj)
						console.log("当前版本【" + this.wgtVer + "】云端版本【" + this.NewestVer + "】更新地址【" + this.downloadUrl + "】是否强制更新【" + this
							.forcedUpdates);
					} else {
						//检测更新失败
					}
					break;
				default:
					try {} catch (e) {}
					break;
			}
		};
		xhr.open('POST', this.checkUrl);
		xhr.send();
	},
	updateXCX() { //小程序更新
		const updateManager = uni.getUpdateManager();
		updateManager.onCheckForUpdate(function(res) {
			// 请求完新版本信息的回调
			if (res.hasUpdate) {
				updateManager.onUpdateReady(function(res2) {
					uni.showModal({
						title: '更新提示',
						content: '发现新版本，是否重启应用?',
						cancelColor: '#eeeeee',
						confirmColor: '#FF0000',
						success(res2) {
							if (res2.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							}
						}
					});
				});
			}
		});

		updateManager.onUpdateFailed(function(res) {
			// 新的版本下载失败
			uni.showModal({
				title: '提示',
				content: '检查到有新版本，但下载失败，请检查网络设置',
				success(res) {
					if (res.confirm) {
						// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
						updateManager.applyUpdate();
					}
				}
			});
		});
	},
}
export default appUpdate;
