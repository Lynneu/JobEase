<template>
	<view class="si-container">
		<view style="text-align: center;">
			<image style="width: 10%; height: 150rpx;" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
		</view>
		
		<view class="rl-content">
			<uni-section title="用户名:" type="line"></uni-section>
			<uni-easyinput  v-model="user_detail.username" placeholder="最大输入长度为20" maxlength="20" autoHeight/>
		</view>
		
		<view class="si-content">
			<uni-section :title="'身份:求职者'" type="line"></uni-section>
		</view>
		
		<view class="si-content">
			<uni-section title="就业目标(点击更改):" type="line"></uni-section>
			<uni-data-select
			v-model="user_detail.goal" 
			:localdata="goal" 
			@change="changeGoal">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="目标岗位(点击更改):" type="line"></uni-section>
			<uni-data-select
			v-model="user_detail.post" 
			:localdata="direction" 
			@change="changeDirection">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="需求标签(点击更改):" type="line"></uni-section>
			<uni-data-select
			v-model="user_detail.tip_student" 
			:localdata="tag" 
			@change="changeTag">
			</uni-data-select>
		</view>
		
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goal: [
					{value: 0,text: '找实习'	}, 
					{value: 1,text: '找校招'	},
					],
				direction:[
				 { value: 0, text: '前端开发' },
				 { value: 1, text: '后端开发' },
				 { value: 2, text: 'C++开发' },
				 { value: 3, text: 'Java开发' },
				 { value: 4, text: '算法' },
				 { value: 5, text: '测试开发' },
				 { value: 6, text: '产品经理' },
				 { value: 7, text: '运营' },
				 { value: 8, text: 'HR' },
				 { value: 9, text: '其他' }
				],
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
					//"isTeacher":"",
					//"status":"",
					//"email":"",
					//"comment":"",
					//"co":"",
					//"job_number":"",
					//"price":"",
					//"score":"",
					"post":0,
					"tip_teacher":[],
					"tip_student":0,
					"goal":0
				}
			}
		},
		onShow() {
			this.user_detail.phone=getApp().globalData.ph;		
		},
		onLoad() {
			  //getApp().globalData.ph = "12345678977";	
			  const db = uniCloud.database()
			   db.collection('user_detail').where({
			     phone: {
			       $eq: getApp().globalData.ph
			     }
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
		methods: {
			changeGoal(e) {
				console.log(this.user_detail.goal)
			},
			changeDirection(e) {
				console.log(this.user_detail.post)
			},
			changeTag(e) {
				console.log(this.user_detail.tip_student)
			},
			submit() {
				if (!this.user_detail.username) {
				   uni.showToast({
				      title: '用户名不能为空',
				      icon: 'none',
				      duration: 2000
				   });
				   return;
				}
			  const db = uniCloud.database();
			  let user_detail = { ...this.user_detail };
			  delete user_detail._id;
			  db.collection("user_detail")
			    .doc(this.user_detail._id)
			    .update(user_detail)
			    .then((res) => {
			      console.log(res);
			    })
			    .catch((err) => {
			      console.error("Error updating data:", err);
			    });
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
			}
		}
	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			position: relative;
		}
	}
</style>	
