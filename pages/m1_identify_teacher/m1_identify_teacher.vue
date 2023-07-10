<template>
	<view class="page">
		<view class="container">
				<view class="form-container">
					<uni-forms ref="valiForm" :modelValue="valiFormData">
						<uni-forms-item label="就职公司" label-width=60 name="company">
							<uni-easyinput 
								maxlength="20"
								trim="all" 
								v-model="valiFormData.company" 
								placeholder="最大输入长度为20" >
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="用户名称" label-width=60 name="name"> 
							<uni-easyinput
								maxlength="20"
								trim="all" 
								v-model="valiFormData.name" 
								placeholder="最大输入长度为20">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="工号" name="number">
							<uni-easyinput
								maxlength="10"
								trim="all" 
								v-model="valiFormData.number" 
								placeholder="最大输入长度为10">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="岗位" name="jobchoose">
							<uni-data-select
							        v-model="valiFormData.jobchoose"
							        :localdata="jobs"
							        @change="jobchange">
							</uni-data-select>
						</uni-forms-item>
						<uni-forms-item label="咨询方向" label-width=60 label-position="top" name="consult">
							<uni-data-checkbox v-model="valiFormData.consult" multiple :localdata="consults" />
						</uni-forms-item>
						<uni-forms-item label="收费标准(元/小时)" label-width=60 name="pay">
							<uni-number-box :value="0" :step="10" :min="0" :max="999" v-model="valiFormData.pay"/>
						</uni-forms-item>
						<uni-forms-item label="公司邮箱" label-width=60 name="email">
							<uni-easyinput
								trim="all" 
								v-model="valiFormData.email" 
								placeholder="请输入邮箱">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="验证码" name="code">
							<view class="button-group">
								<uni-easyinput
									trim="all" 
									v-model="valiFormData.code" 
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
				show_again: 0, //  显示发送验证码||请稍后按钮
				count: "", // 等待时间
				timer: null, //定时器
				flag:0,
				valiFormData: {
					company: '',
					name: '',
					number: '',
					jobchoose: 0,
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
						{value: 5, text: '其他'}
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
		onLoad() {
			this.user_detail.phone=getApp().globalData.ph
			const db1 = uniCloud.database();
			db1.collection('user_detail').where({
										  phone: {
										    $eq: this.user_detail.phone
										  }
										}).limit(1).get().then(res => {
											if (res.result && res.result.data && res.result.data.length > 0)
											{
										    this.user_detail = res.result.data[0]
											this.flag=1
											//getApp().globalData.st = this.testing.status
											}
										})
			
			
		},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.valiForm.setRules(this.rules)
		},
		methods: {
			submit(ref) {
							this.$refs[ref].validate().then(res => {
								console.log('success', res)
								/*uni.showToast({
									title: '校验通过'
								})*/
								
								this.user_detail.phone=getApp().globalData.ph
								this.user_detail.username=this.valiFormData.name
								this.user_detail.email=this.valiFormData.email
								this.user_detail.co=this.valiFormData.company
								this.user_detail.job_number=this.valiFormData.number
								this.user_detail.price=this.valiFormData.pay
								this.user_detail.post=this.valiFormData.jobchoose
								this.user_detail.tip_teacher=this.valiFormData.consult
								
								var value = this.user_detail.co
								const test =/^[a-zA-Z\u4e00-\u9fff]+$/
								if(!test.test(value)){
								   uni.showToast({
								   	title: '就职公司仅允许中文、英文',
								   	icon: 'none'
								   })
								   return false
								}
								var value = this.user_detail.username
								const test2 =/^[a-zA-Z0-9\u4e00-\u9fff_-]+$/
								if(!test2.test(value)){
								   uni.showToast({
								   	title: '用户名仅允许中文、英文、数字、符号-_',
								   	icon: 'none'
								   })
								   return false
								}
								var value = this.user_detail.job_number
								const test1 =/^[a-zA-Z0-9]+$/
								if(!test1.test(value)){
								   uni.showToast({
								   	title: '工号仅允许英文、数字',
								   	icon: 'none'
								   })
								   return false
								}
								
								
					
								const db = uniCloud.database();
								if(this.flag==0)
								{
								db.collection("user_detail").add(this.user_detail).then(e=>{
										console.log(e)
									})
								}
								else
								{
									
									db.collection("user_detail").where({
										phone: this.user_detail.phone
									}).update({
										username: this.user_detail.username,
										isTeacher: 1,
										status: 1,
										email: this.user_detail.email,
										co:this.user_detail.co,
										job_number: this.user_detail.job_number,
										price: this.user_detail.price,
										post:this.user_detail.post,
										tip_teacher: this.user_detail.tip_teacher
									}).then(res => {
										console.log("成功");
					
									  }).catch(err => {
										console.error("报错", err);
									  })
									
								}
									/*
								uni.switchTab({
									url: "../find_teacher/find_teacher"
								})*/
								uni.switchTab({
								url: "../index/index"
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
			          title: `请稍后重试(${this.count})`,
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