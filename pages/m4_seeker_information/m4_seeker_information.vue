<template>
	<view class="container">
		<view class="ui-all">
			<view class="ui-list">
				<text>用户名</text>
				<text>{{username}}</text>
			</view>
			<view class="ui-list">
				<text>身份</text>
				<text>求职者</text>
			</view>
			
			<view class="ui-list right">
				<text>就业目标</text>
				<picker @change="bindPickerChange" mode='selector' range-key="name" :value="index" :range="goal">
					<view class="picker">
						{{goal[index].name}}
					</view>
				</picker>
			</view>
		
			<view class="ui-list right">
				<text>求职方向</text>
				<picker @change="bindPickerChange1" mode='selector' range-key="name" :value="index1" :range="direction">
					<view class="picker">
						{{direction[index1].name}}
					</view>
				</picker>
			</view>
			
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
				direction: [{
				    id: 0,
				    name: '保密'
				}, {
				    id: 1,
				    name: '互联网IT'
				}, {
				    id: 2,
				    name: '通信/硬件'
				}, {
				    id: 3,
				    name: '设计/传媒'
				}, {
				    id: 4,
				    name: '人事行政'
				}, {
				    id: 5,
				    name: '金融/法务'
				}, {
				    id: 6,
				    name: '生产制造'
				}, {
				    id: 7,
				    name: '教育培训'
				}, {
				    id: 8,
				    name: '生物医疗'
				}, {
				    id: 9,
				    name: '服务业'
				}, {
				    id: 10,
				    name: '房产/建筑'
				}, {
				    id: 11,
				    name: '其他'
				}],
				index1: 0
			}

		},
		methods: {
			bindPickerChange(e) {
				this.index = e.detail.value;
			},
			bindPickerChange1(e) {
				this.index1 = e.detail.value;
			}
		},
		onLoad() {			
		}

	}
</script>

<style lang="scss">
	.container {
		display: block;
	}

	.ui-all {
		padding: 20rpx 40rpx;
		.ui-list {
			width: 100%;
			text-align: left;
			padding: 20rpx 0;
			border-bottom: solid 1px #f2f2f2;
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
				color: #030303;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 30rpx;
				left: 150rpx;
			}
		}

		.right:after {
			content: ' ';
			width: 20rpx;
			height: 20rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			/* IE 9 */
			-moz-transform: rotate(45deg);
			/* Firefox */
			-webkit-transform: rotate(45deg);
			/* Safari 和 Chrome */
			-o-transform: rotate(45deg);
			position: absolute;
			top: 40rpx;
			right: 0;
		}	
	
	}
</style>
