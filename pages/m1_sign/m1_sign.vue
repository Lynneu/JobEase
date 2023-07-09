<template>
	<view class="login-content">
		<view class="login-title">
			新用户注册
		</view>
		
		<view class="input-area">
			<uni-easyinput type="number" trim="all" v-model="user.phone" placeholder="请输入11位手机号" maxlength="11" @input="input"></uni-easyinput>
			<uni-easyinput type="password" v-model="user.password" placeholder="请输入4-15位密码" maxlength="15" ></uni-easyinput>
			<uni-easyinput type="password" v-model="password_double" placeholder="请再次输入密码" maxlength="15"></uni-easyinput>
		</view>
		<view class="login-btn" @click="Login">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				t:'',
				password_double: '', //第二次密码
				flag:0,
				user:{
					 "phone":"",
					 "password": "",
				}

			}
		},

		methods: {
			/*fpNumInput(e) {
							const o = e.target;
							const inputRule = /[^a-zA-Z]/g		
  //修改inputRule 的值
							this.$nextTick(function() {
								this.form.fpNum = o.value.replace(inputRule , '');
							})
						},*/

			input(e) {
				console.log('输入内容：', e);
			},
			// 密码登录
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

				else if (that.user.password != that.password_double) {
					uni.showToast({
						title: '两次输入密码不一致',
						icon: 'none'
					})
					return false
				}
				else if(that.user.password.length<4||that.user.password.length>15)
				{
					uni.showToast({
						title: '密码长度需在4-15',
						icon: 'none'
					})
					return false
				}
				else 
				{
					
					    var value = this.user.password;
					    //const test = /[A-Za-z0-9]+/;
						const test =/^[0-9a-zA-Z_-]{1,}$/
					    if(!test.test(value)){
					       uni.showToast({
					       	title: '密码仅允许英文字母、数字、符号-_',
					       	icon: 'none'
					       })
					       return false
					    }
					
					   if ( !this.ispass(that.user.password)) {
					   	uni.showToast({
					   		title: '密码仅允许英文字母、数字、符号-_',
					   		icon: 'none'
					   	})
					   	return false
					   }
					const db = uniCloud.database();
				
					db.collection('user').where({
					  phone: {
					    $eq: this.user.phone
					  }
					}).limit(1).get().then(res => {
					  if (res.result && res.result.data && res.result.data.length > 0) {
					    
						uni.showToast({
							title: '手机号已注册',
							icon: 'none'
						})
						return false
					  } else {
					    db.collection("user").add(this.user).then(e=>{
					    		console.log(e)
					    	})
						getApp().globalData.ph = this.user.phone
					    uni.navigateTo({ 
					    	url: "../m1_role_select/m1_role_select",
					    })
					  }
					})
					/*
					db.collection("user").add(this.user).then(e=>{
						console.log(e)
					})
				uni.navigateTo({ 
					url: "../m1_role_select/m1_role_select",
				})
				*/
				}
				/*uni.request({
					url: 'http://app/login', // 路径
					method: 'POST', // 请求方法
					data: {
						phone: that.user.phone,
						type: that.type,
						code: that.testValue,
						password: that.user.password
					}, //发送的数据
					success: (res) => {
						if (res.data.code == 200) {
						
							that.token = res.data.token;
							uni.setStorageSync('token', that.token); // 将登录信息以token的方式存在硬盘中
							uni.setStorageSync('userInfo', JSON.stringify(res.data)); // 将用户信息存储在硬盘中
							uni.switchTab({ 
								//url: "../index/index",
								url: "pages/find_teacher/find_teacher",
							})
							uni.showToast({
								title: '登录成功',
								icon: 'none'
							})
						} else {
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							})
						}
					}
				})*/
			},

			// 下面是可以封装起来引入的部分
			// 判断是否是正确的手机号码
			isMobile(str) {
				let reg = /^1\d{10}$/;
				return reg.test(str)
			},
			ispass(str) {
				let reg = /[A-Za-z0-9-_]/;
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

	.login-content input {
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
	}

	.iphone .uni-icons,
	.password .uni-icons {
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
		margin-top: 110px;
		
	}
	.input-area {
		input-area: 10px;
	}
</style>