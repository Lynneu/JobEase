<template>
	<view>
		<view class="information_display">
			<view>
				<uni-list>
					<uni-list-item v-for="item in consultData1" :key="item._id" direction="column" >
						<template v-slot:body>
							<view>
								<view class="title_display">
									<text class="title">咨询信息</text>
									<view class="button">
										<button class="button_text" size="mini" style="background-color: #007aff; color: #fff;" @click="updatefn(item)">
											<text>待审核</text>
										</button>
									</view>
									<text>\n</text>
								</view>
								
								<text class="word">咨询价格：{{item.appt_cost}} 元\n</text>
								<text class="word">咨询主题：{{appt_theme[item.appt_label].text}}\n</text>
								<text class="word">咨询日期：{{item.appt_date}}\n</text>
								<text class="word">预计时长：{{item.appt_duration}} 小时 \n</text>
								
								
							</view>
						</template>
					</uni-list-item>
				</uni-list>
			</view>
			<view>
				<uni-list>
					<uni-list-item v-for="item in consultData2" :key="item._id" direction="column">
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
		</view>	
	</view>
</template>
<!-- omit the rest of the code for brevity -->


<script>
	export default {
		name: 'pageconfirmConsult',
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
				consultData1: [],  // Use this to store the data of the first unicloud-db component
				consultData2: [],  // Use this to store the data of the second unicloud-db component

			};
		},	
		 mounted() {
			try {
			    const phone = getApp().globalData.ph;
			    if (phone !== this.phone) {
			      this.phone = phone;
			      this.$forceUpdate(); // 强制重新渲染
			    }
			    console.log(this.phone)
			  } catch (error) {
			    console.error(error);
			  }
			this.getData();
		},
		methods: {
			async getData() {
				try {
					let db = uniCloud.database();
					let res1 = await db.collection('consult').where({appt_state: 0, teach_tele: this.phone}).get();
					this.consultData1 = res1.result.data;
					let res2 = await db.collection('consult').where({appt_state: 1, teach_tele: this.phone}).get();
					this.consultData2 = res2.result.data;
				} catch (error) {
					console.log(error);
				}
			},
			updatefn(item){
				console.log('cehsi')
				uni.navigateTo({
					url:'../m3_confirm_consult/m3_choosetime/m3_choosetime?item='+JSON.stringify(item),
					success: res => {},
					fail: () =>{},
					complete: () => {}
				});
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
	.title_display{
		display: flex;
	}
	.button{
		flex: 1;
		text-align: right;
		padding-right: 10%;
	}
	.button_text{
		font-size: 5px;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>
