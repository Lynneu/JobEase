<template>
	<view class="page">
		<view class="container">
				<view class="form-container">
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="就职公司" label-width=60 name="company">
							<uni-easyinput 
								maxlength="20"
								trim="all" 
								v-model="valiFormData.company" 
								placeholder="最大输入长度为20" 
								@input="input">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="真实姓名" label-width=60 name="name"> 
							<uni-easyinput
								maxlength="10"
								trim="all" 
								v-model="valiFormData.name" 
								placeholder="最大输入长度为10" 
								@input="input">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="工号" name="number">
							<uni-easyinput
								maxlength="10"
								trim="all" 
								v-model="valiFormData.number" 
								placeholder="最大输入长度为10" 
								@input="input">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="岗位" name="jobchoose">
							<uni-data-select
							        v-model="valiFormData.jobchoose"
							        :localdata="jobs"
							        @change="bindPickerChange">
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
								placeholder="请输入邮箱" 
								@input="input">
							</uni-easyinput>
						</uni-forms-item>
						<uni-forms-item label="验证码" name="code">
							<view class="button-group">
								<uni-easyinput
									trim="all" 
									v-model="valiFormData.code" 
									placeholder="请输入验证码" 
									@input="input">
								</uni-easyinput>
								<button size="mini" class="button">获取验证码</button>
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
				valiFormData: {
					company: '',
					name: '',
					number: '',
					jobchoose: 0,
					consult: [0],
					pay: '',
					email: '',
					code: ''
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
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.valiFormData.setRules(this.valiFormData)
		},
		methods: {
			submit(ref) {
							this.$refs[ref].validate().then(res => {
								console.log('success', res);
								uni.showToast({
									title: `校验通过`
								})
							}).catch(err => {
								console.log('err', err);
							})
						},
	
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