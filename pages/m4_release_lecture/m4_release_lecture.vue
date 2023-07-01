<template>
	<view class="rl_container">
			<view class="rl-content">
				<uni-section title="讲座名称:" type="line"></uni-section>
				<!--<text>讲座名称</text>
				<input type="text" maxlength="20" placeholder="20字以内" :value="lectureName" @input="inputName"  />-->
				<!-- <textarea  maxlength="20" placeholder="最大输入长度为20" :value="lectureName" @input="inputName" auto-height></textarea> -->
				<uni-easyinput v-model="lectureName" placeholder="最大输入长度为20" maxlength="20" @input="inputName"></uni-easyinput>
			</view>
			
			
			<view class="rl-content">
				<!--<text>讲座简介</text>-->
				<uni-section title="讲座简介:" type="line"></uni-section>
				<uni-easyinput type="textarea" autoHeight v-model="description" placeholder="最大输入长度为200" maxlength="200" @input="descriptionInput"></uni-easyinput>
			</view>
			
			
			<view class="r1-content">
				<uni-section title="标签:" type="line"></uni-section>
				<!--<text>标签</text>-->	
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
				<uni-datetime-picker type="datetime" :start="start" :end="end"  v-model="datetimeString"  @change="changeStart" />
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
			
			
			<button class="save" @tap="savaInfo">发布讲座</button>

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
				/*updata.lectureName = lectureName;
				updata.description = description;
				updata.index1 = index1;
				updata.datetimeString = datetimeString;
				updata.numberValue = numberValue;
				updata.last_numberValue = last_numberValue;
				updata.listen_numberValue = listen_numberValue;*/	
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
			//padding: 0rpx 0;
			//border-bottom: solid 1px #f2f2f2;
			
			position: relative;

			/*text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}

			input {
				color: #030303;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
			//	margin-left: 0rpx;
				border: 1px solid #e8e8e8;
				height: 80rpx;
				padding: 10px;
			}*/
			

			// textarea {
			// 	color: #030303;
			// 	font-size: 28rpx;
			// 	vertical-align: middle;
			// 	height: 150rpx;
			// 	width: 100%;
			// 	//margin-top: 30rpx;
			// 	//margin-left: 20rpx;
			// 	//margin-right: 50rpx;
			// 	border: 1px solid #e8e8e8;
			// 	margin: 10px;
			// 	padding-top: 20px;
			// 	padding-bottom: 20px
				
			// }

			
		}
		/*.r2-content {
			display: flex;
			align-items: center;
			picker {
				//height: 1190rpx;
				position: absolute;
				  transform: translateX(20%);
				  width: 90%;
				  color: #757575;
				  font-size: 28rpx;
				  display: inline-block;
				  vertical-align: middle;
			}
			rl-right:after {
				content: ' ';
				width: 15rpx;
				height: 15rpx;
				border-top: solid 1px #030303;
				border-right: solid 1px #030303;
				transform: rotate(45deg);
				position: absolute;
				top: 35rpx;
				right: 0;
			}
		}*/
		/*.uni-data-select{
			//width: 300rpx;
		}*/
		
		.save {
			background: #030303;
			border: none;
			color: #ffffff;
			margin-top: 40rpx;
			font-size: 28rpx;
		}
	}
</style>
