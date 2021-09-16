<template>
	<view class="container">
		<view class="tui-order-header" class="theme-bg">
			<!-- <image :src="webURL+'img_detail_bg.png'" mode="widthFix" class="tui-img-bg"></image> -->
			<view class="tui-header-content">
				<view>
					<view class="tui-status-text">待报名</view>
					<view class="tui-reason"><text class="tui-reason-text">报名有好礼相送，快来加入我们吧~</text>
						<tui-countdown :time="1800" color="rgba(254,254,254,0.75)" colonColor="rgba(254,254,254,0.75)"
							bcolor="transparent" bgcolor="transparent" v-if="status===1"></tui-countdown>
					</view>
				</view>
			</view>
		</view>
		<view style="">
			<tui-list-cell :arrow="true" bgcolor="#fefefe" @tap="openMap">
				<view class="tui-flex-box">
					<i class="iconfont icon-dingwei theme-color" style=" font-size: 46rpx;"></i>
					<view class="tui-addr">
						<view class="tui-addr-userinfo">永安街</view>
						<view class="tui-addr-text">郑州市二七区京广路与永安街西南角二楼</view>
					</view>
				</view>
			</tui-list-cell>
		</view>
		<view class="tui-order-item">
			<tui-list-cell :hover="false" :lineLeft="false">
				<view class="tui-goods-title">
					报名信息
				</view>
			</tui-list-cell>
			<block>
				<tui-list-cell padding="0" @click="onShopBuy(2)">
					<view class="tui-goods-item">
						<view class="tui-goods-img tui-goods-chart">
							<view>声乐</view>
						</view>
						<view class="tui-goods-center">
							<view class="tui-goods-name">钢琴课</view>
							<view class="tui-goods-attr">
								<view>报名时间：</view>
								<view class="text-indent">2021年09月13日 - 2021年09月23日</view>
							</view>
							<view class="tui-goods-attr">
								<view>教师：</view>
								<view class="text-indent">张三</view>
							</view>
							<view class="tui-goods-attr">
								<view>上课时间：</view>
								<view class="text-indent">每周四&nbsp;&nbsp;下午&nbsp;&nbsp;6点 - 9点</view>
								<view class="text-indent">每周六&nbsp;&nbsp;上午&nbsp;&nbsp;9点 - 12点</view>
							</view>
							<view class="tui-goods-attr">
								<view>教室：</view>
								<view class="text-indent">舞蹈室03</view>
							</view>
							<view class="tui-goods-attr">
								<view>注意事项：</view>
								<view class="text-indent">需要佩戴舞蹈服</view>
							</view>
							<view class="tui-goods-attr theme-important-color tui-goods-click">点击查看该课程</view>
						</view>
						<!-- <view class="tui-price-right">
							<view>￥298.00</view>
							<view>x2</view>
						</view> -->
					</view>
				</tui-list-cell>
			</block>
			<view class="tui-goods-info">
				<!-- <view class="tui-price-flex tui-size24">
					<view>商品总额</view>
					<view>￥1192.00</view>
				</view> -->
				<view class="tui-price-flex tui-size32 tui-pbtm20">
					<view class="tui-flex-shrink">学员</view>
					<view class="tui-goods-price">
						<view class="tui-price-large">李四</view>
					</view>
				</view>
				<view class="tui-price-flex tui-size32 tui-pbtm20">
					<view class="tui-flex-shrink">限时优惠</view>
					<view class="tui-goods-price tui-primary-color">
						<view class="tui-price-large">报名免费体验课 2节</view>
					</view>
				</view>
			</view>
		</view>

		<view class="tui-order-info">
			<tui-list-cell :hover="false">
				<view class="tui-order-title">
					订单信息
				</view>
			</tui-list-cell>
			<view class="tui-order-content">
				<view class="tui-order-flex">
					<view class="tui-item-title">订单号:</view>
					<view class="tui-item-content">123123123</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">创建时间:</view>
					<view class="tui-item-content">2021-09-16 16：47：33</view>
				</view>
				<view class="tui-order-flex" v-if="status == '0'">
					<view class="tui-item-title">失效时间:</view>
					<view class="tui-item-content">2021-09-16</view>
				</view>
				<view class="tui-order-flex">
					<view class="tui-item-title">状态:</view>
					<view class="tui-item-content">待报名</view>
				</view>
				<!-- <view class="tui-order-flex">
					<view class="tui-item-title">订单备注:</view>
					<view class="tui-item-content">麻烦尽快发货，打包包裹时请多拿几个泡沫放在纸箱盒内，防止摔碎</view>
				</view> -->
			</view>
		</view>
		<view class="tui-safe-area"></view>
		<view class="tui-tabbar tui-order-btn">
			<view>
				<view class="tui-btn-mr">
					<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="28" shape="circle"
						@click="onShopBuy(3)">删除订单</tui-button>
				</view>
				<view class="tui-btn-mr">
					<tui-button type="danger" :plain="true" width="148rpx" height="56rpx" :size="28" shape="circle"
						@click="onShopBuy(2)">再次购买</tui-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiIcon from '@/components/icon/icon'
	import tuiButton from "@/components/extend/button/button"
	import tuiCountdown from "@/components/countdown/countdown"
	import tuiListCell from "@/components/list-cell/list-cell"
	import Map from "@/components/map/openMap.js"
	export default {
		components: {
			tuiIcon,
			tuiButton,
			tuiCountdown,
			tuiListCell
		},
		computed: {},
		data() {
			return {
				shopBuy: {},
			}
		},
		onLoad(mapper) {},
		methods: {
			openMap() {
				//this.tui.openMap(this.shopBuy.latitude,this.shopBuy.longitude);
				//Map.openMap(39.9078008469, 116.391290596, this.shopBuy.cd_name, 'wgs84')
				Map.openMap(parseFloat(34.73372), parseFloat(113.656577), '永安街校区',
					'wgs84')
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding-bottom: 118rpx;
	}

	.tui-order-header {
		width: 100%;
		height: 160rpx;
		position: relative;
	}

	.tui-img-bg {
		width: 100%;
		height: 160rpx;
	}

	.tui-header-content {
		width: 100%;
		height: 160rpx;
		position: relative;
		z-index: 10;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 70rpx;
		box-sizing: border-box;
	}

	.tui-status-text {
		font-size: 36rpx;
		line-height: 36rpx;
		color: #FEFEFE;
	}

	.tui-reason {
		font-size: 24rpx;
		line-height: 24rpx;
		color: rgba(254, 254, 254, 0.75);
		padding-top: 15rpx;
		display: flex;
		align-items: center;
	}

	.tui-reason-text {
		padding-right: 12rpx;
	}

	.tui-status-img {
		width: 80rpx;
		height: 80rpx;
		display: block;
	}

	.tui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-icon-img {
		width: 44rpx;
		height: 44rpx;
		flex-shrink: 0;
	}

	.tui-logistics {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 24rpx 0 20rpx;
		box-sizing: border-box;
	}

	.tui-logistics-text {
		font-size: 28rpx;
		line-height: 32rpx;
	}

	.tui-logistics-time {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 16rpx;
		color: #666;
	}

	.tui-addr {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 20rpx;
		box-sizing: border-box;
	}

	.tui-addr-userinfo {
		font-size: $font-bg;
		line-height: 30rpx;
		font-weight: bold;
	}

	.tui-addr-text {
		font-size: 24rpx;
		line-height: 30rpx;
		padding-top: 16rpx;
	}

	.tui-addr-tel {
		padding-left: 40rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.tui-goods-title {
		width: 100%;
		font-size: 28rpx;
		line-height: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}


	.tui-goods-item {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-goods-img {
		width: 180rpx;
		height: 180rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-goods-center {
		flex: 1;
		padding: 0rpx 0rpx 0 40rpx;
		box-sizing: border-box;
	}

	.tui-goods-name {
		max-width: 310rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		font-size: 26rpx;
		line-height: 32rpx;
	}

	.tui-goods-attr {
		font-size: $font-sm;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;

		view {
			font-size: $font-sm;
		}

		// padding-left: 10rpx;
	}

	.tui-price-right {
		text-align: right;
		font-size: 24rpx;
		color: #888888;
		line-height: 30rpx;
		padding-top: 20rpx;
	}

	.tui-color-red {
		color: #E41F19;
		padding-right: 30rpx;
	}

	.tui-goods-price {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-price-large {
		font-size: $font-base;
		line-height: 30rpx;
	}

	.tui-goods-info {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-price-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-size24 {
		padding-bottom: 20rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #888;
	}

	.tui-size32 {
		font-size: 32rpx;
		line-height: 32rpx;
		font-weight: 500;
	}

	.tui-pbtm20 {
		padding-bottom: 20rpx;
	}

	.tui-flex-shrink {
		flex-shrink: 0;
	}

	.tui-primary-color {
		color: #EB0909;
	}

	.tui-order-info {
		margin-top: 20rpx;
	}

	.tui-order-title {
		position: relative;
		font-size: $font-base;
		line-height: 28rpx;
		padding-left: 12rpx;
		box-sizing: border-box;
	}

	.tui-order-title::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		border-left: 4rpx solid #EB0909;
		height: 100%;
	}

	.tui-order-content {
		width: 100%;
		padding: 24rpx 30rpx;
		box-sizing: border-box;
		background: #fff;
		font-size: 24rpx;
		line-height: 30rpx;
	}

	.tui-order-flex {
		display: flex;
		padding-top: 18rpx;
	}

	.tui-order-flex:first-child {
		padding-top: 0
	}

	.tui-item-title {
		width: 132rpx;
		flex-shrink: 0;
	}

	.tui-item-content {
		color: #666;
	}

	.tui-safe-area {
		height: 1rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-tabbar {
		width: 100%;
		height: 158rpx;
		background: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 26rpx;
		box-shadow: 0 0 1px rgba(0, 0, 0, .3);
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 999;
		padding: 20rpx;
		box-sizing: border-box;

	}

	.tui-tabbar view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.tui-btn-mr {
		margin-right: 30rpx;
	}

	.tui-pro-experience {
		margin-left: 0rpx;
		padding: 5rpx 10rpx;
		font-size: 24rpx;
		border-radius: 10rpx;
	}

	/* 个性化 */
	.tui-goods-chart {
		background: $font-color-blue-shallow;
		color: $font-color-blue;
		display: flex;
		justify-content: center;
		align-items: center;

		view {
			font-size: 50rpx;
		}
	}

	.text-indent {
		color: #000000;
	}

	.tui-goods-name {
		/* max-width: 310rpx; */
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		font-size: $font-bg;
		line-height: 32rpx;
	}
</style>
