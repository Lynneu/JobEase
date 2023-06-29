"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/find_teacher/find_teacher.js";
  "./pages/find_lecture/find_lecture.js";
  "./pages/user_info/user_info.js";
  "./pages/m3_appt_lecture/appt_lecture.js";
  "./pages/m1_login/login.js";
  "./pages/m3_detail_lecture/m3_detail_lecture.js";
  "./pages/m4_release_lecture/m4_release_lecture.js";
  "./pages/m1_sign/m1_sign.js";
  "./pages/m1_role_select/m1_role_select.js";
  "./pages/m3_appt_consult/m3_appt_consult.js";
  "./pages/m3_detail_appt_consult/m3_detail_appt_consult.js";
  "./pages/m1_identify_teacher/m1_identify_teacher.js";
  "./pages/m4_seeker_information/m4_seeker_information.js";
  "./pages/m4_mentor_information/m4_mentor_information.js";
}
const _sfc_main = {
  onLaunch: function() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Code/JobEase/JobEase/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
