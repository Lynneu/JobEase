<template>
	<view>
		<view class="information_display">
			<unicloud-db v-slot:default="{data,loading,error,options}" collection="consult">
				<view v-if="error">{{error.message}}</view>
				<view v-else>
					<uni-list>
						<uni-list-item v-for="item in data.filter((item) => item.appt_state === 0)" :where=" `item.appt_state = 0`" :key="item._id" direction="column">
							<template v-slot:body>
								<view>
									<uni-section title="咨询信息" type="line"></uni-section>
									<text class="word">咨询价格：{{item.appt_cost}} 元\n</text>
									<text class="word">咨询主题：{{appt_theme[item.appt_label].text}}\n</text>
									<text class="word">咨询日期：{{item.appt_date}}\n</text>
									<text class="word">预计时长：{{item.appt_duration}} min \n</text>
									<text class="word">预约时段：</text>
									<text class="time" v-for="time in item.appt_time1">{{time}}:00 </text>
								</view>
								<view class="button_display" >
									<button  size="mini" style="background-color: #007aff; color: #fff;" @click="open(),getlen(item.appt_time1),informationupdate(item)">
										<text>同意</text>
									</button>
									<button  size="mini" style="background-color: #007aff; color: #fff;">
										<text>拒绝</text>
									</button>
								</view>
							</template>
						</uni-list-item>
					</uni-list>
					
					<uni-popup ref="popup" :mask-click="false" type="center" background-color="#fff">
						<view class="pick_time">
							<uni-card margin="1px">
								<uni-section title="选择咨询时间(单选)" type="line"></uni-section>
								<view>
									<picker @change="selecttime" :value="picktime" :range="Timespick">
										<view>{{Timespick[picktime]}}</view>
									</picker>
								</view>
								<view class="button_display2">
									<button size="mini" style="background-color: #007aff; color: #fff;" @click="y_consult">确认</button>
									<button size="mini" style="background-color: #007aff; color: #fff;" @click="close">取消</button>
								</view>
							</uni-card>
						</view>
					</uni-popup>
					
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
				picktime:0,
				len:1,
				Timespick:[
				"请选择咨询时间",
				"第一时间段",
				"第二时间段",
				"第三时间段"
				],
			};
		},	
		onLoad({item}) {
			this.item = JSON.parse(item)
		 },
		methods: {
			open(){
			    this.$refs.popup.open('center')
	        },
			close() {
				this.$refs.popup.close()
			},
			getlen(times){
				this.len=Object.keys(times).length
			},
			selecttime: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
		        this.picktime = e.detail.value
	        },
			y_consult(){
				if (this.picktime==0) {
					uni.showToast({
						title: '请选择咨询时间',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if(this.picktime > this.len){
					uni.showToast({
						title: '该时间段无效',
						icon: 'none',
						duration: 2000
					});	
					return;
				}
				uni.showToast({
					title: '预约成功',
					icon: 'none',
					duration: 2000
				});
				this.close()
			}
		}
		
	}
</script>

<style lang="scss">
	@mixin flex {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
		}
	
	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}
	.word{
		padding-left: 40rpx;
		font-size: 10px;
		font-weight: 600;
	}
	.time{
		padding-left: 5rpx;
		font-size: 10px;
		font-weight: 600;
	}
	.button_display{
		padding-left: 220rpx;
		padding-top: 5px;
		display: flex;
	}
	.button_display2{
		padding-top: 10px;
		padding-left: 8px;
		padding-bottom: 15px;
		display: flex;
	}
	.information_display{
		padding: 5px;
	}
	.pick_time{
		padding: 1px;
		background-color: #ffffff;
		
	}
</style>
