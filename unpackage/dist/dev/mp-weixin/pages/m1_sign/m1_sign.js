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
    // 显示隐藏密码
    changePassword: function() {
      this.showPassword = !this.showPassword;
    },
    // 判断是否显示清除按钮
    clearInput: function(event) {
      this.iphoneValue = event.detail.value;
      if (event.detail.value.length > 0) {
        this.showClearIcon = true;
      } else {
        this.showClearIcon = false;
      }
    },
    // 清除内容/隐藏按钮
    clearIcon: function() {
      this.iphoneValue = "";
      this.showClearIcon = false;
    },
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
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.iphoneValue,
    b: common_vendor.o((...args) => $options.clearInput && $options.clearInput(...args)),
    c: $data.showClearIcon
  }, $data.showClearIcon ? {
    d: common_vendor.o($options.clearIcon),
    e: common_vendor.p({
      type: "closeempty",
      color: "#808080",
      size: "25"
    })
  } : {}, {
    f: $data.type == 2
  }, $data.type == 2 ? {
    g: $data.showPassword,
    h: $data.passwordValue,
    i: common_vendor.o(($event) => $data.passwordValue = $event.detail.value),
    j: common_vendor.p({
      type: "eye-filled",
      color: "#808080",
      size: "25"
    })
  } : {}, {
    k: $data.type == 2
  }, $data.type == 2 ? {
    l: $data.showPassword,
    m: $data.passwordValue,
    n: common_vendor.o(($event) => $data.passwordValue = $event.detail.value)
  } : {}, {
    o: common_vendor.o((...args) => $options.Login && $options.Login(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb4da951"], ["__file", "D:/Code/JobEase/JobEase/pages/m1_sign/m1_sign.vue"]]);
wx.createPage(MiniProgramPage);
