<template>
	<view class="container">
		<!-- 人员列表 -->
		<view class="box-list  public-card">
			<view class="box-list-top">
				<view class="btn">
					<view class="add-btn theme-shallow-bg theme-shallow-bg-shadow" @tap="clickUserForm()">添加学员</view>
					<view></view>
				</view>
			</view>
			<!-- 一个人 -->
			<view class="check-list">
				<view class="check-list-check-box">
					<checkbox class="tui-checkbox" color="#FFFFFF" background="#4E77FF" @tap="clickCheckBox()">
						<label>张三</label>
						<view>身份证:410XXXXXXXXXXXX0011</view>
					</checkbox>
					<i class="iconfont icon-bianji" @tap="editUser()"></i>
				</view>
			</view>

			<!-- 一个人 -->
			<view class="check-list">
				<view class="check-list-check-box">
					<checkbox class="tui-checkbox" color="#FFFFFF" background="#4E77FF" @tap="clickCheckBox()">
						<label>李四</label>
						<view>身份证:410XXXXXXXXXXXX0011</view>
					</checkbox>
					<i class="iconfont icon-bianji" @tap="editUser()"></i>
				</view>
			</view>

			<!-- 一个人 -->
			<view class="check-list">
				<view class="check-list-check-box">
					<checkbox class="tui-checkbox" color="#FFFFFF" background="#4E77FF" @tap="clickCheckBox()">
						<label>王五</label>
						<view>身份证:410XXXXXXXXXXXX0011</view>
					</checkbox>
					<i class="iconfont icon-bianji" @tap="editUser()"></i>
				</view>
			</view>
		</view>
		<view class="bottom-box">
			<view class="fixed-btn theme-bg theme-bg-shadow" @tap="clickSubmit()">确认</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			clickCheckBox() {
				this.tui.alert("点击checkbox")
			},
			// 点击编辑用户信息
			editUser() {
				this.tui.alert("点击用户修改")
			},
			// 打开学员表单
			clickUserForm() {
				this.openPages.openBindUserListForm();
			},
			// 提交确认
			clickSubmit() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss">
	.container {
		padding-bottom: 100rpx;
	}

	.public-card {
		display: block;
		padding-top: 0;
	}

	/* 头部部分 */
	.box-list-top {
		width: 100%;
		border-bottom: 1px solid #F6F6F6;
	}

	.box-list-top .btn {
		width: 100%;
		padding: 30rpx 20rpx 30rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.box-list-top .btn .add-btn {
		width: 40%;
		padding: 15rpx 20rpx;
		border-radius: 50rpx;
		text-align: center;
	}

	/* 中间部分 */
	.check-list-check-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px solid #F6F6F6;
	}

	.check-list-check-box checkbox {
		flex: 8;
		padding-left: 40rpx;
	}

	/* checkbox 选中的颜色 */
	.tui-checkbox .wx-checkbox-input {
		border: 1px solid #8A8A8A;
	}

	.tui-checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		background-color: $font-color-blue;

	}

	.check-list-check-box checkbox label,
	.check-list-check-box checkbox view {
		display: block;
		font-size: $font-bg;
		padding: 40rpx 0 0rpx 50rpx;
	}

	.check-list-check-box checkbox view {
		padding-top: 0;
		padding-bottom: 40rpx;
		font-size: $font-base;
		color: #8A8A8A;
	}

	.check-list-check-box i {
		flex: 2;
	}

	.check-list-check-box .iconfont {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: $font-max-bg;
		color: #8A8A8A;
	}

	.bottom-box {
		position: fixed;
		bottom: 50rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bottom-box .fixed-btn {
		width: 90%;
		text-align: center;
		padding: 20rpx;
		font-size: $font-bg;
		border-radius: 50rpx;
	}
</style>
