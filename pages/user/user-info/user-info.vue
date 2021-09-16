<template>
	<view class="tui-userinfo-box">
		<tui-list-cell padding="0" :arrow="true">
			<view class="tui-list-cell">
				<view>头像</view>
				<image
					:src="'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5bjdXwTibWW8UwWveSTBPib0ic2NeNurXyKnKu8eZ2a7rtKm2e2qPibVa2J329n1ic8eib8ue4I3R20sQ/132'"
					class="tui-avatar"></image>
			</view>
		</tui-list-cell>
		<view class="tui-mtop">
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">昵称</view>
					<view class="tui-content tui-content-size">铅笔世界</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">等级</view>
					<view class="tui-content tui-content-size">1</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">积分</view>
					<view class="tui-content tui-content-size">100</view>
				</view>
			</tui-list-cell>
		</view>

		<view class="tui-mtop">
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">姓名</view>
					<view class="tui-content tui-content-size">强冬凯</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">姓名拼音</view>
					<view class="tui-content tui-content-size">qiangdongkai</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">性别</view>
					<view class="tui-content tui-content-size">男</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true" :last="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">年龄</view>
					<view class="tui-content tui-content-size">25</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true" :last="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">出生日期</view>
					<view class="tui-content tui-content-size">1996-12-7</view>
				</view>
			</tui-list-cell>
			<tui-list-cell padding="0" :arrow="true" :last="true">
				<view class="tui-list-cell">
					<view class="tui-content-size">手机号</view>
					<view class="tui-content tui-content-size">11111</view>
				</view>
			</tui-list-cell>
		</view>
	</view>
</template>

<script>
	import tuiListCell from "@/components/list-cell/list-cell"
	export default {
		components: {
			tuiListCell
		},
		data() {
			return {

			}
		},
		onShow: function(options) {},
		computed: {},
		methods: {}
	}
</script>

<style>
	page {
		background: #F6F6F6;
	}

	.tui-userinfo-box {
		padding-bottom: 20rpx;
		color: #333;
	}

	.tui-list-cell {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 60rpx 24rpx 30rpx;
		font-size: 30rpx;
	}

	.tui-pr30 {
		padding-right: 30rpx;
	}

	.tui-avatar {
		width: 100rpx;
		height: 100rpx;
		display: block;
		border-radius: 100rpx;
	}

	.tui-content {
		font-size: 30rpx;
		color: #666;
	}

	.tui-content-size {
		font-size: 30rpx;
	}

	.tui-mtop {
		margin-top: 20rpx;
	}
</style>
