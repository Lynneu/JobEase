"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      Inv: 0
    };
  },
  methods: {
    changeTab(Inv) {
      that.navIdx = Inv;
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.Inv == 0 ? "inv-h-se" : ""),
    b: common_vendor.o(($event) => $data.Inv = 0),
    c: common_vendor.n($data.Inv == 1 ? "inv-h-se" : ""),
    d: common_vendor.o(($event) => $data.Inv = 1),
    e: common_vendor.n($data.Inv == 2 ? "inv-h-se" : ""),
    f: common_vendor.o(($event) => $data.Inv = 2),
    g: $data.Inv == 0,
    h: $data.Inv == 1,
    i: $data.Inv == 2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m2_my_lecture/m2_my_lecture.vue"]]);
wx.createPage(MiniProgramPage);
