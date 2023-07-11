"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user_detail: {
        username: ""
      }
    };
  },
  onLoad() {
    if (getApp().globalData.st == 0) {
      this.st = true;
    } else {
      this.st = false;
    }
    this.phone = getApp().globalData.ph;
    this.getMsg();
  },
  onShow() {
    this.getMsg();
  },
  methods: {
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
      if (getApp().globalData.st == 0) {
        common_vendor.index.navigateTo({
          url: "../m4_seeker_information/m4_seeker_information"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "../m4_mentor_information/m4_mentor_information"
        });
      }
    },
    lecture() {
      common_vendor.index.navigateTo({
        url: "../m2_my_lecture/m2_my_lecture"
      });
    },
    goToRoleSelect() {
      common_vendor.index.navigateTo({
        url: "../m1_role_select/m1_role_select"
      });
    },
    getMsg() {
      const db = common_vendor.Ds.database();
      db.collection("user_detail").where({
        phone: {
          $eq: this.phone
        }
      }).get().then((res) => {
        console.log(res);
        if (res.result.data.length > 0) {
          this.user_detail.username = res.result.data[0].username;
        }
      }).catch((err) => {
        console.log(err);
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
    a: common_vendor.t($data.user_detail.username),
    b: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    d: common_vendor.o($options.seekerinfo),
    e: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    f: common_vendor.o($options.myconsult),
    g: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    h: common_vendor.o($options.mylecture),
    i: common_vendor.p({
      type: "forward",
      size: "18",
      color: "#999"
    }),
    j: common_vendor.o($options.goToRoleSelect)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m2_profile/m2_profile.vue"]]);
wx.createPage(MiniProgramPage);
