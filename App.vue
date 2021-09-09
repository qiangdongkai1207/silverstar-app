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
</style>
