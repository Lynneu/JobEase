<template>
	<view class="login-content">
		<view class="login-title">
			导师认证
		</view>
		<view class="iphone">
			<input type="number" placeholder="就职公司" :value="iphoneValue" @input="clearInput" />
			<uni-icons type="closeempty" color="#808080" size="25" v-if="showClearIcon" @click="clearIcon"></uni-icons>
		</view>
		<view class="password">
			<!-- <input type="password" placeholder="输入密码" /> 要显示密码就不要设置type="password"-->
			<input placeholder="真实姓名" v-model="passwordValue" :password="showPassword" />
		</view>
		<view class="password">
			<input placeholder="工号" v-model="passwordValue" :password="showPassword" />
		</view>
		<view class="password">
			<input placeholder="岗位" v-model="passwordValue" :password="showPassword" />
		</view>
		<view class="password">
			<input placeholder="主要咨询//" v-model="passwordValue" :password="showPassword" />
		</view>
		<view class="password">
			<input placeholder="价格" v-model="passwordValue" :password="showPassword" />
		</view>
		<view class="password">
			<input placeholder="公司邮箱" v-model="passwordValue" :password="showPassword" />
		</view>
        <view class="test">
			<input type="text" placeholder="输入验证码" v-model="testValue" />
			<view class="get-test" type="default" @click="getTest()" v-if="showTimer">获取验证码</view>
			<view class="get-test" type="default" v-else>{{timer+'s'}}</view>
		</view>
		<view class="login-btn" @click="Login()">进行导师认证</view>
	</view>
</template>

<script>
	
</script>

<style scoped>
	.login-content {
		padding: 20px 10px 35px;
		text-align: center;
		color: #333333;
	}

	.login-title {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.login-content input {
		height: 40px;
		background: #F8F8F8;
		border-radius: 20px;
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
		top: 10px;
		right: 30px;
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
		width: 355px;
		height: 45px;
		background: #0000ff;
		border-radius: 36px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 45px;
		position: fixed;
		bottom: 60px;
	}
</style>