<template>
	<view>
	<view class="uni-inline-item uni-row area-padding">
		<view style="width: 100rpx;">
			<uni-icons @click="showDrawer('showLeft')" type="bars" size="25" color="#007AFF"></uni-icons>
			<uni-drawer ref="showLeft" mode="left" :width="300">
				<view class="container">
					<uni-section title="筛选" type="line">
						<view class="form-container">
							<uni-forms>
								<uni-forms-item label="咨询职位" label-width=60>
									<uni-data-select
									        v-model="jobvalue"
									        :localdata="job"
									        @change="changeJob"
											placeholder="请选择职位"
									      ></uni-data-select>
								</uni-forms-item>
								<uni-forms-item label="咨询方向" label-width=60>
									<uni-data-select
									        v-model="consultvalue"
									        :localdata="consult"
									        @change="changeconsult"
											placeholder="请选择咨询方向"
									      ></uni-data-select>
								</uni-forms-item>
								<uni-forms-item label="价格区间" label-width=60>
									<uni-data-select
									        v-model="payvalue"
									        :localdata="pay"
									        @change="changepay"
											placeholder="请选择价格区间"
									      ></uni-data-select>
								</uni-forms-item>
								<uni-forms-item label="评分区间" label-width=60>
									<uni-data-select
									        v-model="scorevalue"
									        :localdata="score"
									        @change="changescore"
											placeholder="请选择评分区间"
									      ></uni-data-select>
								</uni-forms-item>
							</uni-forms>
							
							<view class="choose">
								<button style="background-color:#007AFF; color: #fff;" size="mini" @click="closeDrawer('showLeft')">筛选</button>
							</view>
						</view>
					</uni-section>
				</view>
			</uni-drawer>
		</view>
		<view class="text" style="-webkit-flex: 1;flex: 1;">
			<uni-search-bar @confirm="search" :focus="false" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
							@cancel="cancel" @clear="clear" placeholder="请输入搜索内容"
							clearButton="auto" cancelButton="none">
			</uni-search-bar>
		</view>
		<view class="text" style="width: 170rpx; margin-left: 10px;">
			<button class="mini-btn" style="background-color:#007AFF; color: #fff;" size="mini" @click="searchclick">搜索</button>
		</view>
	</view>
		<view class="list-area">
			<uni-list>
				<uni-list-item title="默认 navigateTo 方式跳转页面" to="../m3_detail_appt_consult/m3_detail_appt_consult" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
				<uni-list-item title="列表文字" note="列表描述信息"></uni-list-item>
			</uni-list>				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '',
				jobvalue: '',
				consultvalue: '',
				job: [
				  { value: 0, text: "前端" },
				  { value: 1, text: "后端" },
				  { value: 2, text: "产品经理" },
				  { value: 3, text: "运营" },
				  { value: 4, text: "策划" },
				],
				consult: [
					{ value: 0, text: "简历修改" },
					{ value: 1, text: "面试准备" },
					{ value: 2, text: "薪资" },
					{ value: 3, text: "职业规划" },
				],
				pay: [
					{ value: 0, text: "100元以下" },
					{ value: 1, text: "100-150元" },
					{ value: 2, text: "150-200元" },
					{ value: 3, text: "200元以上" },
					{ value: 4, text: "无限制" },
				],
				score: [
					{ value: 0, text: "4.5以下" },
					{ value: 1, text: "4.5-4.6" },
					{ value: 2, text: "4.7-4.8" },
					{ value: 3, text: "4.9-5.0" },
					{ value: 4, text: "无限制" },
				]
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear事件，清除值为：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			showDrawer() {
				this.$refs.showLeft.open();
			},
			closeDrawer() {
				this.$refs.showLeft.close();
			},
			searchclick() {
				console.log(this.searchValue)
			},
			changeJob(e) {
				console.log("e:", e);
			},
			changeconsult(e) {
				console.log("e:", e);
			},
			changepay(e) {
				console.log(e)
			},
			changescore(e) {
				console.log(e)
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>


<style lang="scss">
.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}
.area-padding {
	background-color: $uni-bg-color;
	margin: auto;
	justify-content: center;
	padding: 10px 0;
}
.container {
	margin: 20px;
}
.choose {
	text-align: center;
}
.list-area {
	margin-top: 5px;
}
</style>
