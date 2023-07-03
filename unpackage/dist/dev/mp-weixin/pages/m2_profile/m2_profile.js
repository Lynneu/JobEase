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
    myconsult() {
      common_vendor.index.navigateTo({
        url: "../m2_my_consult/m2_my_consult"
      });
    },
    mylecture() {
      common_vendor.index.navigateTo({
        url: "../m2_my_lecture/m2_my_lecture"
      });
    },
    seekerinfo() {
      common_vendor.index.navigateTo({
        url: "../m4_seeker_information/m4_seeker_information"
      });
    },
    lecture() {
      common_vendor.index.navigateTo({
        url: "../m2_my_lecture/m2_my_lecture"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_icons2 + _easycom_uni_card2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    b: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.o($options.seekerinfo),
    d: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    e: common_vendor.o($options.myconsult),
    f: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    g: common_vendor.o($options.mylecture),
    h: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    i: common_vendor.o($options.mentorinfo),
    j: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    k: common_vendor.o($options.seekerinfo)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m2_profile/m2_profile.vue"]]);
wx.createPage(MiniProgramPage);
