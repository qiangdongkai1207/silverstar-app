<template>
	<view class="container">
		<view></view>
		<view class="user-top-box">
			<view class="user-top-box-bg theme-radiation-solid-bg ">

			</view>
			<view class="tui-header-center">
				<!-- <image class="tui-avatar" src="/static/images/my/my_touxiang.png" @tap="touxiang"></image> -->
				<image class="tui-avatar"
					:src="'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5bjdXwTibWW8UwWveSTBPib0ic2NeNurXyKnKu8eZ2a7rtKm2e2qPibVa2J329n1ic8eib8ue4I3R20sQ/132'"
					@tap="touxiang"></image>
				<view class="tui-info" v-show="isLogin" @tap="waitCode">
					<view class="tui-nickname">
						强冬凯
						<image class="tui-img-vip" src="/static/image/user/vip1.png"></image>
					</view>
					<view class="tui-explain">
						用户名:Q
					</view>
					<view class="tui-explain">
						积分: 100
						<!--<text v-if="userInfo.type_people == 'teacher'">（教师）</text> -->
					</view>
				</view>
				<view class="tui-info" v-show="!isLogin" @tap="waitCode">
					<view class="tui-nickname">
						注册/登录
					</view>
					<view class="tui-explain"></view>
				</view>
				<view class="tui-set-box">
					<!-- <view class="tui-icon-box tui-icon-message" @tap="href(1)">
						<tui-icon name="message" color="#fff" :size="26"></tui-icon>
						<view class="tui-badge tui-badge-white">1</view>
					</view> -->
					<!-- <view class="tui-icon-box tui-icon-setup" @tap="waitCode">
						<tui-icon name="setup" color="#fff"></tui-icon>
					</view> -->
				</view>
			</view>
		</view>
		<view class="middle-container public-card">
			<view @tap="waitCode" data-index="1" class="middle-item" hover-class="card-hover" :hover-stay-time="150">
				<image class="ticket-img" src="/static/image/user/sign-up.png"></image>
				<text class="middle-tag">我的报名</text>
			</view>
			<view @tap="openCoupon()" class="middle-item" hover-class="card-hover" :hover-stay-time="150">
				<image class="ticket-img" src="/static/image/user/coupon.png"></image>
				<text class="middle-tag">优惠券</text>
			</view>
		</view>
		<view class=" public-card">
			<view class="tui-order-list tui-flex-wrap">
				<view class=" tui-tool-item theme-color" style="padding-top: 34rpx;" hover-class="card-hover"
					@tap="openActionSheet_logout(2)">
					<view class="tui-icon-box tuichu">
						<i class="iconfont icon-tuichu"></i>
					</view>
					<view class="tui-tool-text">退出</view>
				</view>
				<!-- <view class=" tui-tool-item" hover-class="card-hover">
					<view class="tui-icon-box theme-color">
						<tui-icon name="setup-fill" class=""></tui-icon>
					</view>
					<view class="tui-tool-text">设置</view>
				</view>

				<view class=" tui-tool-item" hover-class="card-hover" style="padding-top: 28rpx;">
					<view class="tui-icon-box theme-color explain">
						<tui-icon name="explain-fill" class=""></tui-icon>
					</view>
					<view class="tui-tool-text">帮助</view>
				</view> -->
			</view>
		</view>
		<!-- <button style="margin-top: 300rpx;" @tap="logout()"> 退出</button>
 -->
		<!-- 底部弹出框 - 退出 -->
		<tui-actionsheet :show="actionsheet_logout.showActionSheet" :tips="actionsheet_logout.tips"
			:item-list="actionsheet_logout.itemList" :mask-closable="actionsheet_logout.maskClosable"
			:color="actionsheet_logout.color" :size="actionsheet_logout.size" :is-cancel="actionsheet_logout.isCancel"
			@click="clickActionSheet_logout" @cancel="closeActionSheet_logout"></tui-actionsheet>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiActionsheet from "@/components/actionsheet/actionsheet"
	export default {
		components: {
			tuiIcon,
			tuiActionsheet
		},
		data() {
			return {
				isLogin: true,

				/* 底层弹出框 - 退出 */
				actionsheet_logout: {
					showActionSheet: false,
					tips: "退出登录会清除您的登录信息，确认退出吗？",
					itemList: [],
					color: "#9a9a9a",
					size: 26,
					isCancel: true,
					clickType: 0,
				},
			}
		},
		onLoad() {

		},
		methods: {
			// 退出
			logout() {
				this.tui.removeUserInfo();
				this.openPages.openLogin();
			},
			// 待开发
			waitCode() {
				this.tui.alert("详情功能尚未完善~")
			},

			/* 底层弹出框-登录 */
			closeActionSheet_logout: function() {
				this.actionsheet_logout.showActionSheet = false
			},
			openActionSheet_logout: function(type) {
				let itemList = [{
					text: "确定",
					color: "#1a1a1a"
				}];
				let maskClosable = true;
				let tips = "确认清空搜索历史吗？";
				let color = "#9a9a9a";
				let size = 26;
				let isCancel = true;
				//组件中都有默认值，实际应用中不需要可不操作
				switch (type) {
					case 2:
						tips = "退出登录会清除您的登录信息，确认退出吗？";
						itemList = [{
							text: "退出登录",
							color: "#e53a37"
						}];
						break;
				}
				this.actionsheet_logout.showActionSheet = true;
				this.actionsheet_logout.itemList = itemList;
				this.actionsheet_logout.maskClosable = maskClosable;
				this.actionsheet_logout.tips = tips;
				this.actionsheet_logout.color = color;
				this.actionsheet_logout.size = size;
				this.actionsheet_logout.isCancel = isCancel;
				this.actionsheet_logout.clickType = type;
			},
			// 点击操作菜单退出
			clickActionSheet_logout: function(e) {
				let index = e.index;
				this.closeActionSheet_logout();
				if (this.actionsheet_logout.clickType == 2 && index == 0) {
					//退出
					this.logout();
				}
			},
			openCoupon() {
				this.openPages.openCoupon();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.user-top-box {
		width: 100%;
		height: 380rpx;
		position: relative;
		overflow: hidden;
	}

	.user-top-box-bg {
		width: 119%;
		height: 100%;
		border-bottom-right-radius: 300rpx;
		border-bottom-left-radius: 267rpx;
		position: absolute;
		top: -4%;
		left: -8%;
	}

	.tui-avatar {
		flex-shrink: 0;
		width: 128rpx;
		height: 128rpx;
		display: block;
		border-radius: 100rpx;
	}

	.tui-img-vip {
		width: 56rpx;
		height: 24rpx;
		margin-left: 18rpx;
	}

	.tui-header-center {
		position: absolute;
		width: 100%;
		height: 128rpx;
		left: 0;
		top: 30rpx;
		padding: 0 50rpx;
		box-sizing: border-box;
		display: flex;
		/* align-items: center; */
	}

	.tui-info {
		width: 60%;
		padding-left: 30rpx;
	}

	.tui-nickname {
		font-size: $font-max-bg;
		font-weight: 500;
		color: #fff;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}

	.tui-explain {
		width: 80%;
		font-size: $font-base;
		font-weight: 400;
		color: #fff;
		opacity: 0.75;
		padding-top: 8rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* 中间位置 */

	.middle-container {
		height: 138rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #ffffff;
		margin-top: -130rpx !important;
		position: relative;

	}

	.public-card {
		padding: 0;
		z-index: 2;
		border-radius: 10rpx;
		flex-direction: row;
		margin: 30rpx 30rpx 26rpx 30rpx;
	}

	.middle-item {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.ticket-img {
		width: 80rpx;
		height: 80rpx;
		margin-left: 65rpx;
	}

	.middle-tag {
		font-size: $font-base;
		color: #333333;
		line-height: 28rpx;
		font-weight: bold;
		padding-left: 22rpx;
	}

	.tui-order-list {
		width: 100%;
		height: 134rpx;
		padding: 0;
		box-sizing: border-box;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		/* -webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between; */

	}

	.tui-flex-wrap {
		flex-wrap: wrap;
		height: auto;

	}

	.tui-tool-item {
		width: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 30rpx 40rpx;
	}

	.tui-icon-box {
		position: relative;
	}

	.tui-icon-box .tui-icon:before,
	.tui-icon-box .iconfont:before {
		font-size: 62rpx;
	}

	.tui-icon-box.explain .tui-icon:before {
		font-size: 56rpx;
	}

	.tui-icon-box.tuichu .iconfont:before {
		font-size: 48rpx;
	}

	.tui-order-text,
	.tui-tool-text {
		font-size: $font-base;
		font-weight: 400;
		color: #666;
	}
</style>
