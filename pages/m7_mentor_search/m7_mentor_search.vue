<template>
    <view>
        <view
            class="uni-inline-item uni-row area-padding"
            style="padding: 10px"
        >
            <view class="text" style="-webkit-flex: 1; flex: 1">
                <uni-search-bar
                    :focus="false"
                    v-model="searchValue"
                    @clear="clear"
                    placeholder="请输入搜索内容"
                    clearButton="auto"
                    cancelButton="none"
                    :maxlength="20"
                >
                </uni-search-bar>
            </view>
            <view class="text" style="margin-left: 10px">
                <button
                    class="mini-btn"
                    style="background-color: #007aff; color: #fff"
                    size="mini"
                    @click="getList"
                >
                    搜索
                </button>
            </view>
        </view>
        <view style="display: flex; align-items: center; padding: 0 15px">
            <uni-data-checkbox
                mode="button"
                v-model="sortType"
                :localdata="sortTypeList"
                @change="getList"
            ></uni-data-checkbox>
            <uni-data-select
                v-model="sort"
                :localdata="sortList"
                placeholder="排序方式"
                :clear="false"
                @change="getList"
                v-if="sortType"
            ></uni-data-select>
        </view>
        <uni-list
            :border="false"
            style="background-color: #f8f8f8"
            v-if="mentorList.length > 0"
        >
            <uni-list-item
                :border="false"
                v-for="(tutor, index) in mentorList"
                direction="column"
                :key="index"
                @click="navigateToTutorDetail(tutor.phone)"
                clickable
            >
                <template v-slot:header>
                    <view>
                        <text>{{
                            `${tutor.username} - ${getJobText(tutor.post)}`
                        }}</text>
                    </view>
                </template>
                <template v-slot:body>
                    <view style="display: flex">
                        <text style="font-size: 0.9em; color: #f0ad4e">{{
                            `${tutor.score}分`
                        }}</text>
                        <text style="font-size: 0.8em; color: #999">{{
                            `, 价格 ¥${tutor.price}/小时`
                        }}</text>
                    </view>
                </template>
                <template v-slot:footer>
                    <view style="display: flex; flex-wrap: wrap">
                        <uni-tag
                            style="
                                font-size: 0.8em;
                                margin-right: 10px;
                                margin-top: 5px;
                            "
                            v-for="(tip, idx) in tutor.tip_teacher"
                            :key="idx"
                            :text="getConsultText(tip)"
                            type="primary"
                        >
                        </uni-tag>
                    </view>
                    <view class="comment-area">
                        <text>{{ tutor.comment }}</text>
                    </view>
                </template>
            </uni-list-item>
        </uni-list>
        <view v-else style="text-align: center">暂无数据</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            searchValue: "",
            sortType: null,
            sortTypeList: [
                { value: null, text: "按相关度" },
                { value: "score", text: "按评分" },
                { value: "price", text: "按价格" },
            ],
            sort: "desc",
            sortList: [
                { value: "asc", text: "升序" },
                { value: "desc", text: "降序" },
            ],
            postList: [
                { value: 0, text: "前端开发" },
                { value: 1, text: "后端开发" },
                { value: 2, text: "C++开发" },
                { value: 3, text: "Java开发" },
                { value: 4, text: "算法" },
                { value: 5, text: "测试开发" },
                { value: 6, text: "产品经理" },
                { value: 7, text: "运营" },
                { value: 8, text: "HR" },
                { value: 9, text: "其他" },
            ],
            tagList: [
                { value: 0, text: "简历优化" },
                { value: 1, text: "面试经验" },
                { value: 2, text: "就业指导" },
                { value: 3, text: "职业规划" },
                { value: 4, text: "薪资谈判" },
                { value: 5, text: "其他" },
            ],
            mentorList: [],
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getJobText(value) {
            let jobObj = this.postList.find((job) => job.value === value);
            return jobObj ? jobObj.text : "";
        },
        getConsultText(tip) {
            let consultObj = this.tagList.find((cons) => cons.value === tip);
            return consultObj ? consultObj.text : "";
        },
        getList() {
            //API方式 客户端js直接操作云数据库，查询list表的数据。无需服务器代码
            let db = uniCloud.database(); // 获取云数据库的引用
            let _ = db.command;
            //根据输入框值进行匹配
            let post = null;
            this.postList.map((item) => {
                if (item.text == this.searchValue) {
                    post = item.value;
                }
            });
            let tag = null;
            this.tagList.map((item) => {
                if (item.text == this.searchValue) {
                    tag = item.value;
                }
            });
            db.collection("user_detail")
                //模糊查询条件
                .where(
                    //多选搜索
                    tag
                        ? {
                              //导师标签
                              tip_teacher: tag,
                          }
                        : post
                        ? {
                              //导师岗位
                              post: post,
                          }
                        : //单选搜索
                          _.or([
                              {
                                  username: new RegExp(this.searchValue, "i"), //用户名
                              },
                              {
                                  co: new RegExp(this.searchValue, "i"), //工作单位
                              },
                          ])
                )
                //排序-默认降序
                .orderBy(this.sortType, this.sort)
                .get()
                .then((res) => {
                    // res 为数据库查询结果
                    this.mentorList = res.result.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        clear() {
            //重置列表
            this.searchValue = "";
            this.getList();
        },
        navigateToTutorDetail(id) {
            uni.navigateTo({
                url: `../m3_detail_appt_consult/m3_detail_appt_consult?id=${id}`, // 这里的 '/pages/tutorDetail/tutorDetail' 应替换为你的导师详情页面路径
            });
        },
    },
    onBackPress() {
        // #ifdef APP-PLUS
        plus.key.hideSoftKeybord();
        // #endif
    },
};
</script>

<style lang="less" scoped>
/deep/.uni-select {
    height: 28px !important;
    width: 60px !important;
}
</style>

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
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

/* Setting the tutor's name and job to be bold, and larger */
.uni-list-item text {
    font-size: 1.1em;
    font-weight: bold;
}

/* Making the consult tags stand out a bit more */
.uni-tag {
    background-color: #007aff;
    color: #fff;
}

/* Aligning the price and score information more neatly */
//   .uni-list-item view {
//       display: flex;
// padding-top: 5px;
//        }

.uni-list-item view .uni-tag {
    margin-right: 10px; /* 增加你需要的间距 */
}

.uni-list-item view .uni-tag:last-child {
    margin-right: 0; /* 为最后一个标签移除右边距 */
}
/* Style for search bar */
.uni-search-bar {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
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