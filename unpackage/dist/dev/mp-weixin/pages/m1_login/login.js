"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //user.phone: '', //手机号码
      //user.password: '', //密码
      showPassword: true,
      //是否显示密码
      showClearIcon: false,
      //是否显示清除按钮
      user: {
        "phone": "",
        "password": ""
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
      } else
        common_vendor.index.switchTab({
          //url: "../index/index",
          url: "../find_teacher/find_teacher"
        });
      common_vendor.index.request({
        /*const db = uniCloud.database();
        db.collection("lecture").add(this.lecture).then(e=>{
        	console.log(e)
        })*/
        url: "http://app/login",
        // 路径
        method: "POST",
        // 请求方法
        data: {
          phone: that.user.phone,
          type: that.type,
          code: that.testValue,
          password: that.user.password
        },
        //发送的数据
        success: (res) => {
          if (res.data.code == 200) {
            that.token = res.data.token;
            common_vendor.index.setStorageSync("token", that.token);
            common_vendor.index.setStorageSync("userInfo", JSON.stringify(res.data));
            common_vendor.index.switchTab({
              //url: "../index/index",
              url: "../find_teacher/find_teacher"
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
      placeholder: "请输入手机号",
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f4898ea"], ["__file", "E:/hbuilder/JobEase/pages/m1_login/login.vue"]]);
wx.createPage(MiniProgramPage);
