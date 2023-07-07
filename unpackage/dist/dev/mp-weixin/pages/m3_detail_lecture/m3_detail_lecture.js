"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      lecture_name: "pp",
      lecture_title: "如何拥有良好的睡眠质量",
      lecture_time: "2023.06.28  18:00",
      lecture_theme: "求职就业",
      lecture_cost: "30",
      lecture_num: "3 / 10",
      lecture_content: ""
    };
  },
  methods: {
    appointLecture() {
      common_vendor.index.switchTab({
        url: "../find_lecture/find_lecture"
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
      title: $data.lecture_title,
      color: "#027fff",
      type: "h1"
    }),
    b: common_vendor.p({
      title: "演 讲 人 ：" + $data.lecture_name,
      type: "line",
      padding: "0px"
    }),
    c: common_vendor.p({
      title: "讲座时间：" + $data.lecture_time,
      type: "line"
    }),
    d: common_vendor.p({
      title: "讲座主题：" + $data.lecture_theme,
      type: "line"
    }),
    e: common_vendor.p({
      title: "讲座费用：" + $data.lecture_cost + " 元  / 30min",
      type: "line"
    }),
    f: common_vendor.p({
      title: "讲座名额：" + $data.lecture_num + " 人",
      type: "line"
    }),
    g: common_vendor.p({
      title: "讲座内容",
      type: "circle"
    }),
    h: common_vendor.t($data.lecture_content),
    i: common_vendor.o((...args) => $options.appointLecture && $options.appointLecture(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m3_detail_lecture/m3_detail_lecture.vue"]]);
wx.createPage(MiniProgramPage);
