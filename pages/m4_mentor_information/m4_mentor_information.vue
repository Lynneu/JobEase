<template>
	<view class="mi-container">
		
			<view class="mi-content">
				<uni-section :title="'就职公司:'+company_name" type="line"></uni-section>
				<!--<text>就职公司</text>
				<text>{{company_name}}</text>-->
			</view>
			
			<view class="mi-content">
				<uni-section :title="'真实姓名:'+real_name" type="line"></uni-section>
				<!--<text>真实姓名</text>-
				<text>{{real_name}}</text>-->
			</view>
			
			<view class="mi-content">
				<uni-section :title="'公司邮箱:'+email" type="line"></uni-section>
				<!--<text>公司邮箱</text>
				<text>{{email}}</text>-->
			</view>
			
			<view class="mi-content">
				<uni-section :title="'咨询方向:'+consultation_direction" type="line"></uni-section>
				<!--<text>咨询方向</text>
				<text>{{consultation_direction}}</text>-->
			</view>
			
			<view class="mi-content">
				<uni-section title="个人简介:" type="line"></uni-section>
				<!--<text>个人简介</text>-->
				<textarea  maxlength="1000" placeholder="最大输入长度为1000" :value="description" @input="introductionInput" auto-height></textarea>
			</view>
			
			<view class="mi-content">
			<uni-section :title="'咨询价格 : '+ priceValue+'元/时间单位'" type="line" padding>
				<uni-number-box  :max="9999" :step="5" :value="priceValue" @change="changePrice" />
			</uni-section>
			</view>
			
			<button class="save" @tap="savaInfo">保存修改</button>
			
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
				value: '请输入简介',
				description: '可修改aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
			}
		},
		methods: {
			changePrice(value) {
				this.priceValue = value;
			},
			introductionInput(e) {
				this.description = e.detail.value;
			}
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
		//	padding: 20rpx 0;
			//border-bottom: solid 1px #f2f2f2;
			position: relative;

			text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}
			
			textarea {
				color: #030303;
				font-size: 30rpx;
				vertical-align: middle;
				height: 150rpx;
				width: 100%;
				//margin-top: 30rpx;
				//margin-left: 20rpx;
				//margin-right: 50rpx;
				border: 1px solid #e8e8e8;
				padding: 10px;
			}
		}

		
	
	}
</style>
