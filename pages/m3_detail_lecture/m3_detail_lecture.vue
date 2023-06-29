<template>
	<view>
		<view class="lec_body">
			<view class="backgroud">
				<view class="word">
					<view class="title">
						<text>如何拥有良好的睡眠质量</text>
					</view>
					<view class="datail">
						<text>演 讲 人：pp\n</text>
						<text>讲座时间：2023\n</text>
						<text>讲座主题：睡眠学导论\n</text>
						<text>讲座费用：0\n</text>
						<text>剩余名额：3\n</text>
						<text>\n</text>
					</view>
					<view class="in_word">
						<view class="in_background">
							<text>
								<text>讲座内容\n</text>
							</text>
						</view>
					</view>
				</view>
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
	.backgroud{
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
		padding-left: 3px;
		width: 100%;
		height: 470rpx;
		border-radius: 5px 5px 5px 5px;
		background-color: #ffffff;
	}
	.confirm{
		padding-left: 70%;
		font-weight: 600;
	}

</style>
