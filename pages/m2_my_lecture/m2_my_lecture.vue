<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">未完成</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">已完成</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">已评价</view>
                </view>
				<view v-if="showFake">
					<view class="" v-show="Inv == 0">
					        <uni-card style="align-content: center;">
					        	<view class="uni-flex uni-row">
					        		<view class="normal title">行业前景</view>
					        		<view class="status-green">已成功预约</view>
					        	</view>
					        	<view>讲座价格：100元</view>
					        	<view>支付情况：已付款</view>
					        	<view>预计时间：2小时</view>
					        	<view>预约时间：2023年6月20日</view>
					        </uni-card>
							<uni-card style="align-content: center;">
								<view class="uni-flex uni-row">
									<view class="normal title">职业生涯一站规划</view>
									<view class="status-red">已取消</view>
								</view>
								<view>讲座价格：100元</view>
								<view>支付情况：超期未支付</view>
								<view>预计时间：2小时</view>
								<view>预约时间：2023年6月20日</view>
							</uni-card>
					</view>
					<view class="" v-show="Inv == 1">
					        <uni-card style="align-content: center;">
					        	<view class="uni-flex uni-row">
					        		<view class="normal title">职业生涯一站规划</view>
					        		<view class="status-green">已完成，待评价</view>
					        	</view>
					        	<view>讲座价格：40元</view>
					        	<view>支付情况：已付款</view>
					        	<view>预计时间：2小时</view>
					        	<view>预约时间：2023年6月20日</view>
					        </uni-card>
					</view>
					<view class="" v-show="Inv == 2">
					        <uni-card style="align-content: center;">
					        	<view class="uni-flex uni-row">
					        		<view class="normal title">讲座测试</view>
					        		<view class="status-green">已完成，待评价</view>
					        	</view>
					        	<view>讲座价格：15元</view>
					        	<view>支付情况：已付款</view>
					        	<view>预计时间：2小时</view>
					        	<view>预约时间：2023年6月20日</view>
					        </uni-card>
					</view>
				</view>
				<unicloud-db v-slot:default="{data, loading, error, options}"
				collection="appt_lecture,lecture" 
				foreign-key="appt_lecture.lecture_id" 
				:where="sWhere">
					<view class="" v-show="Inv == 0">
							<view v-if="error">{{error.message}}</view>
							<view v-else>
								<uni-list style="">
									<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.lecture_state === 0)" :key="item._id" direction="column" @click="detail(item)">
										<template v-slot:body>
												<uni-card style="align-content: center;">
													<view class="uni-flex uni-row">
														<view class="normal title">{{item.lecture_id[0].lecture_title}}</view>
														<view class="status-red">{{appt_ste[item.lecture_state].text}}</view>
													</view>
													<view>咨询价格：{{item.lecture_id[0].lecture_price}}元</view>
													<view>支付情况：已付款</view>
													<view>预计时间：{{item.lecture_id[0].lecture_duration}}分钟</view>
													<view>预约时间：{{item.lecture_id[0].lecture_time}}</view>
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
								<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.lecture_state === 1)" :key="item._id" direction="column" @click="detail(item)">
									<template v-slot:body>
											<uni-card style="align-content: center;">
												<view class="uni-flex uni-row">
													<view class="normal title">{{item.lecture_id[0].lecture_title}}</view>
													<view class="status-green">{{appt_ste[item.lecture_state].text}}</view>
												</view>
												<view>咨询价格：{{item.lecture_id[0].lecture_price}}元</view>
												<view>支付情况：已付款</view>
												<view>预计时间：{{item.lecture_id[0].lecture_duration}}分钟</view>
												<view>预约时间：{{item.lecture_id[0].lecture_time}}</view>
												<view class="uni-flex uni-row">
													<view class="normal title"></view>
													<button style="background-color:#007AFF; color: #fff; font-size: 30rpx; line-height: 50rpx; padding: 10rpx; height: 70rpx;" @click="goEvaluate(item._id)">去评价</button>
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
								<uni-list-item style="border: 0rpx;" v-for="item in data.filter((item) => item.lecture_state === 2)" :key="item._id" direction="column" @click="detail(item)">
									<template v-slot:body>
											<uni-card style="align-content: center;">
												<view class="uni-flex uni-row">
													<view class="normal title">{{item.lecture_id[0].lecture_title}}</view>
													<view class="status-green">{{appt_ste[item.lecture_state].text}}</view>
												</view>
												<view>咨询价格：{{item.lecture_id[0].lecture_price}}元</view>
												<view>支付情况：已付款</view>
												<view>预计时间：{{item.lecture_id[0].lecture_duration}}分钟</view>
												<view>预约时间：{{item.lecture_id[0].lecture_time}}</view>
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
import { nextTick } from "vue"
        export default {
                data() {
                        return {
							showFake:false,
							lecture_list: [
							    { value: 0, text: '前端开发' },
							    { value: 1, text: '后端开发' },
							    { value: 2, text: 'C++开发' },
							    { value: 3, text: 'Java开发' },
							    { value: 4, text: '算法' },
							    { value: 5, text: '测试开发' },
							    { value: 6, text: '产品经理' },
							    { value: 7, text: '运营' },
							    { value: 8, text: 'HR' },
								{ value: 9, text: '简历优化' },
								{ value: 10, text: '面试经验' },
								{ value: 11, text: '就业指导' },
								{ value: 12, text: '职业规划' },
								{ value: 13, text: '薪资谈判' },
							    { value: 14, text: '其他' }
							],
							appt_ste:[
								{ value: 0, text: '未完成' },
								{ value: 1, text: '已完成' },
								{ value: 2, text: '已评价' }
							],
                                Inv:0
								
                        }
                },
				onLoad() {
						this.ph = getApp().globalData.ph
						if(getApp().globalData.st == 0)
						{
							this.st = true
							this.sWhere = "phone=='" + this.ph + "'"
						}else{
							this.st = false
							this.sWhere = "lecture.phone=='" + this.ph + "' && appt_lecture.lecture_id == lecture._id"
						}
						this.getMsg()
				},
                methods: {
						detail(item){
							uni.navigateTo({
								url:'../m2_my_lecture/detail/m2_lecture_detail?item='+JSON.stringify(item),
								success: res => {},
								fail: () =>{},
								complete: () => {}
							});
						},
                        changeTab(Inv){
                                that.navIdx = Inv;
                                 
                        },
						getMsg(){
							if(true){
								const db = uniCloud.database();
								db.collection('appt_lecture,lecture')
								.foreignKey('appt_lecture.lecture_id')
								.where({
									phone: this.ph,
									lecture_state: 2
									// phone: {
									// 	$eq: this.ph
									// },
									// lecture_state: {
									// 	$eq: '3'
									// }
									}
								)
								.field('lecture_state,lecture_id')
								.get()
								.then( res => {
									console.log(res)
									if(this.st){
										this.showFake = false;
									}else{
										this.showFake = true;
									}
									
									
								}).catch( err => {
									console.log("xxxx" + err)
								})
							}
						},
						goFinish(id){
							this.id = id
							const db = uniCloud.database();
							db.collection("appt_lecture")
							.doc(this.id)
							.update({
								lecture_state: 1
							}).then((res) => {
											console.log("xxx")
											console.log(res)
										})
										.catch((err) => {
											console.error("Error updating data:", err);
											
										});
							
							uni.showToast({
								title: '确认成功',
								icon: 'none',
							})
							event.stopPropagation()
						},
						goEvaluate(id){
							this.id = id
							this.$refs.popup.open('center')
							event.stopPropagation()
						},
						onChange(e) {
							console.log(this.id)
							const db = uniCloud.database();
							db.collection("appt_lecture")
							.doc(this.id)
							.update({
								lecture_state: 2
							}).then((res) => {
											console.log("xxx")
											console.log(res)
										})
										.catch((err) => {
											console.error("Error updating data:", err);
										});
							
							uni.showToast({
								title: '感谢您的评分🙏：' + e["value"] + '分',
								icon: 'none',
							})
							this.$refs.popup.close()
						}
                }
        }
</script>
         
<style>
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