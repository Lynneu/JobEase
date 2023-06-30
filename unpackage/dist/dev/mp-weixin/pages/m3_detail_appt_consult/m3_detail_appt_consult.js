"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    trigger(e) {
      console.log(e);
      common_vendor.index.navigateTo({
        url: "../m3_appt_consult/m3_appt_consult"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.trigger())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m3_detail_appt_consult/m3_detail_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
