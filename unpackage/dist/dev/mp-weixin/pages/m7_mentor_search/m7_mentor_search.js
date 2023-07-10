"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: "",
      sortType: null,
      sortTypeList: [
        { value: null, text: "按相关度" },
        { value: "score", text: "按评分" },
        { value: "price", text: "按价格" }
      ],
      sort: "desc",
      sortList: [
        { value: "asc", text: "升序" },
        { value: "desc", text: "降序" }
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
        { value: 9, text: "其他" }
      ],
      tagList: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      mentorList: []
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
      let db = common_vendor.Ds.database();
      let _ = db.command;
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
      db.collection("user_detail").where(
        //多选搜索
        tag ? {
          //导师标签
          tip_teacher: tag
        } : post ? {
          //导师岗位
          post
        } : (
          //单选搜索
          _.or([
            {
              username: new RegExp(this.searchValue, "i")
              //用户名
            },
            {
              co: new RegExp(this.searchValue, "i")
              //工作单位
            }
          ])
        )
      ).orderBy(this.sortType, this.sort).get().then((res) => {
        this.mentorList = res.result.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    clear() {
      this.searchValue = "";
      this.getList();
    },
    navigateToTutorDetail(id) {
      common_vendor.index.navigateTo({
        url: `../m3_detail_appt_consult/m3_detail_appt_consult?id=${id}`
        // 这里的 '/pages/tutorDetail/tutorDetail' 应替换为你的导师详情页面路径
      });
    }
  },
  onBackPress() {
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_uni_data_checkbox2 + _easycom_uni_data_select2 + _easycom_uni_tag2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_data_checkbox + _easycom_uni_data_select + _easycom_uni_tag + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.clear),
    b: common_vendor.o(($event) => $data.searchValue = $event),
    c: common_vendor.p({
      focus: false,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      maxlength: 20,
      modelValue: $data.searchValue
    }),
    d: common_vendor.o((...args) => $options.getList && $options.getList(...args)),
    e: common_vendor.o($options.getList),
    f: common_vendor.o(($event) => $data.sortType = $event),
    g: common_vendor.p({
      mode: "button",
      localdata: $data.sortTypeList,
      modelValue: $data.sortType
    }),
    h: $data.sortType
  }, $data.sortType ? {
    i: common_vendor.o($options.getList),
    j: common_vendor.o(($event) => $data.sort = $event),
    k: common_vendor.p({
      localdata: $data.sortList,
      placeholder: "排序方式",
      clear: false,
      modelValue: $data.sort
    })
  } : {}, {
    l: $data.mentorList.length > 0
  }, $data.mentorList.length > 0 ? {
    m: common_vendor.f($data.mentorList, (tutor, index, i0) => {
      return {
        a: common_vendor.t(`${tutor.username} - ${$options.getJobText(tutor.post)}`),
        b: common_vendor.t(`${tutor.score}分`),
        c: common_vendor.t(`, 价格 ¥${tutor.price}/小时`),
        d: common_vendor.f(tutor.tip_teacher, (tip, idx, i1) => {
          return {
            a: idx,
            b: "60f10953-5-" + i0 + "-" + i1 + "," + ("60f10953-4-" + i0),
            c: common_vendor.p({
              text: $options.getConsultText(tip),
              type: "primary"
            })
          };
        }),
        e: common_vendor.t(tutor.comment),
        f: index,
        g: common_vendor.o(($event) => $options.navigateToTutorDetail(tutor.phone), index),
        h: "60f10953-4-" + i0 + ",60f10953-3"
      };
    }),
    n: common_vendor.p({
      border: false,
      direction: "column",
      clickable: true
    }),
    o: common_vendor.p({
      border: false
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-60f10953"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m7_mentor_search/m7_mentor_search.vue"]]);
wx.createPage(MiniProgramPage);
