<template>
	<view>
		<view class="appt_content">
			
			<uni-section :title="'导师姓名：'+user_detail.username" type="line"></uni-section>
			
			<uni-section title="咨询主题:" class="label" type="line"></uni-section>
			<view class="appt_theme">
				<uni-data-select 
				v-model="consult.appt_label" 
				:localdata="appt_theme" 
				:clear="false" 
				@change="apptpick_theme()">
				</uni-data-select>
			</view>
			
			<uni-section :title="'咨询价格：'+user_detail.price+'元/30min'" type="line"></uni-section>
			
			<view class="appt_duration">
				<view>
					<uni-section :title="'预约时长 : '+consult.appt_duration+'分钟'" type="line"></uni-section>
				</view>
				<view>
					<uni-number-box :step=30 :max=120 :min=0 :value="consult.appt_duration" @change="duration_change" background="#2979FF" color="#fff" />
				</view>
				<view class="extra"></view>
				
			</view>
			
			
			<uni-section :title="'预约日期:'" type="line"></uni-section>
			<view class="appt_date">
				<uni-datetime-picker v-model="consult.appt_date" type="date" :start="start" :clear-icon="false" :end="end" @maskClick="date_change" />
			</view>
			
			<uni-section :title="'开始时间:'" type="line" subTitle="可接受的咨询时间(多选)">
				<view class="uni-px-5 uni-pb-5">
					<uni-data-checkbox :max=3 mode="tag" multiple v-model="consult.appt_time1" :localdata="Times"></uni-data-checkbox>
				</view>
			</uni-section>
				
			<uni-section :title="'支付价格：'+consult.appt_cost+' 元'" type="line"></uni-section>
			<text>\n</text>
			
			<view class="confirm">
				<text>\n</text>
				<button size="mini" style="background-color: #007aff; color: #fff;" @click="appointAndpay">
					<text>预约并支付</text>
				</button>
			</view>
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
				
				start:Date.now(),
				end:Date.now()+14 * 24 * 3600000,
				gethours: new Date().getHours()+1,
				
				Times: [
					{text: '08:00', value: 8}, 
					{text: '09:00', value: 9},
					{text: '10:00', value: 10},
					{text: '11:00', value: 11},
					{text: '12:00', value: 12},
					{text: '13:00', value: 13},
					{text: '14:00', value: 14},
					{text: '15:00', value: 15},
					{text: '16:00', value: 16},
					{text: '17:00', value: 17},
					{text: '18:00', value: 18},
					{text: '19:00', value: 19},
					{text: '20:00', value: 20},
					{text: '21:00', value: 21},
					{text: '22:00', value: 22},
					{text: '23:00', value: 23}
					],
				user_detail:{
					"username":"",
					"phone":"12345678911",
					"price":""
				},
				consult:{
					"teach_tele": "12345678911",
					"stud_tele": "12345678910",
					"appt_label": 0,
					"appt_price": 30,
					"appt_duration": 0,
					"appt_date": Date.now(),
					"appt_time1": [],
					"appt_time2": 23,
					"appt_cost": 0,
					"appt_state": 0
				}
			};
		},
		onLoad() {
			const db = uniCloud.database()
			 db.collection('user_detail').where({
			   phone: this.user_detail.phone
			 }).limit(1).get().then(res => {
			   if (res.result && res.result.data && res.result.data.length > 0) {
			     this.user_detail = res.result.data[0]
			   } else {
			     console.error('No data found.')
			   }
			 }).catch(err => {
			   console.error('Error retrieving data:', err)
			 })
		 },
		methods:{
			apptpick_theme(e) {
				console.log(e)
			},
			date_change(e){
				console.log('maskClick事件:', e);
			},
			duration_change(value) {
				this.consult.appt_duration = value;
				this.consult.appt_cost=value * this.consult.appt_duration / 30;
			},
			checktime(pick) {
				return pick >= this.gethours;
			},
			appointAndpay() {
				if (this.consult.appt_duration==0) {
					uni.showToast({
						title: '预约时长需大于零',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (Object.keys(this.consult.appt_time1).length==0) {
					uni.showToast({
						title: '请选择开始时间',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if(this.consult.appt_date <= Date.now()){
					if (this.consult.appt_time1.slice(0,1)  < this.gethours) {
						uni.showToast({
							title: '请选择正确时间',
							icon: 'none',
							duration: 2000
						});
					}	
					return;
				}
				
				const db = uniCloud.database();
				db.collection("consult").add(this.consult).then(e=>{
					console.log(e)
				})				
						
				uni.showToast({
					title: '预约成功',
					icon: 'none',
					duration: 2000
				});
				uni.switchTab({
				  url: '../find_teacher/find_teacher'
				});
			}
		},
		onLoad() {
		}
		
	}
</script>

<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.appt_content{
		padding-left: 3%;
		padding-right: 2%;
		padding-bottom: 10%;
		
	}
	.appt_theme{
		padding-left: 22px;
		padding-right: 22px;
	}
	.appt_duration{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.appt_date {
		background-color: #fff;
		padding-left: 8%;
		padding-right: 8%;
		padding-bottom: 10px;
	}
	.uni-px-5 {
	    padding-left: 20px;
	    padding-right: 10px;
	}
	.uni-pb-5 {
	    padding-bottom: 10px;
	}
	.confirm{
		padding-left: 60%;
	}
	.extra{
		width: 2%;
	}

</style>
