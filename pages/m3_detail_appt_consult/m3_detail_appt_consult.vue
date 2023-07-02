<template>
	<view>
		<view class="main_body">
			<view class="tea_title">
				<uni-title  :title="teacher_name" color="#027fff" type="h1" ></uni-title>
			</view>
			<view>
				<uni-section :title="'专业标签：'+teacher_theme" type="line" padding="0px"></uni-section>
				<uni-section :title="'评　　分：'+teacher_score+'分'" type="line"></uni-section>
				<uni-section :title="'工作单位：'+teacher_work" type="line"></uni-section>
				<uni-section :title="'咨询费用：'+teacher_cost+' 元  / 30min'" type="line"></uni-section>
				<view class="line"></view>
				<uni-section title="导师介绍" type="circle"></uni-section>
			</view>
			<view class="tea_content">
				<text>{{teacher_content}}</text>
			</view>
			
			<uni-section class="button_display">
				<button class="appt_button" style="background-color: #007aff; color: #fff;" @click="appointconsult">
					<text>预约</text>
				</button>
			</uni-section>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				teacher_name:'小王',
				teacher_theme:'就业指导',
				teacher_score:'8',
				teacher_work:'啥都不行有限公司',
				teacher_cost:'30',
				teacher_content:'导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍.',
			};
		},
		methods:{
			appointconsult(e){
				console.log(e)
				uni.navigateTo({
					url:'../m3_appt_consult/m3_appt_consult'
				});
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.main_body{
		padding: 20rpx;
	}
	.tea_title{
		padding-left: 10px;
		padding-top: 15px;
	}
	.line{
		background-color: #c0c0c0;
		width: 100%;
		height: 1px;
	}
	.tea_content{
		font-size: 25rpx;
		padding-left: 8%;
		padding-right: 8%;
		padding-bottom: 20px;
	}
	.appt_button{
		border: none;
		color: #ffffff;
		margin-top: 40rpx;
		font-size: 28rpx;	
	}
	.button_display{
		padding-left: 40px;
		padding-right: 40px;
	}

</style>
