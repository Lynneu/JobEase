"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      consult_cost: "120",
      consult_theme: "就业指导",
      consult_date: "2023.6.18",
      consult_duration: "30",
      picktime: 0,
      time: [
        { text: "08:00", value: 0 },
        { text: "09:00", value: 1 },
        { text: "10:00", value: 2 },
        { text: "11:00", value: 3 }
      ]
    };
  },
  methods: {
    open() {
      this.$refs.popup.open("center");
    },
    close() {
      this.$refs.popup.close();
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_section2 + _easycom_uni_card2 + _easycom_uni_data_checkbox2 + _easycom_uni_popup2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_card + _easycom_uni_data_checkbox + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "咨询信息",
      type: "line"
    }),
    b: common_vendor.t($data.consult_cost),
    c: common_vendor.t($data.consult_theme),
    d: common_vendor.t($data.consult_date),
    e: common_vendor.t($data.consult_duration),
    f: common_vendor.o(($event) => $options.open()),
    g: common_vendor.p({
      padding: "5px",
      margin: "6px"
    }),
    h: common_vendor.p({
      title: "咨询信息",
      type: "line"
    }),
    i: common_vendor.t($data.consult_cost),
    j: common_vendor.t($data.consult_theme),
    k: common_vendor.t($data.consult_date),
    l: common_vendor.t($data.consult_duration),
    m: common_vendor.o(($event) => $options.open()),
    n: common_vendor.p({
      padding: "5px",
      margin: "6px"
    }),
    o: common_vendor.p({
      title: "咨询信息",
      type: "line"
    }),
    p: common_vendor.t($data.consult_cost),
    q: common_vendor.t($data.consult_theme),
    r: common_vendor.t($data.consult_date),
    s: common_vendor.t($data.consult_duration),
    t: common_vendor.o(($event) => $options.open()),
    v: common_vendor.p({
      padding: "5px",
      margin: "6px"
    }),
    w: common_vendor.p({
      title: "选择咨询时间(单选)",
      type: "line"
    }),
    x: common_vendor.o(($event) => $data.picktime = $event),
    y: common_vendor.p({
      localdata: $data.time,
      mode: "list",
      modelValue: $data.picktime
    }),
    z: common_vendor.o((...args) => $options.close && $options.close(...args)),
    A: common_vendor.o((...args) => $options.close && $options.close(...args)),
    B: common_vendor.p({
      margin: "1px"
    }),
    C: common_vendor.sr("popup", "193187f5-6"),
    D: common_vendor.p({
      ["mask-click"]: false,
      type: "center",
      ["background-color"]: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m3_confirm_consult/m3_confirm_consult.vue"]]);
wx.createPage(MiniProgramPage);
