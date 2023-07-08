<!--7.8 20:29-->
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
			<uni-section :title="'身份:导师'" type="line"></uni-section>
		</view>
		
		<view class="mi-content">
			<uni-section :title="'就职公司:'+user_detail.co" type="line"></uni-section>
		</view>
		
		<view class="mi-content">
			<uni-section :title="'导师邮箱:'+user_detail.email" type="line"></uni-section>
		</view>
		
		<view class="mi-content">
			<uni-section :title="'工作岗位:'+direction.find(item => item.value === user_detail.post).text" type="line"></uni-section>
		</view>
		
		<view class="mi-content">
		  <uni-section :title="'咨询标签:' + user_detail.tip_teacher.map(value => tag.find(item => item.value === value)?.text).join(' ')" type="line"></uni-section>
		</view>
		
		<view class="rl-content">
			<uni-section title="个人简介:" type="line"></uni-section>
			<uni-easyinput  v-model="user_detail.comment" placeholder="最大输入长度为200" maxlength="200" autoHeight/>
		</view>
		
		<view class="mi-content">
			<uni-section :title="'咨询价格 (0-999): '+ user_detail.price+'元/小时'" type="line" padding>
				<uni-number-box  :min="0" :max="999" :step="10" :value="user_detail.price" @change="changePrice" />
			</uni-section>
		</view>
		
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
					"co":"",
					"email":"",
					"post":0,
					"tip_teacher":[],
					"comment":"",
					"price":""
				}
			}
		},
		onShow() {
			this.user_detail.phone=getApp().globalData.ph;			
			//console.log('Phone:', this.user_detail.phone);
		},
		onLoad() {
			//getApp().globalData.ph = "19876543210";			
			console.log('Phone:', this.user_detail.phone);
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
			changePrice(value) {
				this.user_detail.price = value;
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
				if (!this.user_detail.comment) {
					uni.showToast({
						title: '请填写简介',
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
				//uni.switchTab({
					//url: "../m2_profile/m2_profile"
				//})
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
