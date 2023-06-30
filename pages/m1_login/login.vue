<template>
	<view class="login-content">
		<view class="login-title">
			登录
		</view>
		<view class="input-area">
			<uni-easyinput type="number" trim="all" v-model="iphoneValue" placeholder="请输入手机号" maxlength="11" @input="input"></uni-easyinput>
			<uni-easyinput class="password-area" type="password" v-model="passwordValue" placeholder="请输入密码"></uni-easyinput>
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
				iphoneValue: '', //手机号码
				passwordValue: '', //密码
				testValue: '', //验证码
				showPassword: true, //是否显示密码
				showClearIcon: false, //是否显示清除按钮
				type: 2, //登录的状态 - - - 1是验证码登录、2是密码登录
				token: '',
				timer: 0, //验证码时间
				showTimer: true, //是否显示验证码时间
			}
		},

		methods: {
			
			input(e) {
				console.log('输入内容：', e);
			},
			// 切换登录的方式
			setLoginType(type) {
				this.type = type
			},
			Zhuce(){
				uni.navigateTo({
					url: "../m1_sign/m1_sign"
				})
			},
			
			Login() {
				let that = this
				//当手机号为空或者手机号不正确时
				if (!that.iphoneValue || !this.isMobile(that.iphoneValue)) {
					uni.showToast({
						title: '请输入正确电话号码',
						icon: 'none'
					})
					return false
				}
				// 当使用密码登录并且未输入密码时
				else if (that.type == 2 && !that.passwordValue) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return false
				}
				// 当使用验证码登录并且未输入验证码时
				else if (that.type == 1 && !that.testValue) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none'
					})
					return false
				}
				// 未连接到后端，测试用！
				else uni.navigateTo({ 
					//url: "../index/index",
					url: "../m1_role_select/m1_role_select"
				})
				uni.request({
					url: 'http://app/login', // 路径
					method: 'POST', // 请求方法
					data: {
						phone: that.iphoneValue,
						type: that.type,
						code: that.testValue,
						password: that.passwordValue
					}, //发送的数据
					success: (res) => {
						if (res.data.code == 200) {
							//存储token
							that.token = res.data.token;
							uni.setStorageSync('token', that.token); // 将登录信息以token的方式存在硬盘中
							uni.setStorageSync('userInfo', JSON.stringify(res.data)); // 将用户信息存储在硬盘中
							uni.switchTab({ // 跳转到新闻页面
								//url: "../index/index",
								url: "../m1_role_select/m1_role_select",
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
				})
			},
			// 获取验证码
			getTest() {
				let that = this
				//当手机号为空或者手机号不正确时
				if (!that.iphoneValue || !this.isMobile(that.iphoneValue)) {
					uni.showToast({
						title: '请输入正确电话号码',
						icon: 'none'
					})
					return false
				}
				uni.request({
					url: 'http://app/login/sendSms', // 路径
					method: 'GET', // 请求方法
					data: {
						phone: that.iphoneValue,
						type: '1',
					}, //发送的数据
					success: (res) => {
						if (res.data.code == 200) {
							uni.showToast({
								title: '验证码发送成功',
								icon: 'none'
							})
							that.timer=60//设置时间初始化
							that.timeDown(that.timer)//调用时间减少
						}
					}
				})
			},
			// 设置验证码时间动态减少
			timeDown(num){
				let that=this;
				// 当时间为0时,恢复为按钮,清除定时器
				if(num==0){
					that.showTimer=true;
					return clearTimeout();
				}else{
					that.showTimer=false;
					setTimeout(function(){
						that.timer=num-1
						that.timeDown(num-1)
					},1000)//定时每秒减一
				}
			},
			// 下面是可以封装起来引入的部分
			// 判断是否是正确的手机号码
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