<template>
	<view>
		<view class="uni-name">
		    <view class="title">就职公司：</view>
		    <view class="uni-input-wrapper">
		        <input class="uni-input" maxlength="20" placeholder="最大输入长度为20" />
		    </view>
		</view>
		<view class="uni-name">
			<view class="title">真实姓名：</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" maxlength="10" placeholder="最大输入长度为10"  />
			</view>
		</view>
		<view class="uni-name">
			<view class="title">工号：</view>
			<view class="uni-input-wrapper">
				<input class="uni-input" maxlength="10" placeholder="最大输入长度为10"  />
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
		<view class="uni-title uni-common-pl">主要咨询：</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					当前选择
				</view>
				<view class="uni-list">
				<checkbox-group>
					<label>
						<checkbox value="1"  />简历优化
					</label>
					<label>
						<checkbox value="2" />面试经验
					</label>
					<label>
						<checkbox value="3" />就业指导
					</label>
					<label>
						<checkbox value="4" />职业规划
					</label>
					<label>
						<checkbox value="5" />薪资谈判
					</label>
					<label>
						<checkbox value="6" />其他
					</label>
				</checkbox-group>
		</view>
			</view>
		</view>
		<view class="charge">
		<uni-section :title="'收费 : '+ numberValue+'元/小时（0-999）'" type="line" padding>
			<uni-number-box  :max="999" :step="10" :value="numberValue" @change="change1" />
		</uni-section>
		</view>
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
				<view class="get-test" type="default" @click="getTest" v-if="showTimer">获取验证码</view>
				<view class="get-test" type="default" v-else>{{timer+'s'}}</view>
				</view>
			
		</view>
		<view class="button-sp-area">
		    <button type="primary" plain="true" @click="submit">提交认证</button>
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
				current: 0,
				timer: 0, //验证码时间
				showTimer: true, //是否显示验证码时间
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
			submit() {
				uni.switchTab({
					url: "../find_teacher/find_teacher"
				})
			},
			
			getTest() {
						//uni.request({
						//	url: 'http://app/login/sendSms', // 路径
						//	method: 'GET', // 请求方法
						//	data: {
						//		phone: that.iphoneValue,
						//		type: '1',
						//	}, //发送的数据
						//success: (res) => {
						//if (res.data.code == 200)0 
							{
								uni.showToast({
									title: '验证码发送成功',
									icon: 'none'
								})
								that.timer=60//设置时间初始化
								that.timeDown(that.timer)//调用时间减少
							}
						//}
					//})
		},
		// 设置验证码时间动态减少
		timeDown(num){
			let that=this;
			// 当时间为0时,恢复为按钮,清除定时器
			if(num==0){
				that.showTimer=true;
				return clearTimeout();
			}else{
				that.showTimer=false;
				setTimeout(function(){
					that.timer=num-1
					that.timeDown(num-1)
				},1000)//定时每秒减一
			}
		},
			
		}
	}
</script>




<style lang="scss">
	.title {
	    padding: 5px 13px;
		padding-bottom: 10px;
	}
	.uni-form-item uni-column
	{
		margin-top: 10px;
		display: flex;
		height: 20px;
		padding-bottom: 10px;
	}
	
	.uni-name
	{
		margin-top: 20px;
		display: flex;
		height: 30px;

	}
	
	
	
	.uni-form-item__title {
		
	    font-size: 15px;
	    line-height: 24px;
	}
	
	.uni-input-wrapper {

	    padding: 8px 13px;
	    flex-direction: row;
	    flex-wrap: nowrap;
	    background-color: #FFFFFF;
	}
	
	.uni-input {
	    height: 30px;
	    font-size: 15px;
	    background-color: #FFFFFF;
		margin-right: 30px;
	}
	
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
	
	.uni-list-cell {
		justify-content: flex-start
	}
	
	.uni-list {
		height: 40px;
		margin-top: 0px;
	}
	.button {
	    margin-top: 30rpx;
	    margin-bottom: 30rpx;
	}
	
	.button-sp-area {
	    margin: 0 auto;
	    width: 60%;
	}
	.charge{
		margin-top: 0;
	}
	
	.get-test {
			color: #ff8b33;
			font-size: 15px;
			text-align: center;
			width: 122px;
			height: 50px;
			border: 1px solid #FF8B33;
			border-radius: 25px;
			line-height: 50px;
		}
	
	
</style>