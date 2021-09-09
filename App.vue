<script>
	// 更新版本
	import appUpdate from './utils/js/appUpdate.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			//应用更新
			appUpdate() {
				// #ifdef MP
				appUpdate.updateXCX();
				//#endif

				// #ifdef APP-PLUS

				//#endif
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	* {
		margin: 0;
	}

	view {
		display: block;

	}

	image {
		width: 320px;
		height: 240px;
		display: inline-block;
		overflow: hidden;
	}

	.view {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
</style>
