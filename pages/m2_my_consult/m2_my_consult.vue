<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">未完成</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">已完成</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">已评价</view>
                </view>
				<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="consult" :where="sWhere" v-if="isRefresh">
					<view class="" v-show="Inv == 0">
						<view v-if="error">{{error.message}}</view>
						<view v-else>
							<uni-list style="">
								<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.appt_state === 0 || item.appt_state===1)" :key="item._id" direction="column" @click="detail(item)">
									<template v-slot:body>
												<uni-card style="align-content: center;">
													<view class="uni-flex uni-row">
														<view class="normal title">{{appt_theme[item.appt_label].text}}</view>
														<view class="status-red">{{appt_ste[item.appt_state].text}}</view>
													</view>
													<view>咨询价格：{{item.appt_cost}}元</view>
													<view>支付情况：已付款</view>
													<view>预计时间：{{item.appt_duration}}分钟</view>
													<view>预约时间：{{item.appt_date}}</view>
												<view class="uni-flex uni-row">
													<view class="normal title"></view>
													<button style="background-color:#007AFF; color: #fff; font-size: 30rpx; line-height: 50rpx; padding: 10rpx; height: 70rpx;" @click="goFinish(item._id)">确定已完成</button>
												</view>
												</uni-card>
									</template>
								</uni-list-item>
							</uni-list>
						</view>
					</view>
				

					<view class="" v-show="Inv == 1">
                        	<view v-if="error">{{error.message}}</view>
                        	<view v-else>
                        		<uni-list style="">
                        			<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.appt_state === 2)" :key="item._id" direction="column" @click="detail(item)">
                        				<template v-slot:body>
                        					
                        							<uni-card style="align-content: center;">
                        								<view class="uni-flex uni-row">
                        									<view class="normal title">{{appt_theme[item.appt_label].text}}</view>
                        									<view class="status-green">{{appt_ste[item.appt_state].text}}</view>
                        								</view>
                        								<view>咨询价格：{{item.appt_cost}}元</view>
                        								<view>支付情况：已付款</view>
                        								<view>预计时间：{{item.appt_duration}}分钟</view>
                        								<view>预约时间：{{item.appt_date}}</view>
														<view class="uni-flex uni-row" v-if="isStudent">
															<view class="normal title"></view>
															<button style="background-color:#007AFF; color: #fff; font-size: 30rpx; line-height: 50rpx; padding: 10rpx; height: 70rpx;" @click="goEvaluate(item._id,item.teach_tele)">去评价</button>
														</view>
                        							</uni-card>
                        				</template>
                        			</uni-list-item>
                        		</uni-list>
                        	</view>
					</view>
				
					<view class="" v-show="Inv == 2">
				        	<view v-if="error">{{error.message}}</view>
				        	<view v-else>
				        		<uni-list style="">
				        			<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.appt_state === 3)" :key="item._id" direction="column" @click="detail(item)">
				        				<template v-slot:body>
				        					
				        							<uni-card style="align-content: center;">
				        								<view class="uni-flex uni-row">
				        									<view class="normal title">{{appt_theme[item.appt_label].text}}</view>
				        									<view class="status-green">{{appt_ste[item.appt_state].text}}</view>
				        								</view>
				        								<view>咨询价格：{{item.appt_cost}}元</view>
				        								<view>支付情况：已付款</view>
				        								<view>预计时间：{{item.appt_duration}}分钟</view>
				        								<view>预约时间：{{item.appt_date}}</view>
				        							</uni-card>
				        				</template>
				        			</uni-list-item>
				        		</uni-list>
				        	</view>
					</view>
				</unicloud-db>
				<uni-popup ref="popup" :mask-click="true">
					<uni-card style="align-items: center; text-align: center;">
						<view>点击评价😊</view>
						<view>
							<uni-rate @change="onChange" />
						</view>
					</uni-card>
					
				</uni-popup>
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
							appt_ste:[
								{ value: 0, text: '待审核' },
								{ value: 1, text: '未完成' },
								{ value: 2, text: '已完成' },
								{ value: 3, text: '已评价' },
								{ value: 4, text: '已取消' },
								{ value: 5, text: '其他' }
							],
                                Inv:0,
								isRefresh: true,
								isStudent: true
                        }
						
                },
				onLoad() {
					this.st = getApp().globalData.ph
					if(getApp().globalData.st == 0)
					{
						this.student = true
						this.isStudent = true
						this.sWhere = "stud_tele=='" + this.st + "'"
					}else{
						this.student = false
						this.isStudent = false
						this.sWhere = "teach_tele=='" + this.st + "'"
					}
					this.getMsg()
				},
                methods: {
					updateDate(t){
						this.isRefresh = false;
						this.$nextTick(()=>{
							this.isRefresh = true;
						})
					},
						getMsg(){
							if(true){
								const db = uniCloud.database();
								db.collection("consult")
								.limit(1)
								.get()
								.then(res => {
												
								})
								.catch(err => {
									
								})
							}
							
						},
						detail(item){
							uni.navigateTo({
								url:'../m2_my_consult/detail/m2_consult_detail?item='+JSON.stringify(item),
								success: res => {},
								fail: () =>{},
								complete: () => {}
							});
						},
						goFinish(id){
							this.id = id
							const db = uniCloud.database();
							db.collection("consult")
							.doc(this.id)
							.update({
								appt_state: 2
							}).then(res=>{
								this.updateDate(1)
							});
							uni.showToast({
								title: '确认成功',
								icon: 'none',
							})
							event.stopPropagation()
						},
						goEvaluate(id,ph){
							this.id = id
							this.evaluatePh = ph
							this.$refs.popup.open('center')
							event.stopPropagation()
						},
                        changeTab(Inv){
                                that.navIdx = Inv;
                        },
						onChange(e) {
							console.log('rate发生改变:' + e["value"])
							console.log('xx' + this.evaluatePh)
							const db = uniCloud.database();
							db.collection("consult")
							.doc(this.id)
							.update({
								appt_state: 3
							});
							
							
							db.collection("user_detail").where({
									phone: {
									  $eq: this.st
									}
								})
								.get()
								.then(res => {
									if (res.result.data.length > 0) {
										db.collection("user_detail")
										.doc(res.result.data[0]._id)
										.update({
											score: e["value"]
										})
										.then((res) => {
											this.updateDate(1)
										})
										.catch((err) => {
											console.error("Error updating data:", err);
										});
									}
								})
								.catch(err => {
									console.log(err)
								})
							
							
							uni.showToast({
								title: '感谢您的评分🙏：' + e["value"] + '分',
								icon: 'none',
							})
							this.$refs.popup.close()
						},
                }
        }
</script>
         
<style lang="scss">
        .inv-h-w{background-color: #FFFFFF;height: 100upx;display: flex;}
        .inv-h{font-size: 30upx;flex: 1;text-align: center;color: #C9C9C9;height: 100upx;line-height: 100upx;}
        .inv-h-se{color: #5BA7FF;border-bottom: 4upx solid #5BA7FF;}
        page{background-color: #F2F2F2;}
		
body{
	color: white;
}
		.normal {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			overflow: hidden;
			height: 100rpx;
		}
		.title {
			font-size: 40rpx;
		}
		.status-red{
			display: flex;
			align-items: center;
			font-size: 25rpx;
			color: red;
		}
		.status-green{
			display: flex;
			align-items: center;
			font-size: 25rpx;
			color: greenyellow;
		}

</style>