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
			<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="user_detail" where="isTeacher==1">
						<view v-if="error">{{error.message}}</view>
						<view v-else>
							<uni-list :border="false" style="background-color: #f8f8f8;">
							    <uni-list-item 
									:border="false"
							        v-for="(tutor, index) in filteredData || data" 
									direction="column"
							        :key="index"
							        @click="navigateToTutorDetail(tutor.phone)"
							    >
									<template v-slot:header>
										<view>
											<text>{{`${tutor.username} - ${getJobText(tutor.post)}`}}</text>
										</view>
									</template>
									<template v-slot:body>
										<view style="display: flex;">
											<text style="font-size: 0.9em; color: #f0ad4e;">{{`${tutor.score}分`}}</text>
											<text style="font-size: 0.8em; color: #999;">{{`, 价格 ¥${tutor.price}/小时`}}</text>
										</view>
									</template>
							        <template v-slot:footer>
							            <view style="display: flex;flex-wrap: wrap;">
							                <uni-tag 
												style="font-size: 0.8em;margin-right: 10px;margin-top: 5px;"
							                	v-for="(tip, idx) in tutor.tip_teacher" 
							                	:key="idx" 
							                	:text="getConsultText(tip)" 
							                	type="primary" 
							                	>
							                </uni-tag>
							            </view>
										<view class="comment-area">
											<text>{{tutor.comment}}</text>
										</view>
							        </template>
							    </uni-list-item>
							</uni-list>
						</view>
					</unicloud-db>		
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
				payvalue: '',
				scorevalue: '',
				tutors: [],
				filteredData: null,
				job: [
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
				consult: [
					{ value: 0, text: '简历优化' },
					{ value: 1, text: '面试经验' },
					{ value: 2, text: '就业指导' },
					{ value: 3, text: '职业规划' },
					{ value: 4, text: '薪资谈判' },
					{ value: 5, text: '其他' }
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
			filter() {
				  this.tutors = this.$refs.udb.dataList
				  console.log('111')
				  console.log(this.tutors)
			      let data = this.tutors; 
			      if (this.jobvalue !== '') {
			        data = data.filter(tutor => tutor.post === this.jobvalue);
			      }
			      if (this.consultvalue !== '') {
			          data = data.filter(tutor => tutor.tip_teacher.includes(this.consultvalue));
			      }
			      if (this.payvalue !== '') {
			          const payRanges = [
			              { min: 0, max: 100 },
			              { min: 100, max: 150 },
			              { min: 150, max: 200 },
			              { min: 200, max: Infinity },
			              { min: 0, max: Infinity },
			          ];
			      
			          const { min, max } = payRanges[this.payvalue];
			      
			          data = data.filter(tutor => tutor.price >= min && tutor.price < max);
			      }
			      if (this.scorevalue !== '') {
			        const scoreRanges = [
			            { min: 0, max: 4.5 },
			            { min: 4.5, max: 4.6 },
			            { min: 4.7, max: 4.8 },
			            { min: 4.9, max: 5.0 },
			            { min: 0, max: 5.0 },
			        ];
			                  
			        const { min, max } = scoreRanges[this.scorevalue];
			                  
			        data = data.filter(tutor => tutor.score >= min && tutor.score < max);
			      }
			      this.filteredData = data;
			    },
			closeDrawer(ref) {
			  this.$refs[ref].close();
			  this.filter(); // 在关闭筛选抽屉时调用filter函数进行过滤
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
			},
			getJobText(value) {
				let jobObj = this.job.find(job => job.value === value);
				return jobObj ? jobObj.text : '';
			},
			getConsultText(tip) {
						let consultObj = this.consult.find(cons => cons.value === tip);
						return consultObj ? consultObj.text : '';
					},
			navigateToTutorDetail(id) {
				console.log(id)
			    uni.navigateTo({
			        url: `../m3_detail_appt_consult/m3_detail_appt_consult?id=${id}`  
			    });
			},
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

    /* Setting the list items to have a uniform background, and round edges */
    .uni-list-item {
        background-color: #fff;
        border-radius: 10px;
        margin: 5px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
    }

    /* Setting the tutor's name and job to be bold, and larger */
    .uni-list-item text {
        font-size: 1.1em;
        font-weight: bold;
    }

    /* Making the consult tags stand out a bit more */
    .uni-tag {
        background-color: #007AFF;
        color: #fff;
    }

    /* Aligning the price and score information more neatly */
  //   .uni-list-item view {
  //       display: flex;
		// padding-top: 5px;
  //        }
		
    .uni-list-item view .uni-tag {
        margin-right: 10px;  /* 增加你需要的间距 */
    }
    
    .uni-list-item view .uni-tag:last-child {
        margin-right: 0;  /* 为最后一个标签移除右边距 */
    }
    /* Style for search bar */
    .uni-search-bar {
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }

    /* Style for drawer */
    .uni-drawer {
        padding: 10px;
        background-color: #fff;
    }

    /* Style for drawer forms */
    .form-container {
        padding: 20px;
        border-radius: 10px;
        
    }
    
    /* Style for drawer button */
    .choose button {
        border-radius: 10px;
        padding: 5px 50px;
    }
	.comment-area {
		padding-top: 10px;
		color: #999;
		font-size: 0.7em;
		font-weight: normal;
	}
</style>
