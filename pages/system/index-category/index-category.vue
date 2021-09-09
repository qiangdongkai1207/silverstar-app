<template>
	<view class="container">
		<view class="container-box">
			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover">
				<view class="card-tip-top blue-bg">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">永安街</view>
					<view>联系电话：13526619279 </view>
					<view>座机：0371-66655567 </view>
					<view>地址：郑州市二七区京广路与永安街西南角二楼</view>
				</view>
				<view class="card-tip-bottom">
					距离：30m
				</view>
			</view>

			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover">
				<view class="card-tip-top blue-bg" v-show="false">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg2.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">纬五路</view>
					<view>联系电话：15515692178 </view>
					<view>座机：0371-65925699 </view>
					<view>地址：郑州市金水区纬五路与经三路交叉口经纬大厦10楼银星艺校</view>
				</view>
				<view class="card-tip-bottom">
					距离：1300m
				</view>
			</view>

			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover">
				<view class="card-tip-top blue-bg" v-show="false">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg3.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">中原路</view>
					<view>联系电话：15515692178 </view>
					<view>座机：0371-65925699 </view>
					<view>地址：郑州市二七区中原路与京广路交叉口（四中对面）“天赐良园”1号楼4楼银星艺校</view>
				</view>
				<view class="card-tip-bottom">
					距离：3100m
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

		}
	}
</script>

<style lang="scss">
	@import "index-category.scss";

	.container-box {
		width: 100%;
		height: 100%;
		padding: 20rpx;
		padding-top: 0;
		box-sizing: border-box;
	}

	.public-card {
		width: auto;
		padding: 30rpx 20rpx;
		border-radius: 20rpx;
		box-shadow: 0px 1px 5px #EBECF0;
		background: #FFFFFF;
		box-sizing: border-box;
	}

	.public-card {
		// padding: 0rpx !important;
		position: relative;
		display: flex;
		margin-top: 30rpx;
		// align-items: center;
	}

	.card-img {
		width: 300rpx;
		height: 200rpx;
		border-radius: 30rpx;
		overflow: hidden;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.card-text {
		margin-left: 40rpx;
		font-size: 20rpx;
		// font-weight: bold;
		width: 440rpx;
		color: #727281;

		view {
			margin-top: 15rpx;
		}

		.top {
			margin-top: 0rpx;
			font-size: 34rpx;
			font-weight: bold;
		}
	}

	.card-tip-top {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		width: 100rpx;
		height: 40rpx;
		font-size: 18rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 30rpx;
	}

	.card-tip-bottom {
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
		font-size: 18rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #b3b3b3;
	}
</style>
