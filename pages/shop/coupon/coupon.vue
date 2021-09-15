<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
<template>
	<view class="container">
		<view class="coupon_box">
			<view class="other_type">
				<view class="text"><span>我的优惠券</span></view>
			</view>
			<coupon v-bind:item="coupon[0]" theme="#E41F19" color="#E41F19"></coupon>
			<coupon v-bind:item="coupon[1]" theme="#E41F19" color="#E41F19"></coupon>
			<coupon v-bind:item="coupon[2]" theme="#E41F19" color="#E41F19"></coupon>
		</view>
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	export default {
		components: {
			coupon,
		},
		data() {
			return {
				coupon: [{
						money: "免费体验课 2节",
						title: "价值699元的体验券",
						ticket: "民族舞A班课",
						seller_name: "永安街校区",
						end_time: "2021-12-31 23:59:59",
						state: 1
					},
					{
						money: "免费体验课 1节",
						title: "价值399元的体验券",
						ticket: "语言班B班课",
						seller_name: "中原校区",
						end_time: "2021-12-31 23:59:59",
						state: 1
					},
					{
						money: "免费体验课 3节",
						title: "价值1099元的体验券",
						ticket: "美术班B班课",
						seller_name: "瀚海校区",
						end_time: "2019-12-31 23:59:59",
						state: -1 // 作废
					}
				]
			}
		},
		onLoad() {

		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.coupon_box {
		width: 100%;
		height: auto;
		display: table;
		padding: 6upx 26upx 26upx 26upx;
	}

	.other_type {
		width: 100%;
		height: 90upx;
		padding-top: 50upx;

		.text {
			width: 100%;
			border-top: 1px solid #eeeeee;
			display: block;
			text-align: center;
			position: relative;
		}

		.text span {
			width: 180upx;
			height: 40upx;
			line-height: 40upx;
			color: #999999;
			display: block;
			background: transparent;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -90upx;
			margin-top: -20upx;
			font-size: $font-base;
		}
	}
</style>
