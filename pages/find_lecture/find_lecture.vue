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
      <view class="text" style="-webkit-flex: 1;flex: 1;">
        <uni-search-bar @confirm="search" :focus="false" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @clear="clear" placeholder="请输入搜索内容" clearButton="auto" cancelButton="none"></uni-search-bar>
      </view>
      <view class="text" style="width: 170rpx; margin-left: 10px;">
        <button style="background-color:#007AFF; color: #fff;" size="mini" @click="searchclick">搜索</button>
      </view>
    </view>
    <view class="list-area">
    			<unicloud-db ref="udb" v-slot:default="{data, loading, error, options}" collection="lecture" >
    						<view v-if="error">{{error.message}}</view>
    						<view v-else>
    							<uni-list :border="false" style="background-color: #f8f8f8;">
    							    <uni-list-item 
    									:border="false"
    							        v-for="(tutor, index) in filteredData || data"
    									direction="column"
    							        :key="index"
    							        @click="navigateToTutorDetail(tutor._id)"
    							    >
    									<template v-slot:header>
    										<view>
    											<text>{{`${tutor.lecture_title}`}}</text>
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
    												style="font-size: 0.8em;margin-right: 10px;margin-top: 5px;"
    							                	v-for="(tip, idx) in tutor.lecture_label" 
    							                	:key="idx" 
    							                	:text="getConsultText(tip)" 
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
    						</view>
    					</unicloud-db>		
    		</view>
    <uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical" :direction="direction" @trigger="trigger" />
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
      console.log(this.searchValue())
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
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
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