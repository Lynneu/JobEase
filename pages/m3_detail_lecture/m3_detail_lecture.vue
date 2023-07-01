<template>
	<view>
		<view class="lec_body">
			<view class="word">
				<view class="title">
					<text>如何拥有良好的睡眠质量</text>
				</view>
		
				<view class="datail">
					<text v-for="(item,index) in name" :key="index">演 讲 人：{{item}} \n</text>
					<text>讲座时间：2023\n</text>
					<text>讲座主题：睡眠学导论\n</text>
					<text>讲座费用：0\n</text>
					<text>剩余名额：3\n</text>
				</view>
			</view>
		</view>
		<uni-card>
			<text>讲座内容\n</text>
			<text class="card_title">讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容</text>
		</uni-card>
		<button size="mini" style="background-color:#007AFF; color: #fff;" @click="appointLecture">
			<text>预约</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:['pp'],
				
			};
		},
		methods:{
			appointLecture() {
				uni.switchTab({
				  url: '../find_lecture/find_lecture'
				});
			}
		}
	}
</script>

<style lang="scss">
	.page{
		background-color: #ffffff;
	}
	.lec_body{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 5%;
		
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
		font-size: 30rpx;
		font-weight: 600;
	}
	.confirm{
		padding-left: 70%;
		font-weight: 600;
		padding-bottom: 3%;
	}
	.card_title{
		font-size: 20rpx;
	}

</style>
