<template>
	<view class="container">
		<view class="tui-container-top" :style="{'position':[pageScrollTop?'fixed':'relative']}">
			<view class="tui-searchbox">
				<view class="tui-searchbox-top">
					<view class="tui-search-input">
						<icon type="search" :size="13" color="#999"></icon>
						<text class="tui-search-text">搜索报名记录</text>
					</view>
				</view>
			</view>
			<tui-tabs :tabs="tuiTabs.tabs" class="theme-color" :currentTab="tuiTabs.currentTab" selectedColor="#E41F19"
				sliderBgColor="#E41F19" @change="tableChange"></tui-tabs>
		</view>

		<view :class="{'tui-order-list':scrollTop>=0}" :style="{'marginTop':[pageScrollTop?'180rpx':'0']}">

			<view class="tui-order-item">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>报名号：202101021111</view>
						<view class="tui-order-status">待报名</view>
					</view>
				</tui-list-cell>
				<block>
					<tui-list-cell padding="0" @tap="openOrderInfo()">
						<view class="tui-goods-item">
							<view class="tui-goods-img tui-goods-chart">
								<view>舞蹈</view>
							</view>
							<view class="tui-goods-center">
								<view class="tui-goods-name">舞蹈课</view>
								<view class="tui-goods-attr">永安街</view>
								<view class="tui-goods-attr">郑州市二七区京广路与永安街西南角二楼</view>
								<view class="tui-goods-attr theme-important-color tui-goods-click">点击查看详情</view>
								<view class="tui-goods-attr" v-if="item.ce00=='0' || item.ce00=='2'">
									失效时间:2021-12-31
								</view>
								<!-- <view class="tui-goods-attr" v-if="item.shop_type=='3'">
								<text class="tui-pro-experience violet-green">体验课</text>
							</view> -->
							</view>
							<!-- <view class="tui-price-right">
							<view>￥{{item.price}}</view>
							<view>{{item.lesson}}课时</view>
						</view> -->
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>学员：</view>
						<view class="tui-price-large">张三</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view>
						<view class="tui-btn-ml">
							<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="28"
								shape="circle">取消订单</tui-button>
						</view>
						<!-- <view class="tui-btn-ml" v-show="false">
							<tui-button type="danger" :class="bg+'-bg-border'" :plain="true" width="148rpx"
								height="56rpx" :size="26" shape="circle">再次报名</tui-button>
						</view> -->
					</view>
				</view>
			</view>

			<view class="tui-order-item">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>报名号：202101021111</view>
						<view class="tui-order-status">已报名</view>
					</view>
				</tui-list-cell>
				<block>
					<tui-list-cell padding="0" @tap="openOrderInfo()">
						<view class="tui-goods-item">
							<view class="tui-goods-img tui-goods-chart">
								<view>跆拳道</view>
							</view>
							<view class="tui-goods-center">
								<view class="tui-goods-name">跆拳道课</view>
								<view class="tui-goods-attr">永安街</view>
								<view class="tui-goods-attr">郑州市二七区京广路与永安街西南角二楼</view>
								<view class="tui-goods-attr theme-important-color tui-goods-click">点击查看详情</view>
								<view class="tui-goods-attr" v-if="item.ce00=='0' || item.ce00=='2'">
									失效时间:2021-12-31
								</view>
								<!-- <view class="tui-goods-attr" v-if="item.shop_type=='3'">
								<text class="tui-pro-experience violet-green">体验课</text>
							</view> -->
							</view>
							<!-- <view class="tui-price-right">
							<view>￥{{item.price}}</view>
							<view>{{item.lesson}}课时</view>
						</view> -->
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>学员：</view>
						<view class="tui-price-large">张三</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view>
						<view class="tui-btn-ml">
							<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="28"
								shape="circle">删除订单</tui-button>
						</view>
						<view class="tui-btn-ml" v-show="false">
							<tui-button type="danger" :class="bg+'-bg-border'" :plain="true" width="148rpx"
								height="56rpx" :size="26" shape="circle">再次报名</tui-button>
						</view>
					</view>
				</view>
			</view>


			<view class="tui-order-item">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>报名号：202101021111</view>
						<view class="tui-order-status">已报名</view>
					</view>
				</tui-list-cell>
				<block>
					<tui-list-cell padding="0" @tap="openOrderInfo()">
						<view class="tui-goods-item">
							<view class="tui-goods-img tui-goods-chart">
								<view>声乐</view>
							</view>
							<view class="tui-goods-center">
								<view class="tui-goods-name">钢琴课</view>
								<view class="tui-goods-attr">永安街</view>
								<view class="tui-goods-attr">郑州市二七区京广路与永安街西南角二楼</view>
								<view class="tui-goods-attr theme-important-color tui-goods-click">点击查看详情</view>
								<view class="tui-goods-attr" v-if="item.ce00=='0' || item.ce00=='2'">
									失效时间:2021-12-31
								</view>
								<!-- <view class="tui-goods-attr" v-if="item.shop_type=='3'">
								<text class="tui-pro-experience violet-green">体验课</text>
							</view> -->
							</view>
							<!-- <view class="tui-price-right">
							<view>￥{{item.price}}</view>
							<view>{{item.lesson}}课时</view>
						</view> -->
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>学员：</view>
						<view class="tui-price-large">张三</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view>
						<view class="tui-btn-ml">
							<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="28"
								shape="circle">删除订单</tui-button>
						</view>
						<view class="tui-btn-ml" v-show="false">
							<tui-button type="danger" :class="bg+'-bg-border'" :plain="true" width="148rpx"
								height="56rpx" :size="26" shape="circle">再次报名</tui-button>
						</view>
					</view>
				</view>
			</view>



			<view class="tui-order-item be-overdue">
				<tui-list-cell :hover="false" :lineLeft="false">
					<view class="tui-goods-title">
						<view>报名号：202101021111</view>
						<view class="tui-order-status">已过期</view>
					</view>
				</tui-list-cell>
				<block>
					<tui-list-cell padding="0" @tap="openOrderInfo()">
						<view class="tui-goods-item">
							<view class="tui-goods-img tui-goods-chart">
								<view>语言</view>
							</view>
							<view class="tui-goods-center">
								<view class="tui-goods-name">语言课</view>
								<view class="tui-goods-attr">中原校区</view>
								<view class="tui-goods-attr">郑州市二七区京广路与永安街西南角二楼</view>
								<view class="tui-goods-attr theme-important-color tui-goods-click">点击查看详情</view>
								<view class="tui-goods-attr" v-if="item.ce00=='0' || item.ce00=='2'">
									失效时间:2021-12-31
								</view>
								<!-- <view class="tui-goods-attr" v-if="item.shop_type=='3'">
								<text class="tui-pro-experience violet-green">体验课</text>
							</view> -->
							</view>
							<!-- <view class="tui-price-right">
							<view>￥{{item.price}}</view>
							<view>{{item.lesson}}课时</view>
						</view> -->
						</view>
					</tui-list-cell>
				</block>
				<tui-list-cell :hover="false" :last="true">
					<view class="tui-goods-price">
						<view>学员：</view>
						<view class="tui-price-large">李四</view>
					</view>
				</tui-list-cell>
				<view class="tui-order-btn">
					<view>
						<view class="tui-btn-ml">
							<tui-button type="black" :plain="true" width="148rpx" height="56rpx" :size="28"
								shape="circle">删除订单</tui-button>
						</view>
						<view class="tui-btn-ml">
							<tui-button type="danger" :class="bg+'-bg-border'" :plain="true" width="148rpx"
								height="56rpx" :size="26" shape="circle">再次报名</tui-button>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import tuiTabs from "@/components/tui-tabs/tui-tabs"
	import tuiButton from "@/components/extend/button/button"
	// import tuiLoadmore from "@/components/loadmore/loadmore"
	// import tuiNomore from "@/components/nomore/nomore"
	import tuiListCell from "@/components/list-cell/list-cell"
	// import tuiSticky from "@/components/sticky/sticky"
	export default {
		components: {
			tuiTabs,
			tuiButton,
			// tuiLoadmore,
			// tuiNomore,
			tuiListCell,
			// tuiSticky
		},
		data() {
			return {
				pageScrollTop: false, // 判断是否滚动了页面
				scrollTop: 0,
				tuiTabs: {
					tabs: [{
						name: "全部"
					}, {
						name: "待报名"
					}, {
						name: "已报名"
					}, {
						name: "已取消/过期"
					}],
					currentTab: 0,
				}
			}
		},
		onLoad() {},
		methods: {
			// 点击了tabe页面
			tableChange(e) {
				this.tuiTabs.currentTab = e.index;
				// this.initOrderList();
			},
			openOrderInfo() {
				this.openPages.openOrderInfo();
			},

			//滚动页面触发事件
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				if (e.scrollTop <= 0) {
					this.pageScrollTop = false;
				} else {
					this.pageScrollTop = true;
				}

			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background: #F6F6F6;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-order-list {
		margin-top: 180rpx;
	}

	.tui-order-item {
		margin-top: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;
	}

	.tui-goods-title {
		width: 100%;
		font-size: $font-base;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-order-status {
		color: #888;
		font-size: $font-base;
	}

	.tui-goods-item {
		width: 100%;
		padding: 20rpx 50rpx;
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

	.tui-goods-center {
		flex: 1;
		padding: 20rpx 60rpx;
		box-sizing: border-box;
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

	.tui-goods-attr {
		font-size: $font-sm;
		color: #888888;
		line-height: 32rpx;
		padding-top: 20rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
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
		align-items: center;
		justify-content: left;
		// font-size: 24rpx;
	}

	.tui-size-24 {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.tui-price-large {
		// font-size: 32rpx;
		line-height: 30rpx;
	}

	.tui-order-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background: #fff;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
	}

	.tui-order-btn view {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.tui-btn-ml {
		margin-left: 20rpx;
	}

	.tui-pro-experience {
		margin-left: 0rpx;
		padding: 5rpx 10rpx;
		font-size: 24rpx;
		border-radius: 10rpx;
	}

	/* 个性化更改 */
	.tui-goods-title view {
		// font-size: $font-sm;
	}

	.be-overdue {
		.tui-goods-click {
			display: none;
		}

		.tui-goods-chart {
			background: #FFFFFF;
			color: #666666;
		}
	}

	.be-overdue::after {
		position: absolute;
		content: '已过期';
		top: 32rpx;
		left: -59rpx;
		width: 34%;
		height: 50rpx;
		background: #666666;
		color: #FFFFFF;
		text-align: center;
		transform: rotate(-45deg);
		box-shadow: 0px 1px 5px#666666;
	}

	/* 搜索 */
	/* 左侧导航布局 start*/
	.tui-container-top {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 1;
	}

	.tui-searchbox {
		width: 100%;
		height: 82rpx;
		padding: 15rpx 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		position: relative;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 100;

		.tui-searchbox-top {
			display: flex;
			align-items: center;
			justify-content: center;

			.tui-search-input {
				flex: 13;
			}

			i {
				flex: 1;
				font-size: $font-bg;
				padding: 0 0 0 10rpx;
				color: $font-color-auto;
			}
		}

		.tui-search-check {
			font-size: $font-base-sm;
			margin-top: 15rpx;
			padding-left: 10rpx;
			color: $font-color-auto;
		}
	}

	.tui-searchbox::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #d2d2d2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-search-input {
		width: 100%;
		height: 60rpx;
		background: #f1f1f1;
		border-radius: 30rpx;
		font-size: $font-base;
		color: #999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: $font-base;
	}
</style>
