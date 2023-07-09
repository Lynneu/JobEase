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
  onShow: function() {
    this.role = getApp().globalData.st;
    console.log(this.role);
  }
};
if (!Array) {
  const _component_pageconfirmConsult = common_vendor.resolveComponent("pageconfirmConsult");
  const _component_pagefindTeacher = common_vendor.resolveComponent("pagefindTeacher");
  (_component_pageconfirmConsult + _component_pagefindTeacher)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.role == "1"
  }, $data.role == "1" ? {} : $data.role == "0" ? {} : {}, {
    b: $data.role == "0"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);