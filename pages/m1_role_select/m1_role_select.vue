<template>
	<view class="index">
		<view class="new_box" style="margin-top: 100px;">
			<view class="bbox">
				<view class="list-box" v-for="(item,index) in list" :key="index">
					<view class="list-ed">
						<image class="list-img" src="../../static/logo.png" mode="aspectFill"></image>
						<view class="list-right">
							<view class="list-head" @click="choice(index)">
								<view :class="[item.selected?'selde':'noselde']">{{item.selected?"已选择":"选择"}}<text :class="[item.selected?'selde-q':'noselde-q']"></text></view>
							</view>
							<view class="list-name">{{item.title}}</view>
							<view class="list-da">
								<view><text>{{item.course}}</text></view>

							</view>
						</view>
					</view>
				</view>
				<view class="sure" @click="sure">确认</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testing:{
				    "phone": "000",
				    "username": "求职者11111111",
				    "isTeacher": 0,
				    "status": 0,
				    "email": "",
				    "comment": "",
				    "co": "",
				    "job_number": "",
				    "price": 0,
				    "score": 0,
				    "post": "",
				    "tip_teacher": [
				    ],
				    "tip_student": "",
				    "goal": ""
				},
				list: [{
						course_id: "1",
						title: "求职者",
						course: "可付费进行求职咨询，听讲座\n无需认证",
						selected: false
					},
					{
						course_id: "2",
						title: "导师",
						course: "可收费提供咨询，举办讲座\n首次进入需进行导师认证",
						//course:"首次进入需进行导师认证",
						selected: false
					}
				],
				selectId:[],
			};
		},
		methods: {
			onShow() {
						this.testing.phone=getApp().globalData.ph;			
					},
			choice(index){
				if(this.list[index].selected == true){
					this.list[index].selected = false;
					//取消选中时删除数组中的值
					for(var i = 0; i < this.selectId.length; i++){
					    if(this.selectId[i] === this.list[index].course_id){
					        this.selectId.splice(i,1);
					    }
					}
					console.log("选中的值",this.selectId)
				}else{
					
					for(var i = 0; i <= this.selectId.length; i++)
						this.list[i].selected=false;
					for(var i = 0; i <= this.selectId.length; i++){
					        this.selectId.splice(i,1);
					    
					}
					
					this.list[index].selected = true;
					
					this.selectId.push(this.list[index].course_id)
					console.log("选中的值",this.selectId)
				}
			},
			//提交
			sure(){
				//提交选中的值
				this.testing.phone=getApp().globalData.ph
				if(this.selectId.length==0){
					uni.showToast({
						title: '请选择身份',
						icon: 'none'
					})
					return false;
				}
				var listIds = this.selectId.join(",")
				console.log("提交的数据",listIds)
				const db = uniCloud.database();
				
				if(listIds.includes("2")){//导师已认证不跳转，没认证跳转
					getApp().globalData.st = 1
					//this.testing.status=1
					
					
					db.collection('user_detail').where({
						phone: {
							    $eq: this.testing.phone
						}
						}).limit(1).get().then(res => {
							if (res.result && res.result.data && res.result.data.length > 0)
							{
								this.testing = res.result.data[0]
								if(this.testing.isTeacher==0)
								{
									uni.navigateTo({
										url: "../m1_identify_teacher/m1_identify_teacher",
										
									})
								}
								else
								{
									uni.switchTab({
									url: "../m2_profile/m2_profile"
									})
								}
								
							}
							else
							{
									uni.navigateTo({
										url: "../m1_identify_teacher/m1_identify_teacher"
									})
							}
						})
					
					
					
					uni.navigateTo({
						url: "../m1_identify_teacher/m1_identify_teacher"
					})
				}
				else {
					
					getApp().globalData.st = 0
					db.collection('user_detail').where({
						phone: {
							    $eq: this.testing.phone
						}
						}).limit(1).get().then(res => {
							if (res.result && res.result.data && res.result.data.length > 0)
							{
								this.testing = res.result.data[0]
								getApp().globalData.st = 0
							}
							else
							{
								this.testing.phone=getApp().globalData.ph;
								
								db.collection("user_detail").add(this.testing).then(e=>{
										console.log(e)
									})
								
							}
							uni.switchTab({
								url: "../find_teacher/find_teacher"
							})
							
					})
					///////////////////////////////////////////////////////////////////////////
					//this.testing.phone=getApp().globalData.ph;	
					/*const db = uniCloud.database();
					db.collection("user_detail").add(this.testing).then(e=>{
							console.log(e)
						})
					uni.switchTab({
						url: "../find_teacher/find_teacher"
					})*/
				}
			}
		
		}
	};
</script>

<style>
	page{
		background-color: #eee;
		
	}
	/* 已选择 */
	.selde {
		border: 1px solid red;
		background: red;
		color: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		padding: 0 20upx;
	}

	.selde-q {
		width: 18upx;
		height: 18upx;
		border-radius: 50%;
		background: #FFFFFF;
		margin-left: 6upx;
	}

	/* 未选择 */
	.noselde {
		border: 1px solid #959595;
		background: #FFFFFF;
		color: #959595;
		border-radius: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		padding: 0 20upx;
	}

	.noselde-q {
		border: 1px solid #959595;
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #FFFFFF;
		margin-left: 6upx;
	}
	.list-box {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 10upx 10upx 16upx 16upx;
		padding: 40upx;
		border-radius: 10upx;
	}

	.list-ed {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.list-left {
		margin-right: 16upx;
	}

	.list-img {
		width: 160upx;
		height: 160upx;
		margin: 0upx 16upx 0upx 0upx;
	}

	.list-right {
		display: flex;
		flex-direction: column;
		width: 510upx;
		height: 180upx;
	}

	.list-right-img {
		width: 140upx;
		height: 38upx;
	}

	.noadsop {
		width: 120upx;
		height: 32upx;
	}

	.list-head {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0upx;
	}

	.list-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-bottom: 20upx;
	}

	.list-da {
		display: flex;
		flex-direction: row;
		font-size: 24upx;
	}

	.list-da view {
		width: 100%;
	}

	.list-da view text {
		color: red;
	}

	.sure {
		background: #0000e1;
		color: #FFFFFF;
		width: 600upx;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 40upx;
		margin: 60upx auto;
	}
</style>
