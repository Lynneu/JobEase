<template>
	<view class="uni-flex uni-row" style="flex-">
		<view class="user">
			<image class="user-icon" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
		</view>
		<view class="user">
			<text class="user-name">{{user_detail.username}}</text>
		</view>
	</view>
	<uni-card>
		<view class="card-actions uni-flex uni-row">
			<view class="normal">
				<button class="color" style="width: 210rpx; font-size: 20rpx; margin: 0rpx;">咨询/讲座提醒</button>
			</view>
			<view style="float: right;">
				<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
				<text class="card-actions-item-text">已打开</text>
			</view>
		</view>
		<view style="text-align: center; margin: 20rpx;">咨询/讲座30分钟前发送提示</view>
	</uni-card>
	<uni-card @click="seekerinfo">
		<view class="uni-flex uni-row">
			<view class="normal">个人信息</view>
			<uni-icons type="forward" size="18" color="#999"></uni-icons>
		</view>
	</uni-card>
	<uni-card @click="myconsult">
		<view class="uni-flex uni-row">
			<view class="normal">我的咨询</view>
			<uni-icons type="forward" size="18" color="#999"></uni-icons>
		</view>
	</uni-card>
	<uni-card @click="mylecture">
		<view class="uni-flex uni-row">
			<view class="normal">我的讲座</view>
			<uni-icons type="forward" size="18" color="#999"></uni-icons>
		</view>
	</uni-card>
	<uni-card @click="goToRoleSelect">
		<view class="uni-flex uni-row">
			<view class="normal">身份切换</view>
			<uni-icons type="forward" size="18" color="#999"></uni-icons>
		</view>
	</uni-card>
</template>

<script>
import m4_mentor_informationVue from '../m4_mentor_information/m4_mentor_information.vue';
	export default {
		data() {
			return {
				user_detail:{
					username: '',
				},
			};
		},
		onLoad() {
			if(getApp().globalData.st == 0)
			{
				this.st = true
			}else{
				this.st = false
			}
			this.phone = getApp().globalData.ph
			this.getMsg()
		},
		onShow() {
			this.getMsg()
		},
		methods: {
			myconsult() {
				uni.navigateTo({
					url: "../m2_my_consult/m2_my_consult"
				})
			},
			mylecture() {
				uni.navigateTo({
					url: "../m2_my_lecture/m2_my_lecture"
				})
			},
			seekerinfo() {
				if(getApp().globalData.st == 0) {
					uni.navigateTo({
						url: "../m4_seeker_information/m4_seeker_information"
					})
				} else{
					uni.navigateTo({
						url: "../m4_mentor_information/m4_mentor_information"
					})
				}
				
			},
			lecture() {
				uni.navigateTo({
					url: "../m2_my_lecture/m2_my_lecture"
				})
			},
			goToRoleSelect() {
				uni.navigateTo({
					url: "../m1_role_select/m1_role_select"
				})
			},
			getMsg() {
			    const db = uniCloud.database() // 创建数据库连接
				db.collection("user_detail").where({
						phone: {
						  $eq: this.phone
						}
					})
					.get()
					.then(res => {
						console.log(res)
						if (res.result.data.length > 0) {
							this.user_detail.username = res.result.data[0].username; // 获取查询结果中的username，并赋值给this.username
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
		}
	}
</script>

<style lang="scss">
body {
	background-color: white;
}
.color{
	background-color: $mk-base-color;
	color: white;
}
.user{
	width: 50%; 
	text-align: center;
}
.user-icon{
	height: 200rpx;
	width: 200rpx;
	margin: 10rpx;
}
.user-name{
	height: 200rpx;
	font-size: 40rpx;
	line-height: 200rpx;
	margin-right: 100rpx;
}
.normal {
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
	overflow: hidden;
}
</style>
