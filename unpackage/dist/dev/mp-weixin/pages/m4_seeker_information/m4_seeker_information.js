"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "不可改",
      goal: [{
        id: 0,
        name: "保密"
      }, {
        id: 1,
        name: "找实习"
      }, {
        id: 2,
        name: "找工作"
      }],
      index: 0,
      direction: [{
        id: 0,
        name: "保密"
      }, {
        id: 1,
        name: "互联网IT"
      }, {
        id: 2,
        name: "通信/硬件"
      }, {
        id: 3,
        name: "设计/传媒"
      }, {
        id: 4,
        name: "人事行政"
      }, {
        id: 5,
        name: "金融/法务"
      }, {
        id: 6,
        name: "生产制造"
      }, {
        id: 7,
        name: "教育培训"
      }, {
        id: 8,
        name: "生物医疗"
      }, {
        id: 9,
        name: "服务业"
      }, {
        id: 10,
        name: "房产/建筑"
      }, {
        id: 11,
        name: "其他"
      }],
      index1: 0
    };
  },
  methods: {
    bindPickerChange(e) {
      this.index = e.detail.value;
    },
    bindPickerChange1(e) {
      this.index1 = e.detail.value;
    }
  },
  onLoad() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.username),
    b: common_vendor.t($data.goal[$data.index].name),
    c: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    d: $data.index,
    e: $data.goal,
    f: common_vendor.t($data.direction[$data.index1].name),
    g: common_vendor.o((...args) => $options.bindPickerChange1 && $options.bindPickerChange1(...args)),
    h: $data.index1,
    i: $data.direction
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m4_seeker_information/m4_seeker_information.vue"]]);
wx.createPage(MiniProgramPage);
