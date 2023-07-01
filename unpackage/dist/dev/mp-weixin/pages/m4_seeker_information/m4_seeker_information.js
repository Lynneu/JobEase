"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "名字不可改",
      identity: "求职者",
      goal: [{
        value: 0,
        text: "看看机会"
      }, {
        value: 1,
        text: "找实习"
      }, {
        value: 2,
        text: "找校招"
      }],
      index: 0,
      direction: [
        { value: 0, text: "看看机会" },
        { value: 1, text: "前端开发" },
        { value: 2, text: "后端开发" },
        { value: 3, text: "C++开发" },
        { value: 4, text: "Java开发" },
        { value: 5, text: "算法" },
        { value: 6, text: "测试开发" },
        { value: 7, text: "产品经理" },
        { value: 8, text: "运营" },
        { value: 9, text: "HR" },
        { value: 10, text: "其他" }
      ],
      index1: 0
    };
  },
  methods: {
    changeGoal(e) {
      this.index = e.detail.value;
    },
    changeDirection(e) {
      this.index1 = e.detail.value;
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_section2 + _easycom_uni_data_select2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_data_select)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "用户名:" + $data.username,
      type: "line"
    }),
    b: common_vendor.p({
      title: "身份:" + $data.identity,
      type: "line"
    }),
    c: common_vendor.p({
      title: "就业目标:",
      type: "line"
    }),
    d: common_vendor.o($options.changeGoal),
    e: common_vendor.o(($event) => $data.index = $event),
    f: common_vendor.p({
      localdata: $data.goal,
      clear: false,
      modelValue: $data.index
    }),
    g: common_vendor.p({
      title: "求职方向:",
      type: "line"
    }),
    h: common_vendor.o($options.changeDirection),
    i: common_vendor.o(($event) => $data.index1 = $event),
    j: common_vendor.p({
      localdata: $data.direction,
      clear: false,
      modelValue: $data.index1
    }),
    k: common_vendor.o((...args) => _ctx.savaInfo && _ctx.savaInfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_seeker_information/m4_seeker_information.vue"]]);
wx.createPage(MiniProgramPage);
