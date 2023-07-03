<template>
	<view class="si-container">
		<view style="text-align: center;">
			<image style="width: 10%; height: 150rpx;" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
		</view>
		
		<view class="si-content">
			<uni-section :title="'用户名:'+seeker.username" type="line"></uni-section>
		</view>
		
		<view class="si-content">
			<uni-section :title="'身份:求职者'" type="line"></uni-section>
		</view>
		
		<view class="si-content">
			<uni-section title="就业目标:" type="line"></uni-section>
			<uni-data-select
			v-model="seeker.index" 
			:localdata="goal" 
			:clear="false" 
			@change="changeGoal">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="求职方向:" type="line"></uni-section>
			<uni-data-select
			v-model="seeker.index1" 
			:localdata="direction" 
			:clear="false" 
			@change="changeDirection">
			</uni-data-select>
		</view>
		
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goal: [{
					value: 0,
					text: '看看机会'
				}, {
					value: 1,
					text: '找实习'
				}, {
					value: 2,
					text: '找校招'
				}],
				direction:[
				  { value: 0, text: '看看机会' },
				  { value: 1, text: '前端开发' },
				  { value: 2, text: '后端开发' },
				  { value: 3, text: 'C++开发' },
				  { value: 4, text: 'Java开发' },
				  { value: 5, text: '算法' },
				  { value: 6, text: '测试开发' },
				  { value: 7, text: '产品经理' },
				  { value: 8, text: '运营' },
				  { value: 9, text: 'HR' },
				  { value: 10, text: '其他' }
				],
				seeker:{
					"_id":"",
					"username":"",
					"index":0,
					"index1":0
				}
			}
		},
		/*onLoad({seeker}) {
			//this.seeker=JSON.parse(seeker)
			try {
			    this.seeker = JSON.parse(seeker);
			  } catch (error) {
			    console.log('Error during parsing seeker:', error);
			  }
		},*/
		methods: {
			changeGoal(e) {
				console.log(this.seeker.index)
			},
			changeDirection(e) {
				console.log(this.seeker.index1)
			},
			/*submit(){
				const db = uniCloud.database();
				let seeker={...this.seeker}//this.item的每一项放在{}里
				delete seeker._id; // 不包含 _id 字段
				db.collection("contacts").doc(this.seeker._id).update(seeker).then(e=>{
					console.log(e)
				}) 
			}*/
			submit() {
			  /*const db = uniCloud.database();
			  let seeker = { ...this.seeker }; //将this.item的每一项放在{}里
			  delete seeker._id; // 不包含 _id 字段
			  db.collection("seeker").doc(this.seeker._id).update(seeker)
			    .then(e => {
			      console.log(e);
			    })
			    .catch(error => {
			      console.log("Error while saving data:", error);
			    });*/
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
			}
		}
	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			position: relative;
		}
	}
</style>	

<!--<template>
	<view style="text-align: center;">
		<image style="width: 10%; height: 150rpx;" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
	</view>
	
	<view class="si-container">
		<view class="si-content">
			<uni-section :title="'用户名:'+username" type="line"></uni-section>
		</view>
		
		<view class="si-content">
			<uni-section :title="'身份:求职者'" type="line"></uni-section>
		</view>
			
		<view class="si-content">
			<uni-section title="就业目标:" type="line"></uni-section>
			<uni-data-select
			v-model="index" 
			:localdata="goal" 
			:clear="false" 
			@change="changeGoal">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="求职方向:" type="line"></uni-section>
			<uni-data-select
			v-model="index1" 
			:localdata="direction" 
			:clear="false" 
			@change="changeDirection">
			</uni-data-select>
		</view>
		
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
		
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '名字不可改',
				goal: [{
					value: 0,
					text: '看看机会'
				}, {
					value: 1,
					text: '找实习'
				}, {
					value: 2,
					text: '找校招'
				}],
				index: 0,
				direction:[
				  { value: 0, text: '看看机会' },
				  { value: 1, text: '前端开发' },
				  { value: 2, text: '后端开发' },
				  { value: 3, text: 'C++开发' },
				  { value: 4, text: 'Java开发' },
				  { value: 5, text: '算法' },
				  { value: 6, text: '测试开发' },
				  { value: 7, text: '产品经理' },
				  { value: 8, text: '运营' },
				  { value: 9, text: 'HR' },
				  { value: 10, text: '其他' }
				],
				index1: 0
			}

		},
		methods: {
			changeGoal(e) {
				console.log(this.index)
			},
			changeDirection(e) {
				console.log(this.index1)
			},
			submit() {
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
			}
		},
		onLoad() {			
		}

	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			position: relative;
		}
	}
</style>
-->


<!--<template>
	<view style="text-align: center;">
		<image style="width: 10%; height: 150rpx;" mode="aspectFit" src="../../static/image/icon_my_HL.png"></image>
	</view>
	
	<view class="si-container">
		<view class="si-content">
			<uni-section :title="'用户名:'+username" type="line"></uni-section>
		</view>
		
		<view class="si-content">
			<uni-section :title="'身份:求职者'" type="line"></uni-section>
		</view>
			
		<view class="si-content">
			<uni-section title="就业目标:" type="line"></uni-section>
			<uni-data-select
			v-model="index" 
			:localdata="goal" 
			:clear="false" 
			@change="changeGoal">
			</uni-data-select>
		</view>
		
		<view class="si-content">
			<uni-section title="求职方向:" type="line"></uni-section>
			<uni-data-select
			v-model="index1" 
			:localdata="direction" 
			:clear="false" 
			@change="changeDirection">
			</uni-data-select>
		</view>
		
		<button type="default" style="background-color:#007AFF; color: #fff;"  @click="submit">保存</button>
		
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '名字不可改',
				goal: [{
					value: 0,
					text: '看看机会'
				}, {
					value: 1,
					text: '找实习'
				}, {
					value: 2,
					text: '找校招'
				}],
				index: 0,
				direction:[
				  { value: 0, text: '看看机会' },
				  { value: 1, text: '前端开发' },
				  { value: 2, text: '后端开发' },
				  { value: 3, text: 'C++开发' },
				  { value: 4, text: 'Java开发' },
				  { value: 5, text: '算法' },
				  { value: 6, text: '测试开发' },
				  { value: 7, text: '产品经理' },
				  { value: 8, text: '运营' },
				  { value: 9, text: 'HR' },
				  { value: 10, text: '其他' }
				],
				index1: 0
			}

		},
		methods: {
			changeGoal(e) {
				console.log(this.index)
			},
			changeDirection(e) {
				console.log(this.index1)
			},
			submit() {
				uni.switchTab({
					url: "../m2_profile/m2_profile"
				})
			}
		},
		onLoad() {			
		}

	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.si-container {
		display: block;
		padding: 20rpx 40rpx;
		.si-content {
			width: 100%;
			text-align: left;
			position: relative;
		}
	}
	.save{
		margin-top: 102px;
	}
</style>-->