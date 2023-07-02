"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      teacher_name: "小王",
      teacher_theme: "就业指导",
      teacher_score: "8",
      teacher_work: "啥都不行有限公司",
      teacher_cost: "30",
      teacher_content: "导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍导师介绍."
    };
  },
  methods: {
    appointconsult(e) {
      console.log(e);
      common_vendor.index.navigateTo({
        url: "../m3_appt_consult/m3_appt_consult"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_title2 + _easycom_uni_section2)();
}
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.teacher_name,
      color: "#027fff",
      type: "h1"
    }),
    b: common_vendor.p({
      title: "专业标签：" + $data.teacher_theme,
      type: "line",
      padding: "0px"
    }),
    c: common_vendor.p({
      title: "评　　分：" + $data.teacher_score + "分",
      type: "line"
    }),
    d: common_vendor.p({
      title: "工作单位：" + $data.teacher_work,
      type: "line"
    }),
    e: common_vendor.p({
      title: "咨询费用：" + $data.teacher_cost + " 元  / 30min",
      type: "line"
    }),
    f: common_vendor.p({
      title: "导师介绍",
      type: "circle"
    }),
    g: common_vendor.t($data.teacher_content),
    h: common_vendor.o((...args) => $options.appointconsult && $options.appointconsult(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m3_detail_appt_consult/m3_detail_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
