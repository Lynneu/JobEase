<template>
	<view class="mainbody">
		<uni-section :title="'咨询主题：'+appt_theme[item.appt_label].text" type="line"></uni-section>
		<uni-section :title="'咨询日期：'+item.appt_date" type="line"></uni-section>
		<uni-section :title="'咨询时长：'+item.appt_duration+' 小时'" type="line"></uni-section>
		<uni-section :title="'咨询价格：'+item.appt_cost+' 元'" type="line"></uni-section>
		<uni-section :title="'老师电话：'+item.teach_tele" type="line"></uni-section>
		<uni-section :title="'学生电话：'+item.stud_tele" type="line"></uni-section>
		<uni-section :title="'完成状态：'+appt_ste[item.appt_state].text" type="line"></uni-section>
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
				len:1,
				pick:0,
				agree_consult:1,
				refuse_consult:2,
				timepick:[
					{value:0, text:'时间段①'},
					{value:1, text:'时间段②'},
					{value:2, text:'时间段③'},
				],
				item:{
					"_id":"",
					"appt_cost":"",
					"appt_label":0,
					"appt_date":"",
					"appt_duration":"",
					"appt_state":"",
					"appt_time1":"",
					"appt_time2":"",
				}
			};
		},
		onLoad({item}) {
			this.item=JSON.parse(item)
		},
		methods:{
			getlen(times){
				this.len=Object.keys(times).length
			},
			apptpick_theme(e) {
				console.log('xuanze')
				this.item.appt_time2=this.item.appt_time1[this.pick];
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.mainbody{
		padding: 10px;
	}
	.appt_theme{
		padding-top: 10px;
		padding-left: 22px;
		padding-right: 22px;
	}
	.time{
		padding-left: 10%;
		font-size: 14px;
	}
	.confirm{
		padding-top: 80px;
		padding-left: 8px;
		padding-bottom: 15px;
		display: flex;
	}
</style>
