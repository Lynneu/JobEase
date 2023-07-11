<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">未完成</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">已完成</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">已评价</view>
                </view>
					<view class="" v-show="Inv == 0" v-if="isRefresh">
						<view v-for="(item, index) in final_data.filter((item) => item.lecture_state === 0)" @click="detail(item)">
							<uni-card style="align-content: center;">
								<view class="uni-flex uni-row">
									<view class="normal title">{{item.lecture_title}}</view>
									<view class="status-red">{{appt_ste[item.lecture_state].text}}</view>
								</view>
								<view>咨询价格：{{item.lecture_price}}元</view>
								<view>支付情况：已付款</view>
								<view>预计时间：{{item.lecture_duration}}分钟</view>
								<view>预约时间：{{item.lecture_time}}</view>
							<view class="uni-flex uni-row">
								<view class="normal title"></view>
								<button style="background-color:#007AFF; color: #fff; font-size: 30rpx; line-height: 50rpx; padding: 10rpx; height: 70rpx;" @click="goFinish(item._id)">确定已完成</button>
							</view>
							</uni-card>
						</view>
					</view>
					<view class="" v-show="Inv == 1" v-if="isRefresh">
						<view v-for="(item, index) in final_data.filter((item) => item.lecture_state === 1)" @click="detail(item)">
							<uni-card style="align-content: center;">
								<view class="uni-flex uni-row">
									<view class="normal title">{{item.lecture_title}}</view>
									<view class="status-green">{{appt_ste[item.lecture_state].text}}</view>
								</view>
								<view>咨询价格：{{item.lecture_price}}元</view>
								<view>支付情况：已付款</view>
								<view>预计时间：{{item.lecture_duration}}分钟</view>
								<view>预约时间：{{item.lecture_time}}</view>
								<view class="uni-flex uni-row" v-if="isStudent">
									<view class="normal title"></view>
									<button  style="background-color:#007AFF; color: #fff; font-size: 30rpx; line-height: 50rpx; padding: 10rpx; height: 70rpx;" @click="goEvaluate(item._id)">去评价</button>
								</view>
							</uni-card>
						</view>
					</view>
					<view class="" v-show="Inv == 2" v-if="isRefresh">
						<view v-for="(item, index) in final_data.filter((item) => item.lecture_state === 2)" @click="detail(item)">
							<uni-card style="align-content: center;">
								<view class="uni-flex uni-row">
									<view class="normal title">{{item.lecture_title}}</view>
									<view class="status-green">{{appt_ste[item.lecture_state].text}}</view>
								</view>
								<view>咨询价格：{{item.lecture_price}}元</view>
								<view>支付情况：已付款</view>
								<view>预计时间：{{item.lecture_duration}}分钟</view>
								<view>预约时间：{{item.lecture_time}}</view>
							</uni-card>
						</view>
					</view>
				<!-- </unicloud-db> -->
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
	const db = uniCloud.database()
import { nextTick } from "vue"
        export default {
                data() {
                        return {
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
                                Inv:0,
								
						
							colList: [
							  db.collection('lecture').where({
									phone: this.ph
								}).getTemp(),
							  db.collection('appt_lecture').getTemp()
							],
							
							final_data:[
								
							],
							isRefresh: true,
							isStudent: true
								
                        }
                },
				onLoad() {
						this.ph = getApp().globalData.ph
						if(getApp().globalData.st == 0)
						{
							this.st = true
							this.isStudent = true;
							this.sWhere = "phone=='" + this.ph + "'"
						}else{
							this.st = false
							//this.isStudent = false;
							console.log("1233333")
							this.sWhere = "lecture.phone=='" + this.ph + "' && appt_lecture.lecture_id == lecture._id"
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
									}
								)
								.get()
								.then( res => {
									var mydata = res.result.data
									console.log(mydata)
									
									var myselfdata = []
									for(var i = 0; i< mydata.length; i++){
										var ss = mydata[i]
										
										var testdata = {}
										testdata._id = ss._id
										testdata.st_phone = ss.phone
										testdata.lecture_state = ss.lecture_state
										
										
										var lectures = ss.lecture_id
										for(var j = 0 ; j< lectures.length; j++){
											var lectnow = lectures[j]
											
											testdata.lecture_id = lectnow._id
											testdata.te_phone = lectnow.phone
											testdata.lecture_title = lectnow.lecture_title
											testdata.lecture_time = lectnow.lecture_time
											testdata.lecture_reserved = lectnow.lecture_reserved
											testdata.lecture_price = lectnow.lecture_price
											testdata.lecture_number = lectnow.lecture_number
											testdata.lecture_limit = lectnow.lecture_limit
											testdata.lecture_label = lectnow.lecture_label
											testdata.lecture_duration = lectnow.lecture_duration
											testdata.lecture_content = lectnow.lecture_content
											
											myselfdata.push(testdata)
										}
										console.log(myselfdata)
										
									}
									this.final_data = myselfdata
									console.log(this.final_data)
																	
								}).catch( err => {
									console.log("xxxx" + err)
								})
							}else{
								const db = uniCloud.database();
								db.collection('lecture,appt_lecture')
								.foreignKey('appt_lecture.lecture_id')
								.where({
									phone: this.ph,
									}
								)
								.get()
								.then(res=>{
									var mydata = res.result.data
									console.log(mydata)
									
									var myselfdata = []
									for(var i = 0; i< mydata.length; i++){
										var lectnow = mydata[i]
										var testdata = {}
										testdata.lecture_id = lectnow._id._value
										testdata.te_phone = lectnow.phone
										testdata.lecture_title = lectnow.lecture_title
										testdata.lecture_time = lectnow.lecture_time
										testdata.lecture_reserved = lectnow.lecture_reserved
										testdata.lecture_price = lectnow.lecture_price
										testdata.lecture_number = lectnow.lecture_number
										testdata.lecture_limit = lectnow.lecture_limit
										testdata.lecture_label = lectnow.lecture_label
										testdata.lecture_duration = lectnow.lecture_duration
										testdata.lecture_content = lectnow.lecture_content
										
										var lectures = lectnow._id.appt_lecture
										for(var j = 0 ; j< lectures.length; j++){
											var ss = lectures[j]
											testdata._id = ss._id
											testdata.st_phone = ss.phone
											testdata.lecture_state = ss.lecture_state
											
											myselfdata.push(testdata)
										}
									
										console.log("123333")
										console.log(myselfdata)
									}
									this.final_data = myselfdata
									console.log(this.final_data)
								}).catch( err => {
									console.log("xxxx" + err)
								})
								
								console.log("123")
								console.log(this.colList)
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
											this.getMsg()
											this.updateDate(1)
										})
										.catch((err) => {
											console.error("Error updating data:", err);
											
										});
							
							uni.showToast({
								title: '确认成功',
								icon: 'none',
								success() {
									this.update()
								}
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
											this.getMsg()
											this.updateDate(1)
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