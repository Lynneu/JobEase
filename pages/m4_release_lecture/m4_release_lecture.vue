<template>
	<view class="rl_container">
			<view class="rl-content">
				<text>讲座名称</text>
				<input type="text" maxlength="20" placeholder="20字以内" :value="lectureName" @input="inputName"  />
			</view>
			
			<view class="rl-content">
				<text>讲座简介</text>
				<textarea  maxlength="200" placeholder="最大输入长度为200" :value="description" @input="descriptionInput" auto-height></textarea>
			</view>
			<uni-section >
			<view class="rl-content rl-right">
				<text>标签</text>
				<picker @change="changeDirection" mode='selector' range-key="name1" :value="index1" :range="direction">
					<view class="si-picker">
						{{direction[index1].name1}}
					</view>
				</picker>
			</view>
			</uni-section>
			
			
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
					{ name1: '前端开发' },
					{ name1: '后端开发' },
					{ name1: 'C++开发' },
					{ name1: 'Java开发' },
					{ name1: '算法' },
					{ name1: '测试开发' },
					{ name1: '产品经理' },
					{ name1: '运营' },
					{ name1: 'HR' },
					{ name1: '其他' }
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
				this.index1 = e.detail.value;
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

<style lang="less">
	body {
	  background-color: white;
	}
	.rl_container {
		display: block;
		padding: 20rpx 40rpx;

		.rl-content {
			width: 100%;
			text-align: left;
			padding: 20rpx 0;
			border-bottom: solid 1px #f2f2f2;
			position: relative;

			text {
				color: #4a4a4a;
				font-size: 28rpx;
				display: inline-block;
				vertical-align: middle;
				min-width: 150rpx;
			}

			input {
				color: #030303;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
			}
			
			picker {
				width: 90%;
				color: #0055ff;
				font-size: 30rpx;
				display: inline-block;
				vertical-align: middle;
				position: absolute;
				top: 20rpx;
				left: 150rpx;
			}

			textarea {
				color: #030303;
				font-size: 30rpx;
				vertical-align: middle;
				height: 150rpx;
				width: 100%;
				margin-top: 30rpx;
			}

			
		}

		.rl-right:after {
			content: ' ';
			width: 20rpx;
			height: 20rpx;
			border-top: solid 1px #030303;
			border-right: solid 1px #030303;
			transform: rotate(45deg);
			position: absolute;
			top: 40rpx;
			right: 0;
		}

		.save {
			background: #030303;
			border: none;
			color: #ffffff;
			margin-top: 40rpx;
			font-size: 28rpx;
		}
	}
</style>
