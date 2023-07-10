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
          				<uni-forms-item label="讲座时长" label-width=60>
          					<uni-data-select
          					        v-model="timevalue"
          					        :localdata="time"
          					        @change="changetime"
          							placeholder="请选择讲座时长"
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
      <view class="text" style="-webkit-flex: 1;flex: 1;" @click="openSearchPage">
        <uni-search-bar :focus="false" v-model="searchValue" placeholder="请输入搜索内容" clearButton="auto" cancelButton="none"></uni-search-bar>
      </view>
      <view class="text" style="width: 170rpx; margin-left: 10px;">
        <button style="background-color:#007AFF; color: #fff;" size="mini" @click="searchclick">重置</button>
      </view>
    </view>
    <view class="list-area">
    			<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, error, options, hasMore}" 
				collection="lecture" @load="onqueryload" :options="options" :page-size="pagesize">
    						<view v-if="error">{{error.message}}</view>
							<view v-else-if="loading" class="loading">加载中...</view>
    						<view v-else>
    							<uni-list :border="false" style="background-color: #f8f8f8;">
    							    <uni-list-item 
    									:border="false"
    							        v-for="(tutor, index) in filteredData || data"
    									direction="column"
    							        :key="index"
    							        @click="navigateToTutorDetail(tutor._id)"
    							        clickable
    							    >
    									<template v-slot:header>
											<view class="title_display">
												<view >
													<text>{{`${tutor.lecture_title}`}}</text>
												</view>
												<uni-tag v-if="new Date(tutor.lecture_time) < new Date()" text="已结束报名"/>
											</view>
    									</template>
    									<template v-slot:body>
    										<view style="display: flex;">
    											<text style="font-size: 0.9em; color: #f0ad4e;">{{`已预约${tutor.lecture_reserved}人`}}</text>
    											<text style="font-size: 0.8em; color: #999;">{{`, 价格 ¥${tutor.lecture_price}/小时`}}</text>
    										</view>
    									</template>
    							        <template v-slot:footer>
    							            <view style="display: flex;flex-wrap: wrap;">
    							                <uni-tag 
    							                  style="font-size: 0.8em; margin-right: 10px; margin-top: 5px;"
												  class="tiptag"
    							                  :text="getConsultText(tutor.lecture_label)" 
    							                  type="primary" 
    							                >
    							                </uni-tag>
    							            </view>
    										<view class="comment-area">
    											<text>{{tutor.lecture_content}}</text>
    										</view>				
    							        </template>
    							    </uni-list-item>
    							</uni-list>
								<uni-load-more v-if="!hasMore" status="noMore"></uni-load-more>
    						</view>
    					</unicloud-db>		
    		</view>
    <uni-fab v-if="role == '1'" ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" />
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
	  options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
	  pagesize: 20,
      searchValue: '',
	  consultvalue: '',
	  payvalue: '',
	  timevalue: '',
      title: 'uni-fab',
      directionStr: '垂直',
      horizontal: 'right',
      vertical: 'bottom',
      direction: 'horizontal',
	  lectrue: [],
	  filteredData: null,
	  recoData: null,
	  userphone: '',
	  userTag: 6,
	  newuserTag: 6,
	  role: '',
	  sortdata: [],
      pattern: {
        color: '#7A7E83',
        backgroundColor: '#fff',
        selectedColor: '#fff',
        buttonColor: '#007AFF',
        iconBackgroundColor: '#fff'
      },
      is_color_type: false,
      content: [{
        iconWidth: "24px",
        iconPath: '../../static/image/icon_create_lecture.png',
        // selectedIconPath: '../../static/image/icon_create_lecture_HL.png',
        text: '发布讲座',
        active: false
      }],
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
	  time: [
		{ value: 0, text: "30分钟以下" },
		{ value: 1, text: "30-60分钟" },
		{ value: 2, text: "60分钟以上" },
		{ value: 3, text: "无限制" },
	  ]
    }
  },
  onBackPress() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close(false)
      return true
    }
    return false
  },

  onLoad: function() {
	this.role = getApp().globalData.st
  	this.userphone = getApp().globalData.ph
	this.userTag = getApp().globalData.tip
  	console.log(this.userTag)
  },
  // onReady() {
  // 		if (this.userTag) {
  // 			this.$refs.udb.loadData()
  // 		}
  // 	},
	onShow: function() {
		  this.role = getApp().globalData.st
		  console.log('role:' + this.role)
		  this.newuserTag = getApp().globalData.tip
		  if(this.newuserTag != 6 && this.newuserTag != this.userTag) {
			  this.userTag = this.newuserTag
			  console.log('tag change')
			  //this.searchclick()
			  this.$refs.udb.loadData({
			    clear: true //可选参数，是否清空数据
			  })
		  }	  
	},
	
  onPullDownRefresh() { //下拉刷新
        this.$refs.udb.loadData({
          clear: true //可选参数，是否清空数据
        }, () => {
          uni.stopPullDownRefresh()
        })
      },
  onReachBottom() { //滚动到底翻页
        this.$refs.udb.loadMore()
      },
  methods: {
	   onqueryload(data, ended) {
		   
			if (this.userTag != 6) {
				data = this.recommendAlgorithm(data);
			}	
	  		// console.log(data)
	      },
	  async fetchUserTag() {
	          return new Promise((resolve, reject) => {
	              const db = uniCloud.database()
	              db.collection('user_detail')
	                  .where({
	                      phone: {
	                          $eq: this.userphone
	                      }
	                  }).get()
	                  .then((res) => {
	                      console.log('res:' + res.result.data[0].tip_student)
	                      this.userTag = res.result.data[0].tip_student
	                      console.log(this.userTag)
	                      resolve(this.userTag);
	                  }).catch((err) => {
	                      console.log(err.message)
	                      reject(err);
	                  })
	          });
	      },
	//打开搜索页
	openSearchPage() {
	    uni.navigateTo({
	        url: "../m8_lecture_search/m8_lecture_search",
	    });
	},
    search(res) {
      uni.showToast({
        title: '搜索：' + res.value,
        icon: 'none'
      })
    },
    trigger(e) {
      console.log(e)
      // this.content[e.index].active = !e.item.active
      this.$refs.fab.close()
      uni.navigateTo({
        url: '../m4_release_lecture/m4_release_lecture'
      });
    },
    showDrawer(ref) {
      this.$refs[ref].open();
    },
    filter() {
		  this.lectrue = this.$refs.udb.dataList
		  console.log(this.lectrue)
          let data = this.lectrue; 
          if (this.consultvalue !== '') {
            data = data.filter(lecture => lecture.lecture_label === this.consultvalue);
          }
          if (this.payvalue !== '') {
              const payRanges = [
                  { min: 0, max: 100 },
                  { min: 100, max: 150 },
                  { min: 150, max: 200 },
                  { min: 200, max: Infinity },
                  { min: 0, max: Infinity },
              ];
			  console.log('pay:'+this.payvalue)
              const { min, max } = payRanges[this.payvalue];
          
              data = data.filter(lecture => lecture.lecture_price >= min && lecture.lecture_price < max);
          }
          if (this.timevalue !== '') {
            const timeRanges = [
                { min: 0, max: 30 },
                { min: 30, max: 60 },
                { min: 60, max: Infinity },
                { min: 0, max: Infinity },
            ];
            console.log('time:'+this.timevalue)
            const { min, max } = timeRanges[this.timevalue];
                      
            data = data.filter(lecture => lecture.lecture_duration >= min && lecture.lecture_duration < max);
          }
          this.filteredData = data;
        },
    closeDrawer(ref) {
      this.$refs[ref].close();
      this.filter(); // 在关闭筛选抽屉时调用filter函数进行过滤
    },
    searchclick() {
    	this.filteredData = null
    	this.$refs.udb.refresh()
    },
	changeJob(e) {
		console.log(e)
	},
	changeconsult(e) {
		console.log(e)
	},
	changepay(e) {
		console.log(e)
	},
	changetime(e) {
		console.log(e)
	},
	getConsultText(tip) {
				let consultObj = this.consult.find(cons => cons.value === tip);
				return consultObj ? consultObj.text : '';
			},
	navigateToTutorDetail(id) {
		console.log(id)
	    uni.navigateTo({
	        url: `../m3_detail_lecture/m3_detail_lecture?lecture=${id}`  
	    });
	},
	recommendAlgorithm(lectures) {
		
		// 不进行过滤，让所有讲座都参与排序
		lectures = lectures.sort((a, b) => {
		let scoreA = a.lecture_label == this.userTag ? 1 : 0;
		let scoreB = b.lecture_label == this.userTag ? 1 : 0;
		  // 如果评分相同，以时间顺序进行排序
		  if (scoreA === scoreB) {
		    return new Date(b.lecture_time) - new Date(a.lecture_time);
		  }
		  // 以匹配评分进行排序
		  return scoreB - scoreA;
		});
		return lectures
	}
  },
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
    .tiptag {
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
	.button{
		flex: 1;
		text-align: right;
		padding-right: 10px;
	
	}
	.title_display{
		display: flex;
		justify-content: space-between;
	}
	.button_text{
		font-size: 5px;
		padding-left: 10px;
		padding-right: 10px;
	}
</style>