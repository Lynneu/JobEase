<template>
	<view>
		<view class="lec_title">
			<uni-title  :title="lecture_title" color="#027fff" type="h1" ></uni-title>
		</view>
		<view>
			<uni-section :title="'演 讲 人 ：'+lecture_name" type="line" padding="0px"></uni-section>
			<uni-section :title="'讲座时间：'+lecture_time" type="line"></uni-section>
			<uni-section :title="'讲座主题：'+lecture_theme" type="line"></uni-section>
			<uni-section :title="'讲座费用：'+lecture_cost+' 元  / 30min'" type="line"></uni-section>
			<uni-section :title="'讲座名额：'+lecture_num+' 人'" type="line"></uni-section>
			<view class="line"></view>
			<uni-section title="讲座内容" type="circle"></uni-section>
		</view>
		<view class="lec_content">
			<text>{{lecture_content}}</text>
		</view>
		<uni-section class="button_display">
			<button class="appt_button" size="mini" style="background-color: #007aff; color: #fff;" @click="appointLecture">
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
				lecture_num:'3'+' / '+'10',
				lecture_content:'讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容讲座内容.'
				
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
		padding-left: 10px;
		padding-top: 15px;
	}
	.line{
		background-color: #c0c0c0;
		width: 100%;
		height: 1px;
	}
	.lec_content{
		font-size: 25rpx;
		padding-left: 8%;
		padding-right: 8%;
		padding-bottom: 20px;
	}
	.appt_button{
		padding-left: 46%;
		padding-right: 45%;
	}
	.button_display{
		padding-left: 3px;
		padding-bottom: 10px;
	}

</style>
