<template>
	<view>
		<view class="main_body">
			<view class="tea_title">
				<uni-title  :title="user_detail.username" color="#027fff" type="h1" ></uni-title>
			</view>
			<view>
				<uni-section :title="'专业标签：'+user_detail.tip_teacher.map(value => tag.find(item => item.value === value)?.text).join(' ')" type="line" padding="0px"></uni-section>
				<uni-section :title="'评　　分：'+user_detail.score+'分'" type="line"></uni-section>
				<uni-section :title="'工作单位：'+user_detail.co" type="line"></uni-section>
				<uni-section :title="'咨询费用：'+user_detail.price+' 元  / 小时'" type="line"></uni-section>
				<view class="line"></view>
				<uni-section title="导师介绍" type="circle"></uni-section>
			</view>
			<view class="tea_content">
				<text>{{user_detail.comment}}</text>
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
				tag:[
				  { value: 0, text: '简历优化' },
				  { value: 1, text: '面试经验' },
				  { value: 2, text: '就业指导' },
				  { value: 3, text: '职业规划' },
				  { value: 4, text: '薪资谈判' },
				  { value: 5, text: '其他' }
				],
				user_detail:{
					"_id":"",
					"phone":"",
					"username":"",
					"isTeacher":"",
					"status":"",
					"email":"",
					"comment":"",
					"co":"",
					"job_number":"",
					"price":"",
					"score":"",
					"post":0,
					"tip_teacher":[],
					"tip_student":0,
					"goal":0
				}

			};
		},
		onLoad: function (option) {
			console.log('手机号上传')
			console.log(option.id)
			this.user_detail.phone=option.id
			console.log('手机号上传成功')
			console.log(this.user_detail.phone)
			
			const db = uniCloud.database()
			 db.collection('user_detail').where({
			   phone: this.user_detail.phone
			 }).limit(1).get().then(res => {
			   if (res.result && res.result.data && res.result.data.length > 0) {
			     this.user_detail = res.result.data[0]
			   } else {
			     console.error('No data found.')
			   }
			 }).catch(err => {
			   console.error('Error retrieving data:', err)
			 })
		 },
		 
		methods:{
			appointconsult(e){
				console.log(e)
				uni.navigateTo({
					url:'../m3_appt_consult/m3_appt_consult?phone='+this.user_detail.phone
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
