"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    mentorinfo() {
      common_vendor.index.navigateTo({
        url: "../m4_mentor_information/m4_mentor_information"
      });
    },
    seekerinfo() {
      common_vendor.index.navigateTo({
        url: "../m4_seeker_information/m4_seeker_information"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.mentorinfo && $options.mentorinfo(...args)),
    b: common_vendor.o((...args) => $options.seekerinfo && $options.seekerinfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m2_profile/m2_profile.vue"]]);
wx.createPage(MiniProgramPage);
