<template>
	<view>
		<view class="lec_body">
			<view class="backgroud1">
				<view class="word">
					<view class="title">
						<text>王某某</text>
					</view>
					<view class="datail">
						<text>专业标签：pp\n</text>
						<text>评　　分：10\n</text>
						<text>工作单位：10\n</text>
						<text>\n</text>
					</view>
					<view class="in_word">
						<view class="in_background">
							<text>
								导师介绍
							</text>
						</view>
					</view>
				</view>
			</view>
			<view>
				
			</view>
			<view class="confirm">
				<text>\n</text>
				<button size="mini" type="primary">
					<text>预约</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

	.lec_body{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 5%;
		padding-bottom: 30%;
		
	}
	.backgroud1{
		width: 100%;
		height: 900rpx;
		border-radius: 5px;
		background-color: #DCDCDC;
		box-shadow: 0px 0px 3px 2px #C0C0C0
	}
	.word{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 3%;
	}
	.title{
		font-size: 50rpx;
		font-weight: 600;
	}
	.datail{
		font-size: 30rpx;
		font-weight: 600;
	}
	.in_word{
		justify-content: center;
	}

	.in_background{
		width: 100%;
		height: 650rpx;
		border-radius: 5px 5px 5px 5px;
		background-color: #ffffff;
	}
	.confirm{
		padding-left: 55%;
		font-weight: 600;
	}

</style>
