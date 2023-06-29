<template>
	<view class="container">
		<view class="ui-all">
			<view class="ui-list">
				<text>就职公司</text>
				<text>{{company_name}}</text>
			</view>
			<view class="ui-list">
				<text>真实姓名</text>
				<text>{{real_name}}</text>
			</view>
			<view class="ui-list">
				<text>公司邮箱</text>
				<text>{{email}}</text>
			</view>
			<view class="ui-list">
				<text>咨询方向</text>
				<text>{{consultation_direction}}</text>
			</view>
			<uni-section :title="'咨询价格 : '+ numberValue+'元/时间单位'" type="line" padding>
				<uni-number-box  :max="9999" :step="10" :value="numberValue" @change="change1" />
			</uni-section>
			<view class="ui-list">
				<text>个人简介</text>
				<text>{{mentor_introduction}}</text>
			</view>
			<view class="button-sp-area">
			    <button type="primary" plain="true">保存修改</button>
			 </view>
			
			
		</view>
	</view>
</template>

<script>
	export default {
	
		data() {
			return {
				company_name: '不可改',
				real_name: '不可改',
				email: '不可改',
				consultation_direction: '不可改',
				numberValue: 100,
				mentor_introduction:'可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改',
			}

		},
		methods: {
			change1(value) {
				this.numberValue = value;
			}
		},
		onLoad() {			
		}

	}
</script>

<style lang="less">
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
	.button-sp-area {
	    margin: 0 auto;
	    width: 60%;
	}
	}
</style>
