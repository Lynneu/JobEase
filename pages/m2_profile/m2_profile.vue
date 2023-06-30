<template>
	<view>
		<h5>测试按钮</h5>
		<button type="primary" @click="mentorinfo">导师信息</button>
		<button type="primary" @click="seekerinfo">个人信息</button>
	</view>
</template>

<script>
import m4_mentor_informationVue from '../m4_mentor_information/m4_mentor_information.vue';
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			mentorinfo() {
				uni.navigateTo({
					url: "../m4_mentor_information/m4_mentor_information"
				})
			},
			seekerinfo() {
				uni.navigateTo({
					url: "../m4_seeker_information/m4_seeker_information"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
