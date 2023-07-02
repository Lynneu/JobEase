<template>
	<view>
		<view class="appt_content">
			
			<uni-section :title="'导师姓名：'+teacher_name" type="line"></uni-section>
			
			<uni-section title="咨询主题:" class="label" type="line"></uni-section>
			<view class="appt_theme">
				<uni-data-select 
				v-model="index1" 
				:localdata="appt_theme" 
				:clear="false" 
				@change="apptpick_theme()">
				</uni-data-select>
			</view>
			
			<uni-section :title="'咨询价格：'+appt_cost+'元/30min'" type="line"></uni-section>
			
			<view class="appt_duration">
				<view>
					<uni-section :title="'预约时长 : '+ last_duration+'分钟'" type="line"></uni-section>
				</view>
				<view>
					<uni-number-box :step=10 :max=120 :min=10 :value="last_duration" @change="duration_change" background="#2979FF" color="#fff" />
				</view>
				<view class="extra"></view>
				
			</view>
			
			
			<uni-section :title="'预约日期:'" type="line"></uni-section>
			<view class="appt_date">
				<uni-datetime-picker type="date" :start="start" :end="end" @maskClick="date_change" />
			</view>
			
			<uni-section :title="'开始时间:'" type="line" subTitle="可接受的咨询时间(多选)">
				<view class="uni-px-5 uni-pb-5">
					<uni-data-checkbox mode="tag" multiple v-model="apptpick_time" :localdata="Times"></uni-data-checkbox>
				</view>
			</uni-section>
				
			<uni-section :title="'支付价格：'+apply_cost+' 元'" type="line"></uni-section>
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
				teacher_name:'pp',
				
				index1: 0,
				appt_theme:[
					{ value: 0, text: '请选择咨询主题' },
					{ value: 1, text: '简历优化' },
					{ value: 2, text: '面试经验' },
					{ value: 3, text: '就业指导' },
					{ value: 4, text: '职业规划' },
					{ value: 5, text: '薪资谈判' },
					{ value: 6, text: '其他' }
				],
				
				appt_cost:'20',
				apply_cost:'120',
				index: 0,
				last_duration: 10,
				
				start:Date.now(),
				end:Date.now()+14 * 24 * 3600000,
				
				apptpick_time: [],
				Times: [
					{text: '08:00', value: 0}, 
					{text: '09:00', value: 1},
					{text: '10:00', value: 2},
					{text: '11:00', value: 3},
					{text: '12:00', value: 4},
					{text: '13:00', value: 5},
					{text: '14:00', value: 6},
					{text: '15:00', value: 7},
					{text: '16:00', value: 8},
					{text: '17:00', value: 9},
					{text: '18:00', value: 10},
					{text: '19:00', value: 11},
					{text: '20:00', value: 12},
					{text: '21:00', value: 13},
					{text: '22:00', value: 14},
					{text: '23:00', value: 15}
					],

			};
		},
		
		methods:{
			apptpick_theme(e) {
				console.log(e)
			},
			date_change(e){
							console.log('maskClick事件:', e);
			},
			duration_change(value) {
				this.last_duration = value;
			},
			appointAndpay() {
				uni.switchTab({
				  url: '../find_teacher/find_teacher'
				});
			}
		},
		
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
