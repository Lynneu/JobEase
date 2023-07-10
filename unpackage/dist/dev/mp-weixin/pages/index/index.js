"use strict";
const common_vendor = require("../../common/vendor.js");
const pagefindTeacher = () => "../find_teacher/find_teacher2.js";
const pageconfirmConsult = () => "../m3_confirm_consult/m3_confirm_consult2.js";
const _sfc_main = {
  name: "NewPage",
  components: {
    pagefindTeacher,
    pageconfirmConsult
  },
  data() {
    return {
      role: ""
      // 从某个地方获取用户角色
    };
  },
  onLoad: function() {
    this.role = getApp().globalData.st;
    console.log(this.role);
  },
  onShow: function() {
    this.role = getApp().globalData.st;
    console.log(this.role);
    if (this.role == 1) {
      setTimeout(() => {
        common_vendor.index.setNavigationBarTitle({
          title: "咨询信息"
        });
      }, 5);
      common_vendor.index.setTabBarItem({
        index: 0,
        text: "咨询信息"
      });
    } else {
      setTimeout(() => {
        common_vendor.index.setNavigationBarTitle({
          title: "找导师"
        });
      }, 5);
      common_vendor.index.setTabBarItem({
        index: 0,
        text: "找导师"
      });
    }
  }
};
if (!Array) {
  const _component_pageconfirmConsult = common_vendor.resolveComponent("pageconfirmConsult");
  const _component_pagefindTeacher = common_vendor.resolveComponent("pagefindTeacher");
  (_component_pageconfirmConsult + _component_pagefindTeacher)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.role == "1",
    b: $data.role == "0"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
