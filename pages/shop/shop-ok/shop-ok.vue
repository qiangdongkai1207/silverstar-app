<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="container">
		<view class="YmContent">
			<view class="main">
				<view class="tip">
					<image v-on:click="icon_19_click()" src="/static/image/util/reg_ok_icon_19.jpg" mode="scaleToFill"
						border="0" class="icon"></image>
					<text decode="true" class="reg_ok_20">报名成功</text>
					<text decode="true" class="reg_ok_21">请到指定校区进行报道</text>
				</view>
				<button v-on:click="btOk_27_click()" class="btOk">完成
				</button>
			</view>


			<view class="loading">{{loadingText}}</view>
			<view class="ymBbottom"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	@import './shop-ok.scss';

	page {
		background: #FFFFFF;
	}

	.YmContent {
		padding-top: 100rpx;
	}
</style>
