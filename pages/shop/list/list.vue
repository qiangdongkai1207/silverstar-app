<template>
	<view class="container">
		<view class="tui-searchbox" :style="{'position':[pageScrollTop?'fixed':'relative']}">
			<view class="tui-searchbox-top">
				<!-- <i class="iconfont icon-qiehuan" @tap="clickIndexCategory()"></i> -->
				<view class="tui-search-input true" @tap="clickSearchbox()">
					<icon type="search" :size="13" color="#999" v-show="false"></icon>
					<text class="tui-search-text">课程</text>
				</view>
			</view>
			<view class="tui-search-check" @tap="clickIndexCategory()">
				当前校区：永安街[点击切换]
			</view>
		</view>
		
		<view class="class-box-block" :style="{'marginTop':[pageScrollTop?'130rpx':'0']}">
			
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">舞蹈课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>

			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg" v-if="false">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">语言课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>


			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg" v-if="false">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">绘画课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>
			
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">舞蹈课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>
			
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">舞蹈课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>
			
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">舞蹈课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>
			
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					火热报名
				</view>
				<view class="card-img" v-if="false">
					<image src="/static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">舞蹈课</view>
					<view><label>报名时间：</label>
						<text class="text-indent">2021年9月9日 - 2021年10月9日</text>
					</view>
					<view><label>上课时间：</label>
						<text class="text-indent">周一 18：00 - 21：00</text>
						<text class="text-indent">周六 9：00 - 12：00</text>
					</view>
					<view><label>要求：</label>
						<text class="text-indent">适合18岁以下的儿童</text>
					</view>
				</view>
				<view class="card-tip-bottom">
					点击了解详情
				</view>
			</view>
			
		</view>

	</view>
</template>

<script>
	import tLinkage from '@/components/views/t-linkage/t-linkage';
	import scrollMessage from '@/components/views/scroll-message/scroll-message.vue';
	export default {
		components: {
			tLinkage,
			scrollMessage
		},
		data() {
			return {
				pageScrollTop: false, // 判断页面是否滚动
				userInfo: null, // 用户信息

				tabbar: [
					'秋季上新',
					'舞蹈',
					'美术',
					'跆拳道',
					'语言',
				],
				height: 0, //scroll-view高度
				top: 0,
				currentTab: 0, //预设当前项的值
				scrollView_leftId: 'left_0',
				scrollView_rightId: 'right_0',
				scrollTop: 0,
				distanceTop: uni.upx2px(92),
				isScroll: true,
				isTap: true
			}
		},
		onLoad() {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header = 92;
						let top = 0;
						//#ifdef H5
						top = 44;
						//#endif
						this.height = res.windowHeight - uni.upx2px(header);
						this.top = top + uni.upx2px(header) + 20;
					}
				});
			}, 50);
		},
		onShow() {
			this.checkLogin();
		},
		methods: {
			checkLogin() {
				this.userInfo = this.tui.getUserInfo();
				console.log(this.userInfo)
				if (!this.userInfo) {
					this.openPages.openLogin();
				}
			},

			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				let cur = e.currentTarget.dataset.current;
				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur;
					this.checkCor();
				}
			},
			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function(isScroll) {
				if (!isScroll) {
					this.isScroll = false;
					this.isTap = true;
					if (this.currentTab > 6) {
						this.scrollView_leftId = `left_${this.currentTab - 2}`;
					} else {
						this.scrollView_leftId = `left_0`;
					}
					this.scrollView_rightId = `right_${this.currentTab}`;
				} else {
					this.scrollView_leftId = `left_${this.currentTab}`;
				}
			},
			productList(e) {
				let key = e.currentTarget.dataset.key;
				uni.navigateTo({
					url: '/pages/template/mall/productList/productList?searchKey=' + key
				});
			},
			search: function() {
				uni.navigateTo({
					url: '/pages/template/news/search/search'
				});
			},
			scroll(e) {
				//动画时长固定300ms
				if (!this.isScroll) {
					setTimeout(() => {
						this.isScroll = true;
					}, 150);
				} else {
					this.scrollTop = e.detail.scrollTop;
				}
			},
			linkage(e) {
				if (e.isLinkage && e.index != this.currentTab) {
					this.isTap = false;
					this.currentTab = e.index;
					this.checkCor(true);
				}
			},
			// 点击进入商品详情（报名）
			clickCard() {
				this.openPages.openShopInfo();
			},
			clickIndexCategory() {
				// this.tui.alert("切换");
				this.openPages.openIndexCategory();
			},
			clickSearchbox() {
				// this.tui.alert("查询");
				this.openPages.openSeach();
			},
			// 页面下拉时的触发事件
			onPageScroll(e) {
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
	/* 导航栏 */
	/* 左侧导航布局 start*/
	.tui-searchbox {
		width: 100%;
		height: 132rpx;
		padding: 15rpx 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		position: fixed;
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
			margin-top: 10rpx;
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

	.tab-view {
		/* height: 100%; */
		width: 150rpx;
		position: fixed;
		left: 0;
		z-index: 10;
		background: #FFFFFF;
	}

	.tab-bar-item {
		width: 100%;
		height: 90rpx;
		background: transparent;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: $font-base;
		color: #444;
		font-weight: 400;
		margin-top: 20rpx;
	}

	.active {
		position: relative;
		color: $font-color-blue;
		font-size: $font-lg;
		font-weight: 600;
		background: $font-color-blue-shallow;
	}

	.active::before {
		content: '';
		position: absolute;
		border-left: 8rpx solid $font-color-blue;
		height: 30rpx;
		left: 0;
	}

	/* 左侧导航布局 end*/

	.right-box {
		width: 100%;
		position: fixed;
		padding-left: 170rpx;
		box-sizing: border-box;
		left: 0;
	}

	.page-view {
		width: 100%;
		overflow: hidden;
		padding-top: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.class-item {
		background: transparent;
		width: 100%;
		box-sizing: border-box;
		/* padding: 20rpx; */
		margin-bottom: 20rpx;
		border-radius: 12rpx;
	}

	.class-name {
		font-size: $font-bg;
		font-weight: bold;
		color: $font-color-auto;
	}

	.g-container {
		/* padding-top: 20rpx; */
		display: flex;
		display: -webkit-flex;
		justify-content: flex-start;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.g-box {
		width: 33.3333%;
		text-align: center;
		padding-top: 40rpx;
	}

	.g-image {
		width: 150rpx;
		height: 150rpx;
	}

	.g-title {
		font-size: $font-sm;
	}

	/* 卡片自定义 */
	.public-card {
		padding-bottom: 55rpx;
	}

	.card-img {
		height: 170rpx;
		width: 390rpx;
	}

	.card-text {
		margin-left: 20rpx;
	}

	.tab-bar-item text {
		font-size: $font-base;
	}

	.card-tip-bottom {
		color: #f00 !important;
		font-size: $font-sm;
		bottom: 15rpx;
	}

	.card-text view {
		font-size: $font-base-sm;
	}

	.card-text label {
		// font-size: $font-base;
		color: #b3b3b3;
	}

	.card-tip-top {
		font-size: $font-sm;
		top: 25rpx;
		right: 15rpx;
	}


	/* 本页面特有 */
	.class-box-block {
		margin-top: 130rpx;
		padding: 0 30rpx 30rpx 30rpx;
	}

	.tui-search-input.true {
		justify-content: left;

		.tui-search-text {
			color: #000000;
		}
	}
</style>
