"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      t: "",
      password_double: "",
      //第二次密码
      flag: 0,
      user: {
        "phone": "",
        "password": ""
      }
    };
  },
  methods: {
    /*fpNumInput(e) {
    					const o = e.target;
    					const inputRule = /[^a-zA-Z]/g		
    //修改inputRule 的值
    					this.$nextTick(function() {
    						this.form.fpNum = o.value.replace(inputRule , '');
    					})
    				},*/
    input(e) {
      console.log("输入内容：", e);
    },
    // 密码登录
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
      } else if (that.user.password != that.password_double) {
        common_vendor.index.showToast({
          title: "两次输入密码不一致",
          icon: "none"
        });
        return false;
      } else if (that.user.password.length < 4 || that.user.password.length > 15) {
        common_vendor.index.showToast({
          title: "密码长度需在4-15",
          icon: "none"
        });
        return false;
      } else {
        var value = this.user.password;
        const test = /^[0-9a-zA-Z_-]{1,}$/;
        if (!test.test(value)) {
          common_vendor.index.showToast({
            title: "密码仅允许英文字母、数字、符号-_",
            icon: "none"
          });
          return false;
        }
        if (!this.ispass(that.user.password)) {
          common_vendor.index.showToast({
            title: "密码仅允许英文字母、数字、符号-_",
            icon: "none"
          });
          return false;
        }
        const db = common_vendor.Ds.database();
        db.collection("user").where({
          phone: {
            $eq: this.user.phone
          }
        }).limit(1).get().then((res) => {
          if (res.result && res.result.data && res.result.data.length > 0) {
            common_vendor.index.showToast({
              title: "手机号已注册",
              icon: "none"
            });
            return false;
          } else {
            db.collection("user").add(this.user).then((e) => {
              console.log(e);
            });
            getApp().globalData.ph = this.user.phone;
            common_vendor.index.navigateTo({
              url: "../m1_role_select/m1_role_select"
            });
          }
        });
      }
    },
    // 下面是可以封装起来引入的部分
    // 判断是否是正确的手机号码
    isMobile(str) {
      let reg = /^1\d{10}$/;
      return reg.test(str);
    },
    ispass(str) {
      let reg = /[A-Za-z0-9-_]/;
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
      placeholder: "请输入4-15位密码",
      maxlength: "15",
      modelValue: $data.user.password
    }),
    f: common_vendor.o(($event) => $data.password_double = $event),
    g: common_vendor.p({
      type: "password",
      placeholder: "请再次输入密码",
      maxlength: "15",
      modelValue: $data.password_double
    }),
    h: common_vendor.o((...args) => $options.Login && $options.Login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb4da951"], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m1_sign/m1_sign.vue"]]);
wx.createPage(MiniProgramPage);
