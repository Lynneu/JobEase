<template>
	<view>
		<view class="uni-form-item uni-column">
		    <view class="title">
				<text class="uni-form-item__title">讲座名称:</text>
			</view>
		    <view class="uni-input-wrapper">
		        <input class="uni-input" maxlength="20" placeholder="最大输入长度为20" />
		    </view>
		</view>
		
		
		<view class="uni-title uni-common-pl">讲座简介：</view>
		<view class="uni-textarea">
			<textarea maxlength="200" placeholder="最大输入长度为200" @blur="bindTextAreaBlur" auto-height />
			</view>
		
		
		<view class="uni-title uni-common-pl">讲座标签：</view>
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
		
		<uni-section :title="'收费 : '+ numberValue+'元/人（0-9999）'" type="line" padding>
			<uni-number-box  :max="9999" :step="5" :value="numberValue" @change="change1" />
		</uni-section>
		
		<uni-section :title="'开始时间:'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" :start="start" :end="end"  @change="change2" />
		</view>
		
		<uni-section :title="'预期时间 : '+ last_numberValue+'分钟'" type="line" padding>
			<uni-number-box  :max="9999" :step="10" :value="last_numberValue" @change="change3" />
		</uni-section>
		
		<view class="uni-title uni-common-mt uni-common-pl">是否限制讲座人数</view>
		<view class="uni-list">
			<radio-group @change="radioChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
					<view>
						<radio :value="item.value" :checked="index === current" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</radio-group>
		</view>
		<view v-if="current === 1" class="uni-common-mt uni-common-pl">
		      <!--<view class="uni-title">选择讲座人数</view>
		      <uni-number-box :max="9999" step="1" v-model="selectedCount" />-->
			  <uni-section :title="'允许 : '+ listen_numberValue+'人听讲座'" type="line" padding>
			  	<uni-number-box  :max="9999"  :value="listen_numberValue" @change="change4" />
			  </uni-section>
		</view>
		
		<view class="button-sp-area">
		    <button type="primary" plain="true" @click="release">按钮</button>
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
				
				datetimeString: this.getDateTime(new Date(), false),
				start: Date.now(),
				end: Date.now() + 14 * 24 * 3600000,
				last_numberValue: 0,
				listen_numberValue: 0,
				title: 'radio 单选框',
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
			},
			release() {
				uni.switchTab({
				  url: '../find_lecture/find_lecture'
				});
			}
			
		}
	}
</script>




<style lang="scss">
	.title {
	    padding: 5px 13px;
	}
	.uni-form-item__title {
	    font-size: 16px;
	    line-height: 24px;
	}
	
	.uni-input-wrapper {
	    /* #ifndef APP-NVUE */
	    display: flex;
	    /* #endif */
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