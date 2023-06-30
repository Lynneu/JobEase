<template>
	<view class="si-container">
		
		<view class="si-content">
			<text>用户名</text>
			<text>{{username}}</text>
		</view>
		
		<view class="si-content">
			<text>身份</text>
			<text>求职者</text>
		</view>
			
		<view class="si-content si-right">
			<text>就业目标</text>
			<picker @change="changeGoal" mode='selector' range-key="name" :value="index" :range="goal">
				<view class="si-picker">{{goal[index].name}}</view>
			</picker>
		</view>
		
		<view class="si-content si-right">
			<text>求职方向</text>
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
				username: '不可改',
				goal: [{
					id: 0,
					name: '保密'
				}, {
					id: 1,
					name: '找实习'
				}, {
					id: 2,
					name: '找工作'
				}],
				index: 0,
				/*direction: [{
				    id: 0,
				    name1: '保密'
				}, {
				    id: 1,
				    name1: '互联网IT'
				}, {
				    id: 2,
				    name1: '通信/硬件'
				}, {
				    id: 3,
				    name1: '设计/传媒'
				}],*/
				//direction: [{name:'前端开发'},{name:'后端开发'},{name:'C++开发'},{name:'Java开发'},{name:'算法'},{name:'测试开发'},{name:'产品经理'},{name:'运营'},{name:'HR'},{name:'其他'}],
				direction:[
					{ name1: '保密' },
					{ name1: '前端开发' },
					{ name1: '后端开发' },
					{ name1: 'C++开发' },
					{ name1: 'Java开发' },
					{ name1: '算法' },
					{ name1: '测试开发' },
					{ name1: '产品经理' },
					{ name1: '运营' },
					{ name1: 'HR' },
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

<style lang="less">
	body {
	  background-color: white;
	}
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			padding: 20rpx 0;
			border-bottom: solid 1px #d8d8d8;
			position: relative;

			text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}

			picker {
				width: 90%;
				color: #0055ff;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 20rpx;
				left: 150rpx;
			}
		}

		.si-right:after {
			content: ' ';
			width: 20rpx;
			height: 20rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			position: absolute;
			top: 30rpx;
			right: 0;
		}	
	
	}
</style>
