"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "名字不可改",
      identity: "求职者",
      goal: [{
        id: 0,
        name: "看看机会"
      }, {
        id: 1,
        name: "找实习"
      }, {
        id: 2,
        name: "找校招"
      }],
      index: 0,
      direction: [
        { name1: "看看机会" },
        { name1: "前端开发" },
        { name1: "后端开发" },
        { name1: "C++开发" },
        { name1: "Java开发" },
        { name1: "算法" },
        { name1: "测试开发" },
        { name1: "产品经理" },
        { name1: "运营" },
        { name1: "HR" },
        { name1: "商务拓展" },
        { name1: "其他" }
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
  _easycom_uni_section2();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
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
    d: common_vendor.t($data.goal[$data.index].name),
    e: common_vendor.o((...args) => $options.changeGoal && $options.changeGoal(...args)),
    f: $data.index,
    g: $data.goal,
    h: common_vendor.p({
      title: "求职方向:",
      type: "line"
    }),
    i: common_vendor.t($data.direction[$data.index1].name1),
    j: common_vendor.o((...args) => $options.changeDirection && $options.changeDirection(...args)),
    k: $data.index1,
    l: $data.direction
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_seeker_information/m4_seeker_information.vue"]]);
wx.createPage(MiniProgramPage);
