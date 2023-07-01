<template>
	<view>
		<view class="lec_body">
			<view class="word">
				<view class="title">
					<text>王某某</text>
				</view>
				<view class="datail">
					<text>专业标签：pp\n</text>
					<text>评　　分：10\n</text>
					<text>工作单位：10\n</text>
					<text>\n</text>
				</view>
				<view class="in_word">
					<text>
						导师介绍\n
					</text>
					<text>
						测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
					</text>
				</view>
			</view>
			
			<view class="confirm">
				<text>\n</text>
				<button size="mini" style="background-color:#007AFF; color: #fff;" @click="trigger()">
					<text>预约</text>
				</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			trigger(e){
				console.log(e)
				uni.navigateTo({
					url:'../m3_appt_consult/m3_appt_consult'
				});
			},
		}
	}
</script>

<style lang="scss">

	.lec_body{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 5%;
		padding-bottom: 30%;
		
	}
	.word{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 3%;
	}
	.title{
		font-size: 50rpx;
		font-weight: 600;
	}
	.datail{
		font-size: 30rpx;
		font-weight: 600;
	}
	.in_word{
		justify-content: center;
	}
	.confirm{
		padding-left: 55%;
		font-weight: 600;
	}

</style>
