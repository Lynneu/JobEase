<template>
	<view>
		<view class="lec_body">
			<view class="word">
					<uni-section title="导师姓名:" type="line"></uni-section>

					<uni-section title="咨询主题:" class="label" type="line" >
						<view class="ceshi">
							<picker @change="bindPickerChange" :value="index" :range="array" range-key="name" class="pick">
								<view class="uni-input">{{array[index].name}}</view>
							</picker>
							<text class="text_tip">
								(点击选择)
							</text>
						</view>		
					</uni-section>
					<uni-section title="咨询价格:" class="label" type="line" ></uni-section>
					<uni-section :title="'预约时长 : '+ last_numberValue+'分钟'" type="line" padding class="appt_time">
						<uni-number-box :step="10" max="120" min="10" :value="last_numberValue" @change="change3" />
					</uni-section>
					<uni-section :title="'预约日期:'" type="line"></uni-section>
					<view class="example-body">
						<uni-datetime-picker type="date" :start="start" :end="end" @maskClick="maskClick" />
					</view>
					<uni-section :title="'开始时间:'" type="line" subTitle="可接受的咨询时间(多选)">
						<view class="uni-px-5 uni-pb-5">
							<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="Times"></uni-data-checkbox>
						</view>
					</uni-section>
						
					<uni-section :title="'支付价格:'" type="line"></uni-section>
					<text>\n</text>
			</view>
			
			<view class="confirm">
				<text>\n</text>
				<button size="mini" type="primary">
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
				array: [{name:'互联网IT'},{name:'通信/硬件'},{name:'设计/传媒'},{name:'人事行政'},{name:'金融/法务'},{name:'生产制造'},{name:'教育培训'},{name:'生物医疗'},{name:'服务业'},{name:'房产/建筑'},{name:'其他'}],
				index: 0,
				numberValue: 0,
				last_numberValue: 10,
				datetsingle:'',
				start:Date.now(),
				end:Date.now()+14 * 24 * 3600000,
				checkbox3: [],
				Times: [{
					text: '08:00',
					value: 0,
				}, {
					text: '09:00',
					value: 1,
				}, {
					text: '10:00',
					value: 2
				},{
					text: '11:00',
					value: 3
				}, {
					text: '12:00',
					value: 4
				},{
					text: '13:00',
					value: 5
				},{
					text: '14:00',
					value: 6
				},{
					text: '15:00',
					value: 7
				}, {
					text: '16:00',
					value: 8
				},{
					text: '17:00',
					value: 9
				},{
					text: '18:00',
					value: 10
				}, {
					text: '19:00',
					value: 11
				},{
					text: '20:00',
					value: 12
				},{
					text: '21:00',
					value: 13
				}, {
					text: '22:00',
					value: 14
				},{
					text: '23:00',
					value: 15
				}],
				
			};
		},
		watch: {
					datesingle(newval) {
						console.log('单选:', this.datetimesingle);
					},

				},
		methods:{
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value);
				this.index = e.detail.value;
			},
			maskClick(e){
							console.log('maskClick事件:', e);
			},
			change3(value) {
				this.last_numberValue = value;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.lec_body{
		padding-left: 2%;
		padding-right: 2%;
		padding-bottom: 10%;
		
	}
	.word{
		padding-left: 3%;
		padding-right: 3%;
		padding-top: 3%;
	}
	.confirm{
		padding-left: 55%;
		font-weight: 600;
	}
	.ceshi{
		padding-top: 2px;
		display: flex;
	}
	.label{
		display: flex;
	}
	.pick{
		width: 100px;
		height:50rpx;
	}
	.uni-input{
		display: flex
	}
	.appt_time{
		display: flex;
	}
	.text_tip{
		padding-top: 7px;
		font-size: 10px;
		color: #c0c0c0;
	}
	.example-body {
		background-color: #fff;
		padding-left: 8%;
		padding-right: 8%;
		padding-bottom: 10px;
	}
	.uni-px-5 {
	    padding-left: 15px;
	    padding-right: 5px;
	}
	.uni-pb-5 {
	    padding-bottom: 10px;
	}
	.box_text {
		padding-left: 40px;
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}
</style>
