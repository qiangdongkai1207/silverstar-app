<template>
	<view class="container">
		<view class="container-box">
			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg1.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top theme-color">永安街</view>
					<view class="card-text-lb"><label>电话：</label>
						<view>13526619279</view>
					</view>
					<view class="card-text-lb"><label>座机：</label>
						<view>0371-66655567</view>
					</view>
					<view class="card-text-lb"><label>地址：</label>
						<view>郑州市二七区京广路与永安街西南角二楼</view>
					</view>
				</view>
				<view class="card-tip-bottom">
					距离：30m
				</view>
			</view>

			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg" v-show="false">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg2.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">纬五路</view>
					<view class="card-text-lb"><label>电话：</label>
						<view>15515692178 </view>
					</view>
					<view class="card-text-lb"><label>座机：</label>
						<view>0371-65925699 </view>
					</view>
					<view class="card-text-lb"><label>地址：</label>
						<view>郑州市金水区纬五路与经三路交叉口经纬大厦10楼银星艺校</view>
					</view>
				</view>
				<view class="card-tip-bottom">
					距离：1300m
				</view>
			</view>

			<!-- 卡片 -->
			<view class="public-card" hover-class="card-hover" @tap="clickCard()">
				<view class="card-tip-top theme-bg" v-show="false">
					离我最近
				</view>
				<view class="card-img">
					<image src="../../../static/image/index/bg3.jpg"></image>
				</view>
				<view class="card-text">
					<view class="top">中原路</view>
					<view class="card-text-lb"><label>电话：</label>
						<view>15515692178 </view>
					</view>
					<view class="card-text-lb"><label>座机：</label>
						<view> 0371-65925699</view>
					</view>
					<view class="card-text-lb"><label>地址：</label>
						<view>郑州市二七区中原路与京广路交叉口（四中对面）“天赐良园”1号楼4楼银星艺校</view>
					</view>
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
			clickCard() {
				console.log("index")
				this.openPages.openIndex();
			}
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
</style>
