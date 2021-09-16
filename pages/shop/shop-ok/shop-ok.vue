<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="container">
		<view class="YmContent">
			<view class="main">
				<view class="tip">
					<image src="/static/image/util/reg_ok_icon_19.jpg" mode="scaleToFill" border="0" class="icon">
					</image>
					<text decode="true" class="reg_ok_20">报名成功</text>
					<text decode="true" class="reg_ok_21">请到指定校区进行报道</text>
				</view>
				<view class="btn-div">
					<view class="theme-bordeer-bg" @tap="openIndex()">
						返回首页
					</view>
					<view class="theme-bg theme-bg-shadow" @tap="openOrderList()">
						查看报名列表
					</view>
				</view>
			</view>
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
		methods: {
			// 打开首页
			openIndex() {
				this.openPages.openIndex();
			},
			openOrderList() {
				this.openPages.openOrderList();
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "./shop-ok.scss";

	.container {
		background: #FFFFFF;
	}

	.main {
		background: #FFFFFF;
		box-sizing: content-box;
		padding-bottom: 500rpx;
	}

	page {
		background: #FFFFFF;
	}

	.YmContent {
		padding-top: 50rpx;
	}

	.btn-div {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: -30rpx;
		padding-top: 50rpx;
	}

	.btn-div view {
		flex: 1;
		text-align: center;
		padding: 20rpx 30rpx;
		border-radius: 50rpx;
		margin-left: 50rpx;
	}
</style>
