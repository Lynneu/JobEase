<template>
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
			
		<view class="si-content si-right">
			<uni-section title="就业目标:" type="line"></uni-section>
			<!--<text>就业目标</text>-->
			<picker @change="changeGoal" mode='selector' range-key="name" :value="index" :range="goal">
				<view class="si-picker">{{goal[index].name}}</view>
			</picker>
		</view>
		
		<view class="si-content si-right">
			<uni-section title="求职方向:" type="line"></uni-section>
			<!--<text>求职方向</text>-->
			<picker @change="changeDirection" mode='selector' range-key="name1" :value="index1" :range="direction">
				<view class="si-picker">
					{{direction[index1].name1}}
				</view>
			</picker>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '名字不可改',
				identity:'求职者',
				goal: [{
					id: 0,
					name: '看看机会'
				}, {
					id: 1,
					name: '找实习'
				}, {
					id: 2,
					name: '找校招'
				}],
				index: 0,
				direction:[
					{ name1: '看看机会' },
					{ name1: '前端开发' },
					{ name1: '后端开发' },
					{ name1: 'C++开发' },
					{ name1: 'Java开发' },
					{ name1: '算法' },
					{ name1: '测试开发' },
					{ name1: '产品经理' },
					{ name1: '运营' },
					{ name1: 'HR' },
					{ name1: '商务拓展' },
					{ name1: '其他' }
				],
				index1: 0
			}

		},
		methods: {
			changeGoal(e) {
				this.index = e.detail.value;
			},
			changeDirection(e) {
				this.index1 = e.detail.value;
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

			picker {
				width: 90%;
				color: #757575;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 23rpx;
				left: 170rpx;
			}
		}

		.si-right:after {
			content: ' ';
			width: 15rpx;
			height: 15rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			position: absolute;
			top: 35rpx;
			right: 0;
		}	
	
	}
</style>
