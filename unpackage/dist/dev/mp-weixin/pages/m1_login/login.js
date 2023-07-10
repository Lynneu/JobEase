"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showPassword: true,
      //是否显示密码
      showClearIcon: false,
      //是否显示清除按钮
      user: {
        "phone": "",
        "password": ""
      },
      user_find: {
        "phone": "",
        "password": ""
      },
      testing: {
        "phone": "",
        "username": "test",
        "isTeacher": 1,
        "status": "",
        "email": "",
        "comment": "",
        "co": "",
        "job_number": "",
        "price": 0,
        "score": 0,
        "post": "",
        "tip_teacher": [],
        "tip_student": "",
        "goal": ""
      }
    };
  },
  methods: {
    input(e) {
      console.log("输入内容：", e);
    },
    Zhuce() {
      common_vendor.index.navigateTo({
        url: "../m1_sign/m1_sign"
      });
    },
    Login() {
      let that = this;
      if (!that.user.phone || !this.isMobile(that.user.phone)) {
        common_vendor.index.showToast({
          title: "请输入正确电话号码",
          icon: "none"
        });
        return false;
      } else if (!that.user.password) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none"
        });
        return false;
      } else if (that.user.password.length < 4 || that.user.password.length > 15) {
        common_vendor.index.showToast({
          title: "密码错误",
          icon: "none"
        });
        return false;
      } else {
        const db = common_vendor.Ds.database();
        db.collection("user_detail").where({
          phone: {
            $eq: this.user.phone
          }
        }).limit(1).get().then((res) => {
          if (res.result && res.result.data && res.result.data.length > 0) {
            this.testing = res.result.data[0];
            getApp().globalData.st = this.testing.status;
          }
        });
        db.collection("user").where({
          phone: {
            $eq: this.user.phone
          }
        }).limit(1).get().then((res) => {
          if (res.result && res.result.data && res.result.data.length > 0) {
            this.user_find = res.result.data[0];
            if (this.user_find.password == this.user.password) {
              getApp().globalData.ph = this.user.phone;
              db.collection("user_detail").where({
                phone: {
                  $eq: this.user.phone
                }
              }).limit(1).get().then((res2) => {
                let tip_student = res2.result.data[0].tip_student;
                getApp().globalData.tip = tip_student;
                console.log("tip:" + tip_student);
              });
              if (this.testing.status == 0) {
                common_vendor.index.switchTab({
                  url: "../index/index"
                });
              } else {
                common_vendor.index.switchTab({
                  url: "../index/index"
                });
              }
            } else {
              common_vendor.index.showToast({
                title: "密码错误",
                icon: "none"
              });
              return false;
            }
          } else {
            common_vendor.index.showToast({
              title: "手机号未注册",
              icon: "none"
            });
            return false;
          }
        });
      }
    },
    isMobile(str) {
      let reg = /^1\d{10}$/;
      return reg.test(str);
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.input),
    b: common_vendor.o(($event) => $data.user.phone = $event),
    c: common_vendor.p({
      type: "number",
      trim: "all",
      placeholder: "请输入11位手机号",
      maxlength: "11",
      modelValue: $data.user.phone
    }),
    d: common_vendor.o(($event) => $data.user.password = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.user.password
    }),
    f: common_vendor.o((...args) => $options.Zhuce && $options.Zhuce(...args)),
    g: common_vendor.o((...args) => $options.Login && $options.Login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f4898ea"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m1_login/login.vue"]]);
wx.createPage(MiniProgramPage);
