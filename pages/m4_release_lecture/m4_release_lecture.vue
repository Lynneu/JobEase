<template>
	<view class="rl-container">
			<view class="rl-content">
				<uni-section title="讲座名称:" type="line"></uni-section>
				<uni-easyinput  v-model="lecture.lecture_title" placeholder="最大输入长度为20" maxlength="20" />
			</view>
			
			<view class="rl-content">
				<uni-section title="讲座简介:" type="line"></uni-section>
				<uni-easyinput  v-model="lecture.lecture_content" placeholder="最大输入长度为50" maxlength="50" autoHeight/>
			</view>
			
			<view class="r1-content">
				<uni-section title="标签(点击选择):" type="line"></uni-section>
				<uni-data-select v-model="lecture.lecture_label" :localdata="tag" :clear="false" @change="changeTag">
				</uni-data-select>
			</view>
			
			<view class="r1-content">
			<uni-section :title="'收费 : '+ lecture.lecture_price+'元/人（0-999）'" type="line" padding>
				<uni-number-box  v-model="lecture.lecture_price" :max="999" :step="10" :value="lecture.lecture_price" @change="changeLectureprice" />
			</uni-section>
			</view>
			
			<view class="r1-content">
			<uni-section :title="'开始时间:' + lecture.lecture_time"  type="line"></uni-section>
			<uni-datetime-picker  v-model="lecture.lecture_time" type="datetime" :clear-icon="false"  :start="start" :end="end"   @change="changeStart" />
			</view>
			
			<view class="r1-content">
			<uni-section :title="'预期时长 : '+ lecture.lecture_duration+'分钟(0-999)'" type="line" padding>
				<uni-number-box   :max="999" :step="10" :value="lecture.lecture_duration" @change="changeLast" />
			</uni-section>
			</view>
			
			<view class="rl-content">
				<uni-section title="是否限制人数:" type="line"></uni-section>
				<radio-group @change="changeRestrictions">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === lecture.lecture_limit" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</radio-group>
			</view>
			<view v-if="lecture.lecture_limit === 1" class="rl-content">
				  <uni-section :title="'允许 : '+ lecture.lecture_number+'人听讲座(1-999)'" type="line" padding>
				  	<uni-number-box  :min="1" :max="999" :step="10" :value="lecture.lecture_number" @change="changeNumber" />
				  </uni-section>
			</view>
			
			<button type="default" style="background-color:#007AFF; color: #fff;" @click="submit">发布讲座</button>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tag:[
					{ value: 0, text: '简历优化' },
					{ value: 1, text: '面试经验' },
					{ value: 2, text: '就业指导' },
					{ value: 3, text: '职业规划' },
					{ value: 4, text: '薪资谈判' },
					{ value: 5, text: '其他' }
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
					"phone":"",
				    "lecture_title":"",
				    "lecture_content": "",
				    "lecture_label": 0,
				    "lecture_price": 0,
					"lecture_time": this.getDateTime(new Date(), false),
				    "lecture_duration": 30,
				    "lecture_limit": 0,
				    "lecture_number": 1,
				    "lecture_reserved": 0,
				}
			}
		},
		onShow() {
			this.lecture.phone=getApp().globalData.ph;			
			//console.log('Phone:', this.lecture.phone);
		},
		methods: {
			changeTag(e) {
				console.log(e)
			},
			changeLectureprice(value) {
				this.lecture.lecture_price = value;
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
				this.lecture.lecture_duration = value;
			},
			changeRestrictions(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.lecture.lecture_limit = i;
						break;
					}
				}
			},
			changeNumber(value) {
				this.lecture.lecture_number = value;
			},
			submit() {
			   if (!this.lecture.lecture_title) {
			      uni.showToast({
			         title: '请填写讲座名称',
			         icon: 'none',
			         duration: 2000
			      });
			      return;
			   }
			   if (!this.lecture.lecture_content) {
			      uni.showToast({
			         title: '请填写讲座简介',
			         icon: 'none',
			         duration: 2000
			      });
			      return;
			   }
			
			   const db = uniCloud.database();
			   
			   
			   db.collection("lecture").add(this.lecture).then(e=>{
			   	console.log(e)
			   })
			   
			   uni.showToast({
			      title: '发布成功',
			      icon: 'none',
			      duration: 2000
			   });
			
			  uni.switchTab({
			    url: "../find_lecture/find_lecture"
			 });
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
