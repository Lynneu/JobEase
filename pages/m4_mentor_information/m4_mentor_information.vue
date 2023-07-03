<template>
	<view class="mi-container">
		<view style="text-align: center;">
			<image style="width: 10%; height: 150rpx;" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
		</view>
		
		<view class="mi-content">
			<uni-section :title="'就职公司:'+company_name" type="line"></uni-section>
		</view>
			
		<view class="mi-content">
			<uni-section :title="'真实姓名:'+real_name" type="line"></uni-section>
		</view>
			
		<view class="mi-content">
			<uni-section :title="'公司邮箱:'+email" type="line"></uni-section>
		</view>
			
		<view class="mi-content">
			<uni-section :title="'咨询方向:'+consultation_direction" type="line"></uni-section>
		</view>

		<view class="rl-content">
			<uni-section title="个人简介:" type="line"></uni-section>
			<uni-easyinput  v-model="description" placeholder="最大输入长度为200" maxlength="200" autoHeight/>
		</view>
			
		<view class="mi-content">
			<uni-section :title="'咨询价格 : '+ priceValue+'元/小时'" type="line" padding>
				<uni-number-box  :max="9999" :step="5" :value="priceValue" @change="changePrice" />
			</uni-section>
		</view>
			
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				company_name: '公司不可改',
				real_name: '名字不可改',
				email: '邮箱不可改',
				consultation_direction: '咨询方向不可改',
				priceValue: 100,
				description: '可修改'
			}
		},
		methods: {
			changePrice(value) {
				this.priceValue = value;
			},

			submit() {
				if (!this.description) {
					uni.showToast({
						title: '请填写简介',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
			},
			
		},
		
		onLoad() {			
		}

	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.mi-container {
		display: block;
		padding: 20rpx 40rpx;
		.mi-content {
			width: 100%;
			text-align: left;
			position: relative;
		}
	}
</style>
