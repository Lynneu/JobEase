<template>
	<view style="text-align: center;">
		<image style="width: 30%; height: 200rpx;" mode="aspectFit" src="../../static/logo.png"></image>
	</view>
	<view class="si-container">
		
		<view class="si-content">
			<uni-section :title="'用户名:'+username" type="line"></uni-section>
			<!--<text>用户名</text>
			<text>{{username}}</text>-->
		</view>
		
		<view class="si-content">
			<uni-section :title="'身份:'+identity" type="line"></uni-section>
			<!--<text>身份</text>
			<text>求职者</text>-->
		</view>
			
		<view class="si-content">
			<uni-section title="就业目标:" type="line"></uni-section>
			<!--<text>就业目标</text>-->
			<!--<picker @change="changeGoal" mode='selector' range-key="name" :value="index" :range="goal">
				<view class="si-picker">{{goal[index].name}}</view>
			</picker>-->
			<uni-data-select
			v-model="index" 
			:localdata="goal" 
			:clear="false" 
			@change="changeGoal">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="求职方向:" type="line"></uni-section>
			<!--<text>求职方向</text>-->
			<!--<picker @change="changeDirection" mode='selector' range-key="name1" :value="index1" :range="direction">
				<view class="si-picker">
					{{direction[index1].name1}}
				</view>
			</picker>-->
			<uni-data-select
			v-model="index1" 
			:localdata="direction" 
			:clear="false" 
			@change="changeDirection">
			</uni-data-select>
		</view>
		
		<button class="save" @tap="saveInfo">保存修改</button>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '名字不可改',
				identity:'求职者',
				goal: [{
					value: 0,
					text: '看看机会'
				}, {
					value: 1,
					text: '找实习'
				}, {
					value: 2,
					text: '找校招'
				}],
				index: 0,
				direction:[
				  { value: 0, text: '看看机会' },
				  { value: 1, text: '前端开发' },
				  { value: 2, text: '后端开发' },
				  { value: 3, text: 'C++开发' },
				  { value: 4, text: 'Java开发' },
				  { value: 5, text: '算法' },
				  { value: 6, text: '测试开发' },
				  { value: 7, text: '产品经理' },
				  { value: 8, text: '运营' },
				  { value: 9, text: 'HR' },
				  { value: 10, text: '其他' }
				],
				index1: 0
			}

		},
		methods: {
			changeGoal(e) {
				console.log(this.index)
			},
			changeDirection(e) {
				console.log(this.index1)
			},
			saveInfo() {
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
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
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			//padding: 20rpx 0;
			//border-bottom: solid 1px #d8d8d8;
			position: relative;

			/*text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}*/

			/*picker {
				width: 90%;
				color: #757575;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 23rpx;
				left: 170rpx;
			}*/
		}

		/*.si-right:after {
			content: ' ';
			width: 15rpx;
			height: 15rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			position: absolute;
			top: 35rpx;
			right: 0;
		}	*/
	
	}
	.save{
		margin-top: 102px;
	}
</style>
