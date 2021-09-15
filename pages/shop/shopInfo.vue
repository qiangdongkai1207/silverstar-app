<template>
	<view class="container">
		<!-- 带tip的box -->
		<view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				课 程 信 息
			</view>
			<view class="public-card">
				<view class="card-text">
					<view class="top">
						民族舞蹈A班
					</view>
					<view class="card-text-lb">
						<label>报名时间：</label>
						<view>2021年09月13日 - 2021年09月23日</view>
					</view>
					<view class="card-text-lb">
						<label>简介：</label>
						<view>民族舞蹈A级考试班，适合于18周岁孩子</view>
					</view>
					<!-- <view class="theme-important-color">
						报名限时好礼相送~
					</view> -->
					<view class="card-text-lb">
						<label>教师：</label>
						<view>张三</view>
					</view>
					<view class="card-text-lb">
						<label>上课时间：</label>
						<view>
							<text>每周四&nbsp;&nbsp;下午&nbsp;&nbsp;6点 - 9点</text>
							<text>每周六&nbsp;&nbsp;上午&nbsp;&nbsp;9点 - 12点</text>
						</view>
					</view>
					<view class="card-text-lb">
						<label>教室：</label>
						<view>舞蹈室03</view>
					</view>
					<view class="card-text-lb">
						<label>注意事项：</label>
						<view>需要佩戴舞蹈服</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<!-- <view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				课 程 信 息
			</view>
			<view class="public-card">
				<view class="card-text">
					
				</view>
			</view>
		</view> -->

		<!-- 带tip的box -->
		<view class="tip-card-box coupon">
			<view class="tip-card-tip theme-important-bg-shadow theme-important-bg">
				限 时 体 验
			</view>
			<view class="public-card">
				<view class="card-text">
					<coupon @tap="clickCoupon()" v-bind:item="coupon" types="simplest" theme="#ff6c00" color="#ffffff"
						bg="#FFFCEF" solid="#F00" getBtnText=""></coupon>
				</view>
			</view>
		</view>

		<!-- 带tip的box -->
		<view class="tip-card-box">
			<view class="tip-card-tip theme-bg-shadow">
				学 员 信 息
			</view>
			<view class="public-card card-user">
				<view class="card-icon">
					<view class="card-icon-null-box" v-show="userSignUpList.length == 0">
						<view class="card-icon-null" v-show="userSignUpList.length == 0">
							<i class="iconfont icon-web__zanwujilu" style=" font-size: 300rpx;color: #666666;"></i>
						</view>
					</view>
					<view class="card-text-user" v-show="userSignUpList.length != 0">
						<view class="card-text">
							<view class="top">
								<i class="iconfont icon-xianxingtubiaozhizuomoban-02" @tap="userRemove()"></i>
								<label>李四</label>
							</view>
						</view>

						<view class="card-text">
							<view class="top">
								<i class="iconfont icon-xianxingtubiaozhizuomoban-02" @tap="userRemove()"></i>
								<label>王五</label>
							</view>
						</view>
					</view>
					<view class="card-icon-box">
						<view class="card-icon-btn theme-bg theme-bg-shadow" @tap="clickAddUser()">添加学员</view>
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
		<view class="shop-bottom">
			<view class="bottom-text theme-important-color">即刻起到校区进行体验，还有好礼相送哦~</view>
			<view class="bottom-btn theme-bg theme-bg-shadow" @tap="shopOk()">立即报名体验</view>
		</view>
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			coupon,
			tuiIcon
		},
		data() {
			return {
				// 优惠券
				coupon: {
					money: "报名免费体验课 2节",
					title: "限时报名体验价值699元",
					state: "1"
				},

				// 学员信息
				userSignUpList: [1]
			}
		},
		onLoad() {

		},
		methods: {
			clickCoupon() {
				// this.tui.alert('体验券领取成功，立即报名后，将保存到我的优惠券中', 4000)
			},
			userRemove() {
				this.tui.alert('移除学员');
			},
			// 添加学员
			clickAddUser() {
				this.openPages.openBindUserListCheck();
			},
			// 报名
			shopOk() {
				this.openPages.openShopOk();
			},
		}
	}
</script>

<style lang='scss' scoped>
	.container {
		padding: 20rpx;
		padding-top: 0;
		padding-bottom: 100rpx;
	}

	.tip-card-box {
		margin-top: 50rpx;
	}

	.public-card {
		border-radius: 15rpx;
		margin-top: 0;
		border-top-left-radius: 0;
		/* border-top-right-radius: 0; */
		/* padding: 25rpx 20rpx; */
	}

	.card-text {
		width: 100%;
		margin: 0;
	}

	.card-text>view {
		margin-top: 20rpx;
		font-size: $font-base-sm;
	}

	.card-icon,
	.card-icon-box {
		width: 100%;
	}

	.card-icon {
		padding-bottom: 40rpx;
	}

	.card-icon-null-box {
		width: 100%;
	}

	.card-icon-null {
		display: flex;
		justify-content: center;
	}

	.card-icon-box {
		display: flex;
		justify-content: center;
		padding: 40rpx 0 00rpx 0;
	}

	.card-icon-btn {
		padding: 15rpx 50rpx;
		border-radius: 35rpx;
		font-size: $font-base;
	}

	.card-user {
		padding: 0;
	}

	.card-text-user {
		margin: 0;
	}

	.card-text-user .top {
		display: inline;
	}

	.card-text-user .card-text {
		margin: 0;
		padding: 30rpx 00rpx;
		border-bottom: 1px solid #F6F6F6;
	}

	.card-text .iconfont {
		display: inline;
		color: red;
		padding: 0rpx 30rpx 20rpx 50rpx;
	}

	/* .card-user .tui-icon::before{
		font-size: 42rpx;
	} */

	.card-user label {
		display: inline;
		font-size: $font-bg;
		color: #727281;
		margin-left: 40rpx;
	}

	.card-show-img .public-card {
		display: block;
		padding: 0;
	}

	.card-show-img .public-card image {
		width: 100%;
	}

	.shop-bottom {
		box-shadow: 0px 1px 5px #e4e5e8;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		/* padding: 20rpx 15rpx; */
		background: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
	}

	.bottom-text {
		flex: 4;
		padding: 40rpx 45rpx;
	}

	.bottom-btn {
		flex: 3;
		font-size: $font-bg;
		padding: 40rpx 15rpx;
		text-align: center;
	}
</style>
