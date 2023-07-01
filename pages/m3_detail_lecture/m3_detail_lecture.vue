<template>
	<view>
		<uni-section class="lec_title" :title="lecture_title" titleFontSize="20px" type="line"></uni-section>
		
		<uni-section>
			<view class="lec_datail">
				<text>演 讲 人 ：{{lecture_name}} \n</text>
				<text>讲座时间：{{lecture_time}}\n</text>
				<text>讲座主题：{{lecture_theme}}\n</text>
				<text>讲座费用：{{lecture_cost}}\n</text>
				<text>剩余名额：{{lecture_num}}\n\n</text>
			</view>
			
			<uni-card padding="5px">
				<text class="card_title">讲座内容\n</text>
				<text class="card_content">{{lecture_content}}</text>
			</uni-card>
		</uni-section>
		
		<uni-section class="appt_button">
			<button  size="mini" type="primary" @click="appointLecture">
				<text>预约</text>
			</button>
		</uni-section>
				
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lecture_name:'pp',
				lecture_title: '如何拥有良好的睡眠质量',
				lecture_time:'2023.06.28 '+' 18:00',
				lecture_theme:'求职就业',
				lecture_cost:'30',
				lecture_num:'3'+'/'+'10',
				lecture_content:'讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容.'
				
			};
		},
		methods:{
			appointLecture() {
				uni.switchTab({
				  url: '../find_lecture/find_lecture'
				});
			}
		},
		
	}
</script>

<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.lec_title{
		padding-top: 15px;
	}
	.lec_datail{
		padding-left: 20px;
		font-size: 30rpx;
	}
	.card_title{
		font-size: 30rpx;
		font-weight: bold;
	}
	.card_content{
		font-size: 25rpx;
		font-weight: 600px;
	}
	.appt_button{
		padding-left: 70%;
	}

</style>
