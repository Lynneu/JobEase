<template>
	<view class="mainbody">
		<uni-section :title="'咨询主题：'+appt_theme[item.appt_label].text" type="line"></uni-section>
		<uni-section :title="'咨询日期：'+item.appt_date" type="line"></uni-section>
		<uni-section :title="'咨询时长：'+item.appt_duration+' 小时'" type="line"></uni-section>
		<uni-section :title="'咨询价格：'+item.appt_cost+' 元'" type="line"></uni-section>
		<uni-section :title="'咨询时间：'" type="line"></uni-section>
		<text class="time" v-for="time in item.appt_time1">可选时间段：{{time}}:00 \n</text>
		
		<view class="appt_theme">
			<uni-data-select 
			v-model="pick" 
			:localdata="timepick" 
			:clear="false" 
			@change="apptpick_theme()">
			</uni-data-select>
		</view>
		<view class="confirm">
			<button size="mini" style="background-color: #007aff; color: #fff;" @click="agree(),getlen()">
				<text>同意</text>
			</button>
			<button size="mini" style="background-color: #007aff; color: #fff;" @click="refuse">
				<text>拒绝</text>
			</button>
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
			agree(){
				this.item.appt_state=this.agree_consult;
				
				if(this.pick > this.len){
					uni.showToast({
						title: '该时间段无效',
						icon: 'none',
						duration: 2000
					});	
					return;
				}
				
				const db = uniCloud.database();
				let item = {...this.item}
				delete item._id
				db.collection('consult').doc(this.item._id).update(item).then(e =>{
					console.log(e);
				});
				
				uni.showToast({
					title: '通过',
					icon: 'none',
					duration: 2000
				});
				
				uni.navigateTo({
					url:'../m3_confirm_consult'
				});
				console.log('跳转')
					
			},
			refuse(){
				
				this.item.appt_state=this.refuse_consult;
				
				const db = uniCloud.database();
				let item = {...this.item}
				delete item._id
				db.collection('consult').doc(this.item._id).update(item).then(e =>{
					console.log(e);
				});
				
				uni.showToast({
					title: '拒绝成功',
					icon: 'none',
					duration: 2000
				});

				uni.switchTab({
					url:'../index/index'
				});
				
				console.log('跳转')
				
			}
			
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
