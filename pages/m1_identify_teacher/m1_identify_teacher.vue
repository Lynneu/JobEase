<template>
	<view class="page">
		<view class="container">
				<view class="form-container">
					<uni-forms ref="valiForm" :modelValue="valiFormData">
						<uni-forms-item label="就职公司" label-width=60 name="company">
							<uni-easyinput 
								maxlength="20"
								trim="all" 
								v-model="user_detail.co" 
								placeholder="最大输入长度为20" >
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="用户名称" label-width=60 name="name"> 
							<uni-easyinput
								maxlength="10"
								trim="all" 
								v-model="user_detail.username" 
								placeholder="最大输入长度为10">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="工号" name="number">
							<uni-easyinput
								maxlength="10"
								trim="all" 
								v-model="user_detail.job_number" 
								placeholder="最大输入长度为10">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="岗位" name="jobchoose">
							<uni-data-select
							        v-model="user_detail.post"
							        :localdata="jobs"
							        @change="jobchange">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item label="咨询方向" label-width=60 label-position="top" name="consult">
							<uni-data-checkbox v-model="user_detail.tip_teacher" multiple :localdata="consults" />
						</uni-forms-item>
						<uni-forms-item label="收费标准(元/小时)" label-width=60 name="pay">
							<uni-number-box :value="0" :step="10" :min="0" :max="999" v-model="user_detail.price"/>
						</uni-forms-item>
						<uni-forms-item label="公司邮箱" label-width=60 name="email">
							<uni-easyinput
								trim="all" 
								v-model="user_detail.email" 
								placeholder="请输入邮箱">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="验证码" name="code">
							<view class="button-group">
								<uni-easyinput
									trim="all" 
									v-model="codee" 
									placeholder="请输入验证码">
								</uni-easyinput>
								<button size="mini" v-if="show_again==0" @click="sendCode" class="button">获取验证码</button>
								<button size="mini" v-if="show_again==1" @click="sendCodeAgain" class="button" style="background-color: #b2b6b8; color: #fff;">请稍后重试({{ count }})</button>
							</view>
						</uni-forms-item>
					</uni-forms>
				</view>
				<button style="background-color: #007aff; color: #fff;" @click="submit('valiForm')">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codee:"",
				show_again: 0, //  显示发送验证码||请稍后按钮
				count: "", // 等待时间
				timer: null, //定时器
				valiFormData: {
					company: '',
					name: '',
					number: '',
					jobchoose: 9,
					consult: [],
					pay: '',
					email: '',
					code: ''
				},
				user_detail:{
				    "phone": "",
				    "username": "",
				    "isTeacher": 1,
				    "status": 1,
				    "email": "",
				    "comment": "",
				    "co": "",
				    "job_number": "",
				    "price": 0,
				    "score": 0,
				    "post": 1,
				    "tip_teacher": [],
				    "tip_student": 1,
				    "goal": 1
				},
				test:{
				    "phone": "11012343210",
				    "username": "plz",
				    "isTeacher": 1,
				    "status": 1,
				    "email": "askjh@qq.com",
				    "comment": "我是1",
				    "co": "北京工业大学",
				    "job_number": "123123",
				    "price": 99,
				    "score": 4.5,
				    "post": 2,
				    "tip_teacher": [
				        1,
				        3,
				        5
				    ],
				    "tip_student": 6,
				    "goal": 2
				},
				
				
				jobs: [
						{value: 0, text: '前端开发'},
						{value: 1, text: '后端开发'},
						{value: 2, text: 'C++开发'},
						{value: 3, text: 'Java开发'},
						{value: 4, text: '算法'},
						{value: 5, text: '测试开发'},
						{value: 6, text: '产品经理'},
						{value: 7, text: '运营'},
						{value: 8, text: 'HR'},
						{value: 9, text: '其他'},
					],
				consults:[
						{value: 0, text: '简历优化'},
						{value: 1, text: '面试经验'},
						{value: 2, text: '就业指导'},
						{value: 3, text: '职业规划'},
						{value: 4, text: '薪资谈判'},
						{value: 5, text: '测试开发'},
						{value: 6, text: '其他'}
					],
				rules: {
							company: {
								rules: [{
									required: true,
									errorMessage: '公司不能为空'
								}]
							},
							name: {
								rules: [{
									required: true,
									errorMessage: '姓名不能为空'
								}]
							},
							number: {
								rules: [{
									required: true,
									errorMessage: '工号不能为空'
								}, {
									format: 'number',
									errorMessage: '工号只能输入数字'
								}]
							},
							consult: {
									rules: [{
											format: 'array'
										},
										{
											validateFunction: function(rule, value, data, callback) {
												if (value.length < 1) {
													callback('请至少勾选一个咨询方向')
												}
												return true
											}
										}
											]
							},
							email: {
								rules: [{
									required: true,
									errorMessage: '邮箱不能为空'
								},{
									format: 'email',
									errorMessage: '请输入正确的邮箱'
								}]
							},
							code: {
								rules: [{
									required: true,
									errorMessage: '验证码不能为空'
								}]
							}
						},
			}
		},
		onShow() {
					this.user_detail.phone=getApp().globalData.ph	
					console.Log('Phone:', this. this.user_detail.phone)
				},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.user_detail.setRules(this.rules)
		},
		methods: {
			submit(ref) {
							this.$refs[ref].validate().then(res => {
								console.log('success', res);
								uni.showToast({
									title: '校验通过'
								})
										
								const db = uniCloud.database();
								db.collection("user_detail").add(this.user_detail).then(e=>{
										console.log(e)
									})
								db.collection("user_detail").add(this.test).then(e=>{
										console.log(e)
									})
								uni.switchTab({
									url: "../find_teacher/find_teacher"
								})
							}).catch(err => {
								console.log('err', err);
							})
						},
			sendCode() {
			      const count = 60;
			      if (!this.timer) {
			        this.count = count;
			        this.show_again = 1; // 移动到定时器外部
			        this.timer = setInterval(() => {
			          if (this.count > 0 && this.count <= count) {
			            this.count--;
			          } else {
			            clearInterval(this.timer);
			            this.timer = null;
			            this.show_again = 0;
			          }
			        }, 1000);
			      }
			    },
			    sendCodeAgain() {
			      if (this.count <= 0) {
			        this.sendCode();
			      } else {
			        uni.showToast({
			          title: '请稍后重试(${this.count})',
			          icon: "none",
			          duration: 1500,
			        });
			      }
			    },
				jobchange(e) {
					console.log(e);
				}
	
		}
	}
</script>

<style>
	.page {
		background-color: #fff;
	}
	.container {
		padding: 15px;
	}
	.form-item {
			display: flex;
			align-items: center;
		}
	.button-group {
			display: flex;
			justify-content: space-around;
		}
	.button {
			display: flex;
			align-items: center;
			height: 35px;
			margin-left: 10px;
			background-color: #007aff;
			color: #fff;
		}
</style>