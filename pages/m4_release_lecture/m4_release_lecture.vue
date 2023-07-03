<template>
	<view class="rl-container">
			<view class="rl-content">
				<uni-section title="讲座名称:" type="line"></uni-section>
				<uni-easyinput  v-model="lecture.lectureName" placeholder="最大输入长度为20" maxlength="20" />
			</view>
			
			<view class="rl-content">
				<uni-section title="讲座简介:" type="line"></uni-section>
				<uni-easyinput  v-model="lecture.description" placeholder="最大输入长度为50" maxlength="50" autoHeight/>
			</view>
			
			<view class="r1-content">
				<uni-section title="标签:" type="line"></uni-section>
				<uni-data-select v-model="lecture.index1" :localdata="direction" :clear="false" @change="changeDirection">
				</uni-data-select>
			</view>
			
			<view class="r1-content">
			<uni-section :title="'收费 : '+ lecture.numberValue+'元/人（0-999）'" type="line" padding>
				<uni-number-box  v-model="lecture.numberValue" :max="999" :step="5" :value="lecture.numberValue" @change="changeLectureprice" />
			</uni-section>
			</view>
			
			<view class="r1-content">
			<uni-section :title="'开始时间:' + lecture.datetimeString"  type="line"></uni-section>
			<uni-datetime-picker  v-model="lecture.datetimeString" type="datetime" :clear-icon="false"  :start="start" :end="end"   @change="changeStart" />
			</view>
			
			<view class="r1-content">
			<uni-section :title="'预期时间 : '+ lecture.last_numberValue+'分钟'" type="line" padding>
				<uni-number-box   :max="999" :step="10" :value="lecture.last_numberValue" @change="changeLast" />
			</uni-section>
			</view>
			
			<view class="rl-content">
				<uni-section title="是否限制人数:" type="line"></uni-section>
				<radio-group @change="changeRestrictions">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === lecture.current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<view v-if="lecture.current === 1" class="rl-content">
				  <uni-section :title="'允许 : '+ lecture.listen_numberValue+'人听讲座'" type="line" padding>
				  	<uni-number-box  :min="1" :max="9999"  :value="lecture.listen_numberValue" @change="changeNumber" />
				  </uni-section>
			</view>
			
			<button type="default" style="background-color:#007AFF; color: #fff;" @click="submit">发布讲座</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				direction:[
					{ value: 0, text: '前端开发' },
					{ value: 1, text: '后端开发' },
					{ value: 2, text: 'C++开发' },
					{ value: 3, text: 'Java开发' },
					{ value: 4, text: '算法' },
					{ value: 5, text: '测试开发' },
					{ value: 6, text: '产品经理' },
					{ value: 7, text: '运营' },
					{ value: 8, text: 'HR' },
					{ value: 9, text: '其他' }
				],
				start: Date.now(),
				end: Date.now() + 14 * 24 * 3600000,
				items: [{
						value: '0',
						name: '不限制人数',
						checked: 'true'
					},
					{
						value: '1',
						name: '限制人数'
					},
					
				],
				
				lecture:{
					 "lectureName": "",
					 "description": "",
					 index1:0,
					 numberValue:0,
					 "datetimeString": this.getDateTime(new Date(), false),
					 last_numberValue:30,
					 current: 0,
					 listen_numberValue: 1
				}
			}
		},
		
		methods: {
			changeDirection(e) {
				console.log(e)
			},
			changeLectureprice(value) {
				this.lecture.numberValue = value;
			},
			changeStart(e) {
				console.log('----change2事件:', e);
			},
			getDateTime(date, addZero = true){
				return `${this.getDate(date, addZero)} ${this.getTime(date, addZero)}`
			},
			getDate(date, addZero = true){
				date = new Date(date)
				const year = date.getFullYear()
				const month = date.getMonth()+1
				const day = date.getDate()
				return `${year}-${addZero ? this.addZero(month) : month}-${addZero ? this.addZero(day) : day}`
			},
			getTime(date, addZero = true){
				date = new Date(date)
				const hour = date.getHours()
				const minute = date.getMinutes()
				const second = date.getSeconds()
				return this.hideSecond ?
				`${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}` :
				`${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}:${addZero ? this.addZero(second) : second}`
			},
			addZero(num) {
				if (num < 10) {
					num = `0${num}`
				}
				return num
			},
			changeLast(value) {
				this.lecture.last_numberValue = value;
			},
			changeRestrictions(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.lecture.current = i;
						break;
					}
				}
			},
			changeNumber(value) {
				this.lecture.listen_numberValue = value;
			},
			submit(){
				if (!this.lecture.lectureName) {
					uni.showToast({
						title: '请填写讲座名称',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				if (!this.lecture.description) {
					uni.showToast({
						title: '请填写讲座简介',
						icon: 'none',
						duration: 2000
					});
					return;
				}
				uni.showToast({
					title: '发布成功',
					icon: 'none',
					duration: 2000
				});
				uni.switchTab({
					url: "../find_lecture/find_lecture"
				})
				/*const db = uniCloud.database();
				db.collection("lecture").add(this.lecture).then(e=>{
					console.log(e)
				})*/
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
	.rl-container {
		display: block;
		padding: 20rpx 40rpx;

		.rl-content {
			font-size: 1rpx;
			width: 100%;
			text-align: left;
			position: relative;	
		}
	}
</style>



<!--<template>
	<view class="rl_container">
			<view class="rl-content">
				<uni-section title="讲座名称:" type="line"></uni-section>
				<uni-easyinput v-model="lectureName" placeholder="最大输入长度为20" maxlength="20" @input="inputName"></uni-easyinput>
			</view>
			
			<view class="rl-content">
				<uni-section title="讲座简介:" type="line"></uni-section>
				<uni-easyinput type="textarea" autoHeight v-model="description" placeholder="最大输入长度为200" maxlength="200" @input="descriptionInput"></uni-easyinput>
			</view>
			
			<view class="r1-content">
				<uni-section title="标签:" type="line"></uni-section>
				<uni-data-select 
				v-model="index1" 
				:localdata="direction" 
				:clear="false" 
				@change="changeDirection">
				</uni-data-select>
			</view>
			
			<uni-section :title="'收费 : '+ numberValue+'元/人（0-9999）'" type="line" padding>
				<uni-number-box  :max="9999" :step="5" :value="numberValue" @change="changeLectureprice" />
			</uni-section>
			
			<uni-section :title="'开始时间:' + datetimeString"  type="line"></uni-section>
			<view class="example-body">
				<uni-datetime-picker type="datetime" :clear-icon="false"  :start="start" :end="end"  v-model="datetimeString"  @change="changeStart" />
			</view>
			
			<uni-section :title="'预期时间 : '+ last_numberValue+'分钟'" type="line" padding>
				<uni-number-box  :max="9999" :step="10" :value="last_numberValue" @change="changeLast" />
			</uni-section>
			
			<view class="rl-content">
				<uni-section title="是否限制人数:" type="line"></uni-section>
				<radio-group @change="changeRestrictions">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<view v-if="current === 1" class="rl-content">
				  <uni-section :title="'允许 : '+ listen_numberValue+'人听讲座'" type="line" padding>
				  	<uni-number-box  :max="9999"  :value="listen_numberValue" @change="changeNumber" />
				  </uni-section>
			</view>
			
			<button class="save" style="background-color:#007AFF; color: #fff;" @tap="savaInfo">发布讲座</button>

	</view>
</template>

<script>
	export default {
	
		data() {
			return {
				lectureName: '',
				description: '',
				direction:[
					{ value: 0, text: '前端开发' },
					{ value: 1, text: '后端开发' },
					{ value: 2, text: 'C++开发' },
					{ value: 3, text: 'Java开发' },
					{ value: 4, text: '算法' },
					{ value: 5, text: '测试开发' },
					{ value: 6, text: '产品经理' },
					{ value: 7, text: '运营' },
					{ value: 8, text: 'HR' },
					{ value: 9, text: '其他' }
				],
				
				index1: 0,
				items: [{
						value: '0',
						name: '不限制人数',
						checked: 'true'
					},
					{
						value: '1',
						name: '限制人数'
					},
					
				],
				current: 0,
				listen_numberValue: 0,
				numberValue: 0,
				start: Date.now(),
				end: Date.now() + 14 * 24 * 3600000,
				datetimeString: this.getDateTime(new Date(), false),
				last_numberValue: 30,
			

			}

		},
		watch: {
			datetimeString() {
				console.log('日期时间单选:', this.datetimeString);
			},
		},
		methods: {
			changeDirection(e) {
				console.log(e)
			},
			inputName(e) {
				this.lectureName = e.detail.value;
			},
			descriptionInput(e) {
				this.description = e.detail.value;
			},
			changeNumber(value) {
				this.listen_numberValue = value;
			},
			changeRestrictions(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},
			changeLectureprice(value) {
				this.numberValue = value;
			},
			changeStart(e) {
				console.log('----change2事件:', e);
			},
			getDateTime(date, addZero = true){
				return `${this.getDate(date, addZero)} ${this.getTime(date, addZero)}`
			},
			getDate(date, addZero = true){
				date = new Date(date)
				const year = date.getFullYear()
				const month = date.getMonth()+1
				const day = date.getDate()
				return `${year}-${addZero ? this.addZero(month) : month}-${addZero ? this.addZero(day) : day}`
			},
			getTime(date, addZero = true){
				date = new Date(date)
				const hour = date.getHours()
				const minute = date.getMinutes()
				const second = date.getSeconds()
				return this.hideSecond ?
				`${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}` :
				`${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}:${addZero ? this.addZero(second) : second}`
			},
			addZero(num) {
				if (num < 10) {
					num = `0${num}`
				}
				return num
			},
			changeLast(value) {
				this.last_numberValue = value;
			},
			
			savaInfo() {
				let that = this;
				let lectureName = that.lectureName;//名称-判断
				let description = that.description;//简介
				let numberValue = that.numberValue;//收费
				let index1 = that.index1;//标签
				let datetimeString = that.datetimeString;//开始时间
				let last_numberValue = that.last_numberValue;//逾期时间
				let listen_numberValue = that.listen_numberValue;//人数
				let updata = {};
				if (!lectureName) {
					uni.showToast({
						title: '请填写讲座名称',
						icon: 'none',
						duration: 2000
					});
					return;
				}	
			},	
		},
		onLoad() {			
		}
	}
</script>

<style lang="scss">
	body {
	  background-color: white;
	}
	.rl_container {
		display: block;
		padding: 20rpx 40rpx;
		.rl-content {
			font-size: 1rpx;
			width: 100%;
			text-align: left;
			position: relative;	
		}
		.save {
			background: #030303;
			border: none;
			color: #ffffff;
			margin-top: 40rpx;
			font-size: 28rpx;
		}
	}
</style>-->
