<template>
	<view class="container">
		<view style="color: #F00000; padding: 10rpx 20rpx;">请保证所有信息必须真实有效，若发现弄虚作假，将取消报名资格。</view>
		<form @submit="formSubmit" @reset="formReset">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员姓名</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="name" placeholder="请输入学员姓名"
						maxlength="50" type="text" />
					<radio-group class="radio-group" name="sex">
						<label class="tui-radio">
							<radio value="1" color="#5677fc" />男
						</label>
						<label class="tui-radio">
							<radio value="2" color="#5677fc" />女
						</label>
					</radio-group>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell" @tap="clickBirthday()">
					<view class="tui-title">生日</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="birthday" placeholder="点击选择日期"
						v-model="birthdayDatetime.result" disabled="true" maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">联系电话</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="phone" placeholder="请输入联系电话"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员就读学校</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="school" placeholder="选填学员就读学校"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<!-- <tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员手机号</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入手机号"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell> -->
			<!-- <tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员身份证</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入学员身份证"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell> -->
			<!--
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员就读年级</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入学员就读年级"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员证件照</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入学员证件照"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">学员身份证明</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入学员身份证明"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">监护人姓名</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入监护人姓名"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">监护人与学员关系</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入监护人与学员关系"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">紧急备用联系电话</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入紧急备用联系电话"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell> -->
			<!-- <tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">监护人身份证</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入监护人身份证"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell> -->
			<view class="tui-btn-box">
				<!-- <button class="tui-button-primary theme-bg" hover-class="tui-button-hover" formType="submit"
					type="primary">确认</button> -->
				<button class="tui-button-primary theme-bg" hover-class="tui-button-hover"
					@tap="clickSubmit()">确认</button>
				<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover"
					formType="reset">重置</button>
			</view>
		</form>
		<tui-datetime ref="dateTime" :type="birthdayDatetime.type" :startYear="birthdayDatetime.startYear"
			:endYear="birthdayDatetime.endYear" :cancelColor="birthdayDatetime.cancelColor"
			:color="cbirthdayDatetime.olor" :setDateTime="birthdayDatetime.setDateTime"
			:unitTop="birthdayDatetime.unitTop" :radius="birthdayDatetime.radius" @confirm="changeBirthday">
		</tui-datetime>
	</view>
</template>
<script>
	import tuiListCell from "@/components/thorui/tui-list-cell/tui-list-cell"
	import tuiListViem from "@/components/thorui/tui-list-view/tui-list-view"
	import tuiDatetime from "@/components/thorui/tui-datetime/tui-datetime"
	// const form = require("@/components/common/tui-validation/tui-validation.js")

	function checkKeyword(value) {
		if (~value.indexOf("***")) {
			return false;
		}
		return true;
	}
	export default {
		components: {
			tuiListCell,
			tuiListViem,
			tuiDatetime
		},
		data() {
			return {
				birthdayDatetime: {
					type: 2,
					startYear: 1980,
					endYear: 2021,
					cancelColor: '#E41F19',
					color: '#5677fc',
					setDateTime: '',
					result: '',
					unitTop: false,
					radius: true
				}
			}
		},
		methods: {
			formSubmit: function(e) {
				//表单规则
				let rules = [{
					name: "name",
					rule: ["required", "isChinese", "minLength:2", "maxLength:6"], //可使用区间，此处主要测试功能
					msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
				}, {
					name: "sex",
					rule: ["required"],
					msg: ["请选择性别"]
				}, {
					name: "age",
					rule: ["required", "isNum", "range:[0,150]"],
					msg: ["请输入年龄", "请输入正确的年龄", "请输入正确的年龄范围：0-150"]
				}, {
					name: "mobile",
					rule: ["required", "isMobile"],
					msg: ["请输入手机号", "请输入正确的手机号"]
				}, {
					name: "email",
					rule: ["required", "isEmail"],
					msg: ["请输入邮箱", "请输入正确的邮箱"]
				}, {
					name: "idcard",
					rule: ["required", "isIdCard"],
					msg: ["请输入身份证号码", "请输入正确的身份证号码"]
				}, {
					name: "pwd",
					rule: ["required", "isEnAndNo"],
					msg: ["请输入密码", "密码为8~20位数字和字母组合"]
				}, {
					name: "pwd2",
					rule: ["required", "isSame:pwd"],
					msg: ["请输入确认密码", "两次输入的密码不一致"]
				}, {
					name: "range",
					rule: ["required", "range:[3,20]"],
					msg: ["请输入区间数字", "请输入3-20之间的数字"]
				}, {
					name: "amount",
					rule: ["required", "isAmount"],
					msg: ["请输入金额", "请输入正确的金额，允许保留两位小数"]
				}, {
					name: "custom",
					rule: ["required"],
					msg: ["请输入自定义内容"],
					validator: [{
						msg: "内容不可包含非法字符***",
						method: checkKeyword
					}]
				}];
				//进行表单检查
				let formData = e.detail.value;
				let checkRes = form.validation(formData, rules);
				if (!checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: checkRes,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log("清空数据")
			},
			// 提交
			clickSubmit() {
				uni.navigateBack({
					delta: 1
				});
			},
			//点击选择生日
			clickBirthday() {
				this.$refs.dateTime.show();
			},
			// 更改选择生日
			changeBirthday(e) {
				console.log(e);
				this.birthdayDatetime.result = e.result;
			},
		}
	}
</script>

<style scoped>
	.container {
		padding: 20rpx 0 50rpx 0;
	}

	.tui-line-cell {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-title {
		line-height: 32rpx;
		min-width: 120rpx;
		flex-shrink: 0;
	}

	.tui-input {
		font-size: 32rpx;
		color: #333;
		padding-left: 20rpx;
		flex: 1;
		overflow: visible;
	}

	.radio-group {
		margin-left: auto;
		transform: scale(0.8);
		transform-origin: 100% center;
		flex-shrink: 0;
	}

	.tui-radio {
		display: inline-block;
		padding-left: 28rpx;
		font-size: 36rpx;
		vertical-align: middle;
	}


	.tui-btn-box {
		padding: 40rpx 50rpx;
		box-sizing: border-box;
	}

	.tui-button-gray {
		margin-top: 30rpx;
	}

	.tui-tips {
		padding: 30rpx;
		color: #999;
		font-size: 24rpx;
	}
</style>
