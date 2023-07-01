"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      company_name: "公司不可改",
      real_name: "名字不可改",
      email: "邮箱不可改",
      consultation_direction: "咨询方向不可改",
      priceValue: 100,
      value: "请输入简介",
      description: "可修改aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    };
  },
  methods: {
    changePrice(value) {
      this.priceValue = value;
    },
    introductionInput(e) {
      this.description = e.detail.value;
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_number_box2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "就职公司:" + $data.company_name,
      type: "line"
    }),
    b: common_vendor.p({
      title: "真实姓名:" + $data.real_name,
      type: "line"
    }),
    c: common_vendor.p({
      title: "公司邮箱:" + $data.email,
      type: "line"
    }),
    d: common_vendor.p({
      title: "咨询方向:" + $data.consultation_direction,
      type: "line"
    }),
    e: common_vendor.p({
      title: "个人简介:",
      type: "line"
    }),
    f: common_vendor.o($options.introductionInput),
    g: common_vendor.o(($event) => $data.description = $event),
    h: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "最大输入长度为1000",
      maxlength: "1000",
      modelValue: $data.description
    }),
    i: common_vendor.o($options.changePrice),
    j: common_vendor.p({
      max: 9999,
      step: 5,
      value: $data.priceValue
    }),
    k: common_vendor.p({
      title: "咨询价格 : " + $data.priceValue + "元/时间单位",
      type: "line",
      padding: true
    }),
    l: common_vendor.o((...args) => _ctx.savaInfo && _ctx.savaInfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_mentor_information/m4_mentor_information.vue"]]);
wx.createPage(MiniProgramPage);
