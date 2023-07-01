"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      iphoneValue: "",
      //手机号码
      passwordValue: "",
      //密码
      testValue: "",
      //验证码
      showPassword: true,
      //是否显示密码
      showClearIcon: false,
      //是否显示清除按钮
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
    input(e) {
      console.log("输入内容：", e);
    },
    // 切换登录的方式
    setLoginType(type) {
      this.type = type;
    },
    Zhuce() {
      common_vendor.index.navigateTo({
        url: "../m1_sign/m1_sign"
      });
    },
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
              url: "../m1_role_select/m1_role_select"
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
    // 获取验证码
    getTest() {
      let that = this;
      if (!that.iphoneValue || !this.isMobile(that.iphoneValue)) {
        common_vendor.index.showToast({
          title: "请输入正确电话号码",
          icon: "none"
        });
        return false;
      }
      common_vendor.index.request({
        url: "http://app/login/sendSms",
        // 路径
        method: "GET",
        // 请求方法
        data: {
          phone: that.iphoneValue,
          type: "1"
        },
        //发送的数据
        success: (res) => {
          if (res.data.code == 200) {
            common_vendor.index.showToast({
              title: "验证码发送成功",
              icon: "none"
            });
            that.timer = 60;
            that.timeDown(that.timer);
          }
        }
      });
    },
    // 设置验证码时间动态减少
    timeDown(num) {
      let that = this;
      if (num == 0) {
        that.showTimer = true;
        return clearTimeout();
      } else {
        that.showTimer = false;
        setTimeout(function() {
          that.timer = num - 1;
          that.timeDown(num - 1);
        }, 1e3);
      }
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
    a: common_vendor.o($options.input),
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
    f: common_vendor.o((...args) => $options.Zhuce && $options.Zhuce(...args)),
    g: common_vendor.o((...args) => $options.Login && $options.Login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f4898ea"], ["__file", "D:/Code/JobEase/JobEase/pages/m1_login/login.vue"]]);
wx.createPage(MiniProgramPage);
