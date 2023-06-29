<template>
	<view>
		<view class="uni-form-item uni-column">
		    <view class="title">
				<text class="uni-form-item__title">就职公司:</text>
			</view>
		    <view class="uni-input-wrapper">
		        <input class="uni-input" maxlength="20" placeholder="最大输入长度为20" />
		    </view>
		</view>
		<view class="uni-title uni-common-pl">真实姓名：</view>
		<view class="uni-textarea">
			<textarea maxlength="10" placeholder="最大输入长度为10" @blur="bindTextAreaBlur" auto-height />
			</view>
		<view class="uni-title uni-common-pl">工号：</view>
		<view class="uni-textarea">
			<textarea maxlength="10" placeholder="最大输入长度为10" @blur="bindTextAreaBlur" auto-height />
			</view>
		
		<view class="uni-title uni-common-pl">岗位：</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-title uni-common-pl">岗位：</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input">{{array[index].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		
		<uni-section :title="'收费 : '+ numberValue+'元/小时（0-999）'" type="line" padding>
			<uni-number-box  :max="999" :step="50" :value="numberValue" @change="change1" />
		</uni-section>
		
		<view class="uni-form-item uni-column">
		    <view class="title">
				<text class="uni-form-item__title">公司邮箱:</text>
			</view>
		    <view class="uni-input-wrapper">
		        <input class="uni-input"  />
		    </view>
		</view>
		<view class="uni-form-item uni-column">
		    <view class="title">
				<text class="uni-form-item__title">验证码:</text>
			</view>
		    <view class="uni-input-wrapper">
		        <input class="uni-input"/>
		    </view>
		</view>
		<view class="button-sp-area">
		    <button type="primary" plain="true">提交认证</button>
		 </view>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{name:'前端开发'},{name:'后端开发'},{name:'C++开发'},{name:'Java开发'},{name:'算法'},{name:'测试开发'},{name:'产品经理'},{name:'运营'},{name:'HR'},{name:'其他'}],
				index: 0,
				numberValue: 0,
				
				
				current: 0
			}
		},
		watch: {
			datetimeString() {
				console.log('日期时间单选:', this.datetimeString);
			},
		},
		onLoad() {

		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value);
				this.index = e.detail.value;
			},
			
			bindTextAreaBlur(e) {
				console.log(e.detail.value);
			},
			
			change1(value) {
				this.numberValue = value;
			},
			change3(value) {
				this.last_numberValue = value;
			},
			change4(value) {
				this.listen_numberValue = value;
			},
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.detail.value) {
						this.current = i;
						break;
					}
				}
			},
			change2(e) {
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
			}
			
		}
	}
</script>




<style lang="scss">
	.title {
	    padding: 5px 13px;
	}
	.uni-form-item uni-column
	{
		display: flex;
	}
	.uni-form-item__title {
	    font-size: 16px;
	    line-height: 24px;
	}
	
	.uni-input-wrapper {

	    padding: 8px 13px;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    background-color: #FFFFFF;
	}
	
	.uni-input {
	    height: 28px;
	    line-height: 28px;
	    font-size: 15px;
	    padding: 0px;
	    flex: 1;
	    background-color: #FFFFFF;
	}
	
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
	
	.uni-list-cell {
		justify-content: flex-start
	}
	
	button {
	    margin-top: 30rpx;
	    margin-bottom: 30rpx;
	}
	
	.button-sp-area {
	    margin: 0 auto;
	    width: 60%;
	}
</style>