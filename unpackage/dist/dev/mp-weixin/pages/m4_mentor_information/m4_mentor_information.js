"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      company_name: "不可改",
      real_name: "不可改",
      email: "不可改",
      consultation_direction: "不可改",
      numberValue: 100,
      mentor_introduction: "可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改 可修改"
    };
  },
  methods: {
    change1(value) {
      this.numberValue = value;
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_number_box2 + _easycom_uni_section2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.company_name),
    b: common_vendor.t($data.real_name),
    c: common_vendor.t($data.email),
    d: common_vendor.t($data.consultation_direction),
    e: common_vendor.o($options.change1),
    f: common_vendor.p({
      max: 9999,
      step: 10,
      value: $data.numberValue
    }),
    g: common_vendor.p({
      title: "咨询价格 : " + $data.numberValue + "元/时间单位",
      type: "line",
      padding: true
    }),
    h: common_vendor.t($data.mentor_introduction)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m4_mentor_information/m4_mentor_information.vue"]]);
wx.createPage(MiniProgramPage);
