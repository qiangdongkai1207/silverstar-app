<template>
	<view class="container">
		<!-- 带tip的box -->
		<view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				报 名 信 息
			</view>
			<view class="public-card">
				<view class="card-text">
					<view class="top">
						民族舞蹈A班
					</view>
					<view>
						<label>报名时间：</label>2021年09月13日 - 2021年09月23日
					</view>
					<view>
						<label>简介：</label>民族舞蹈A级考试班，适合于18周岁孩子
					</view>
					<!-- <view class="theme-important-color">
						报名限时好礼相送~
					</view> -->
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				课 程 信 息
			</view>
			<view class="public-card">
				<view class="card-text">
					<view>
						<label>教师：</label>张三
					</view>
					<view>
						<label>上课时间：</label>每周四下午6点 - 9点，每周六上午9点 - 12点
					</view>
					<view>
						<label>教室：</label>舞蹈室03
					</view>
					<view>
						<label>注意事项：</label>需要佩戴舞蹈服
					</view>
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<view class="tip-card-box coupon">
			<view class="tip-card-tip theme-important-bg-shadow theme-important-bg">
				体 验 金
			</view>
			<view class="public-card">
				<view class="card-text">
					<coupon @tap="clickCoupon()" v-bind:item="coupon" types="simplest" theme="#ff6c00" color="#ffffff"
						bg="#FFFCEF" solid="#F00" getBtnText="领取"></coupon>
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				我 要 报 名
			</view>
			<view class="public-card">
				<view class="card-icon">
					<view class="card-icon-box">
						<i class="iconfont icon-web__zanwujilu" style=" font-size: 300rpx;color: #666666;"></i>
					</view>
					<view class="card-icon-box">
						<view class="card-icon-btn theme-bg theme-bg-shadow">添加学员</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<view class="tip-card-box card-show-img">
			<view class="tip-card-tip theme-bg-shadow">
				课 程 风 采
			</view>
			<view class="public-card">
				<image src="../../static/image/bg/bg4.jpg"></image>
				<image src="../../static/image/bg/bg1.jpg"></image>
				<image src="../../static/image/bg/bg2.jpg"></image>
				<image src="../../static/image/bg/bg3.jpg"></image>
			</view>
		</view>
		
		<!-- 底部 -->
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	export default {
		components: {
			coupon
		},
		data() {
			return {
				coupon: {
					money: "免费体验课 2节",
					title: "价值699元的体验券",
					state: "1"
				}
			}
		},
		onLoad() {

		},
		methods: {
			clickCoupon() {
				this.tui.alert('体验金领取成功，最多只能领取10张', 4000)
			}
		}
	}
</script>

<style lang='scss'>
	.container {
		padding: 20rpx;
		padding-top: 0;
	}

	.tip-card-box {
		margin-top: 30rpx;
	}

	.public-card {
		border-radius: 15rpx;
		margin-top: 0;
		border-top-left-radius: 0;
		padding: 25rpx 20rpx;
	}

	.tip-card-tip {
		width: 170rpx;
		padding: 15rpx 25rpx;
		box-sizing: content-box;
		font-size: $font-base;
		text-align: center;
		border-top-left-radius: 15rpx;
		border-top-right-radius: 15rpx;
	}

	.card-text {
		width: 100%;
	}

	.card-text label {
		font-size: $font-base;
	}

	.card-text view {
		margin-top: 20rpx;
		font-size: $font-base-sm;
	}

	.tip-card-box.coupon .public-card {
		padding: 30rpx 20rpx;
	}

	.tip-card-box.coupon .card-text .coupon-item {
		margin-top: 0rpx;
	}


	.tip-card-box.coupon .public-card .card-text {
		margin-left: 0;
	}

	.card-icon,
	.card-icon-box {
		width: 100%;
	}

	.card-icon {
		padding-bottom: 40rpx;
	}

	.card-icon-box {
		display: flex;
		justify-content: center;
		padding-bottom: 40rpx;
	}

	.card-icon-btn {
		padding: 15rpx 40rpx;
		border-radius: 35rpx;
		font-size: $font-base;
	}

	.card-show-img .public-card {
		display: block;
		padding: 0;
	}
	.card-show-img .public-card image {
		width: 100%;
	}
</style>
