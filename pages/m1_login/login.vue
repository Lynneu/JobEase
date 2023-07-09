<template>
	<view class="login-content">
		<view class="login-title">
			登录
		</view>
		<view class="input-area">
			<uni-easyinput type="number" trim="all" v-model="user.phone" placeholder="请输入11位手机号" maxlength="11" @input="input"></uni-easyinput>
			<uni-easyinput class="password-area" type="password" v-model="user.password" placeholder="请输入密码"></uni-easyinput>
		</view>
		
	    <view class="signup">
			<h5>还未注册账号？点击进行</h5>	
			<button class="signup-btn" @click="Zhuce">注册</button>
		</view>
		<view class="login-btn" @click="Login">登录</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true, //是否显示密码
				showClearIcon: false, //是否显示清除按钮
				user:{
					 "phone": "",
					 "password": "",
				},
				user_find:{
					 "phone": "",
					 "password": "",
				},
				testing:{
				    "phone": "",
				    "username": "test",
				    "isTeacher": 1,
				    "status": "",
				    "email": "",
				    "comment": "",
				    "co": "",
				    "job_number": "",
				    "price": 0,
				    "score": 0,
				    "post": "",
				    "tip_teacher": [],
				    "tip_student": "",
				    "goal": ""
				}
			}
		},

		methods: {
			
			input(e) {
				console.log('输入内容：', e);
			},

			Zhuce(){
				uni.navigateTo({
					url: "../m1_sign/m1_sign"
				})
			},
			
			Login() {
				let that = this
				//当手机号为空或者手机号不正确时
				if (!that.user.phone || !this.isMobile(that.user.phone)) {
					uni.showToast({
						title: '请输入正确电话号码',
						icon: 'none'
					})
					return false
				}
				// 当使用密码登录并且未输入密码时
				else if (!that.user.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return false
				}
				else if(that.user.password.length<4||that.user.password.length>15)
				{
					uni.showToast({
						title: '密码错误',
						icon: 'none'
					})
					return false
				}
				
				else 
				{
					const db = uniCloud.database();
					db.collection('user_detail').where({
												  phone: {
												    $eq: this.user.phone
												  }
												}).limit(1).get().then(res => {
													if (res.result && res.result.data && res.result.data.length > 0)
													{
												    this.testing = res.result.data[0]
													getApp().globalData.st = this.testing.status
													}
												})
												
												
					
					db.collection('user').where({
					  phone: {
					    $eq: this.user.phone
					  }
					}).limit(1).get().then(res => {
					  if (res.result && res.result.data && res.result.data.length > 0) {
					    this.user_find = res.result.data[0]
						if(this.user_find.password==this.user.password)
						{
							
							
							
							getApp().globalData.ph = this.user.phone
							if(this.testing.status==0)
							{
								uni.switchTab({
								url: "../find_teacher/find_teacher"
								})
								
							}
							else{
								/*uni.navigateTo({
								//url: "../m3_confirm_consult/m3_confirm_consult"
								url: "../m4_release_lecture/m4_release_lecture"
								})*/
								uni.switchTab({
								url: "../m2_profile/m2_profile"
								})
							}
						}
						else
						{
							uni.showToast({
								title: '密码错误',
								icon: 'none'
							})
							return false
						}
					  } else {
					    uni.showToast({
					    	title: '手机号未注册',
					    	icon: 'none'
					    })
						return false
					  }
					})
					
				}
				
			},
			
			isMobile(str) {
				let reg = /^1\d{10}$/;
				return reg.test(str)
			},
			
			
		}
	}
</script>

<style scoped>
	.login-content {
		padding-top: 70px;
		padding-left: 20px;
		padding-right: 20px;
		text-align: center;
		color: #333333;
		
	}

	.login-title {
		font-size: 26px;
		font-weight: bold;
		margin-bottom: 31px;
	}
	.input-area{
		padding: 10px;
		
	}
	.password-area {
		top: 10px;
	}

	.logininput {
		height: 50px;
		background: #F8F8F8;
		border-radius: 25px;
		text-align: left;
		padding: 15px;
		box-sizing: border-box;
		font-size: 15px;
	}

	.iphone,
	.password,
	.test {
		position: relative;
		margin-bottom: 30px;
		width: 100%; 
		height: 40px;
	}

	.icon-area {
		position: absolute;
		top: 14px;
		right: 30px;
	}

	.test-btn,
	.password-btn {
		color: #0000ff;
		font-size: 15px;
		text-align: right;
	}

	.get-test {
		color: #0000ff;
		font-size: 15px;
		width: 122px;
		height: 50px;
		border: 1px solid #0000ff;
		border-radius: 25px;
		line-height: 50px;
	}

	.test {
		display: flex;
		justify-content: space-between;
	}

	.login-btn {
		width: 100%;
		height: 45px;
		background: #0000ff;
		border-radius: 36px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 45px;
		margin-top: 130px;
			
	}
	.signup-btn {
		width: 80px;
		height: 40px;
		background: #0000e1;
		text-align: center;
		border-radius: 36px;
		color: #fff;
		font-size: 20px;
		line-height: 40px;
		left: 10px;
		bottom: 10px;
	}
	.signup{
		height: 70px;
		float: right;
		display: flex;
		margin-right: 20px;
		margin-top: 40px;

	}
</style>