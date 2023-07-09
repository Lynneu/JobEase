<template>
	<view>
		<view class="information_display">
			<unicloud-db v-slot:default="{data,loading,error,options}" collection="consult">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					<uni-list>
						<uni-list-item v-for="item in data.filter((item) => item.appt_state === 0 && item.teach_tele === phone )" :where=" `item.appt_state = 0`" :key="item._id" direction="column" @click="updatefn(item)">
							<template v-slot:body>
								<view>
									<text class="title">咨询信息</text>
									<text class="title2">待审核\n</text>
									<text class="word">咨询价格：{{item.appt_cost}} 元\n</text>
									<text class="word">咨询主题：{{appt_theme[item.appt_label].text}}\n</text>
									<text class="word">咨询日期：{{item.appt_date}}\n</text>
									<text class="word">预计时长：{{item.appt_duration}} 小时 \n</text>
								</view>
							</template>
						</uni-list-item>
					</uni-list>
					
				</view>
			</unicloud-db>
			<unicloud-db v-slot:default="{data,loading,error,options}" collection="consult">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					<uni-list>
						<uni-list-item v-for="item in data.filter((item) => item.appt_state === 1 && item.teach_tele === phone )" :where=" `item.appt_state = 0`" :key="item._id" direction="column" @click="warning">
							<template v-slot:body>
								<view>
									<text class="title">咨询信息</text>
									<text class="title2">未完成\n</text>
									<text class="word">咨询价格：{{item.appt_cost}} 元\n</text>
									<text class="word">咨询主题：{{appt_theme[item.appt_label].text}}\n</text>
									<text class="word">咨询日期：{{item.appt_date}}\n</text>
									<text class="word">预计时长：{{item.appt_duration}} 小时 \n</text>
									
								</view>
							</template>
						</uni-list-item>
					</uni-list>
					
				</view>
			</unicloud-db>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appt_theme:[
					{ value: 0, text: '简历优化' },
					{ value: 1, text: '面试经验' },
					{ value: 2, text: '就业指导' },
					{ value: 3, text: '职业规划' },
					{ value: 4, text: '薪资谈判' },
					{ value: 5, text: '其他' }
				],
				phone:'',

			};
		},	
		onShow() {
			this.phone=getApp().globalData.ph;
			//console.log('Phone:', this.lecture.phone);
		},
		methods: {
			updatefn(item){
				console.log('cehsi')
				uni.navigateTo({
					url:'../m3_confirm_consult/m3_choosetime/m3_choosetime?item='+JSON.stringify(item),
					success: res => {},
					fail: () =>{},
					complete: () => {}
				});
			},
			warning(){
				uni.showToast({
					title: '咨询未完成',
					icon: 'none'
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.title{
		padding-left: 40rpx;
		padding-bottom: 5rpx;
		font-size: 15px;
		font-weight: 600;
		color: #007aff;
	}
	.title2{
		padding-left: 45%;
		color: #007aff;
	}
	.word{
		padding-left: 40rpx;
		padding-bottom: 5rpx;
		font-size: 10px;
		font-weight: 600;
	}
	.information_display{
		padding: 5px;
	}
</style>
