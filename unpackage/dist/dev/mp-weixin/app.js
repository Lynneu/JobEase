"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/m1_login/login.js";
  "./pages/find_teacher/find_teacher.js";
  "./pages/find_lecture/find_lecture.js";
  "./pages/m3_detail_lecture/m3_detail_lecture.js";
  "./pages/m4_release_lecture/m4_release_lecture.js";
  "./pages/m1_sign/m1_sign.js";
  "./pages/m1_role_select/m1_role_select.js";
  "./pages/m3_appt_consult/m3_appt_consult.js";
  "./pages/m3_detail_appt_consult/m3_detail_appt_consult.js";
  "./pages/m1_identify_teacher/m1_identify_teacher.js";
  "./pages/m4_seeker_information/m4_seeker_information.js";
  "./pages/m4_mentor_information/m4_mentor_information.js";
  "./pages/m3_confirm_consult/m3_confirm_consult.js";
  "./pages/m2_profile/m2_profile.js";
  "./pages/m2_my_consult/m2_my_consult.js";
  "./pages/m2_my_consult/detail/m2_consult_detail.js";
  "./pages/m2_my_lecture/m2_my_lecture.js";
  "./pages/m2_my_lecture/detail/m2_lecture_detail.js";
  "./pages/m3_confirm_consult/m3_choosetime/m3_choosetime.js";
  "./pages/index/index.js";
  "./pages/m8_lecture_search/m8_lecture_search.js";
  "./pages/m7_mentor_search/m7_mentor_search.js";
}
const _sfc_main = {
  globalData: {
    ph: "12345678911",
    //手机号
    st: 0,
    //身份，0求职者，1导师
    tip: ""
    //求职者标签 0-5
  },
  onLaunch: function() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/lynneu/Documents/GitHub/JobEase/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
