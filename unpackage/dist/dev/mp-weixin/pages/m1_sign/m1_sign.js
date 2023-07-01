"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      iphoneValue: "",
      //手机号码
      passwordValue: "",
      //密码
      passwordValue_double: "",
      //第二次密码
      testValue: "",
      //验证码
      type: 2,
      //登录的状态 - - - 1是验证码登录、2是密码登录
      token: "",
      timer: 0,
      //验证码时间
      showTimer: true
      //是否显示验证码时间
    };
  },
  methods: {
    // 切换登录的方式
    setLoginType(type) {
      this.type = type;
    },
    // 密码登录
    Login() {
      let that = this;
      if (!that.iphoneValue || !this.isMobile(that.iphoneValue)) {
        common_vendor.index.showToast({
          title: "请输入正确电话号码",
          icon: "none"
        });
        return false;
      } else if (that.type == 2 && !that.passwordValue) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none"
        });
        return false;
      } else if (that.type == 1 && !that.testValue) {
        common_vendor.index.showToast({
          title: "请输入验证码",
          icon: "none"
        });
        return false;
      } else if (that.passwordValue != that.passwordValue_double) {
        common_vendor.index.showToast({
          title: "两次输入密码不一致",
          icon: "none"
        });
        return false;
      } else
        common_vendor.index.navigateTo({
          //url: "../index/index",
          url: "../m1_role_select/m1_role_select"
        });
      common_vendor.index.request({
        url: "http://app/login",
        // 路径
        method: "POST",
        // 请求方法
        data: {
          phone: that.iphoneValue,
          type: that.type,
          code: that.testValue,
          password: that.passwordValue
        },
        //发送的数据
        success: (res) => {
          if (res.data.code == 200) {
            that.token = res.data.token;
            common_vendor.index.setStorageSync("token", that.token);
            common_vendor.index.setStorageSync("userInfo", JSON.stringify(res.data));
            common_vendor.index.switchTab({
              // 跳转到新闻页面
              //url: "../index/index",
              url: "pages/find_teacher/find_teacher"
            });
            common_vendor.index.showToast({
              title: "登录成功",
              icon: "none"
            });
          } else {
            common_vendor.index.showToast({
              title: "登录失败",
              icon: "none"
            });
          }
        }
      });
    },
    // 下面是可以封装起来引入的部分
    // 判断是否是正确的手机号码
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
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => $data.iphoneValue = $event),
    c: common_vendor.p({
      type: "number",
      trim: "all",
      placeholder: "请输入手机号",
      maxlength: "11",
      modelValue: $data.iphoneValue
    }),
    d: common_vendor.o(($event) => $data.passwordValue = $event),
    e: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      modelValue: $data.passwordValue
    }),
    f: common_vendor.o(($event) => $data.passwordValue_double = $event),
    g: common_vendor.p({
      type: "password",
      placeholder: "请再次输入密码",
      modelValue: $data.passwordValue_double
    }),
    h: common_vendor.o((...args) => $options.Login && $options.Login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb4da951"], ["__file", "D:/Code/JobEase/JobEase/pages/m1_sign/m1_sign.vue"]]);
wx.createPage(MiniProgramPage);