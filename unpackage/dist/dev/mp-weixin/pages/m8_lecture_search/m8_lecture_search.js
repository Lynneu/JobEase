"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: "",
      lectureList: [],
      sortType: null,
      sortTypeList: [
        { value: null, text: "按相关度" },
        { value: "lecture_price", text: "按价格" }
      ],
      sort: "desc",
      sortList: [
        { value: "asc", text: "升序" },
        { value: "desc", text: "降序" }
      ],
      tagList: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ]
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getConsultText(tip) {
      let consultObj = this.tagList.find((cons) => cons.value === tip);
      return consultObj ? consultObj.text : "";
    },
    getList() {
      let db = common_vendor.Ds.database();
      let _ = db.command;
      let tag = null;
      this.tagList.map((item) => {
        if (item.text == this.searchValue) {
          tag = item.value;
        }
      });
      db.collection("lecture").where(
        tag ? {
          lecture_label: tag
        } : _.or([
          {
            lecture_title: new RegExp(
              this.searchValue,
              "i"
            )
            //主题
          }
        ])
      ).orderBy(this.sortType, this.sort).get().then((res) => {
        this.lectureList = res.result.data;
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
        url: `../m3_detail_lecture/m3_detail_lecture?id=${id}`
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
    l: $data.lectureList.length > 0
  }, $data.lectureList.length > 0 ? {
    m: common_vendor.f($data.lectureList, (tutor, index, i0) => {
      return {
        a: common_vendor.t(`${tutor.lecture_title}`),
        b: common_vendor.t(`已预约${tutor.lecture_reserved}人`),
        c: common_vendor.t(`, 价格 ¥${tutor.lecture_price}/小时`),
        d: "c55a9936-5-" + i0 + "," + ("c55a9936-4-" + i0),
        e: common_vendor.p({
          text: $options.getConsultText(tutor.lecture_label),
          type: "primary"
        }),
        f: common_vendor.t(tutor.lecture_content),
        g: index,
        h: common_vendor.o(($event) => $options.navigateToTutorDetail(tutor._id), index),
        i: "c55a9936-4-" + i0 + ",c55a9936-3"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c55a9936"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m8_lecture_search/m8_lecture_search.vue"]]);
wx.createPage(MiniProgramPage);
