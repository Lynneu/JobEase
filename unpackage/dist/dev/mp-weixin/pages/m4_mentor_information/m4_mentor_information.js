"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      direction: [
        { value: 0, text: "前端开发" },
        { value: 1, text: "后端开发" },
        { value: 2, text: "C++开发" },
        { value: 3, text: "Java开发" },
        { value: 4, text: "算法" },
        { value: 5, text: "测试开发" },
        { value: 6, text: "产品经理" },
        { value: 7, text: "运营" },
        { value: 8, text: "HR" },
        { value: 9, text: "其他" }
      ],
      tag: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      user_detail: {
        "_id": "",
        "phone": "",
        "username": "",
        "co": "",
        "email": "",
        "post": 0,
        "tip_teacher": [],
        "comment": "",
        "price": ""
      }
    };
  },
  onShow() {
    this.user_detail.phone = getApp().globalData.ph;
  },
  onLoad() {
    console.log("Phone:", this.user_detail.phone);
    const db = common_vendor.Ds.database();
    db.collection("user_detail").where({
      phone: {
        $eq: getApp().globalData.ph
      }
    }).limit(1).get().then((res) => {
      if (res.result && res.result.data && res.result.data.length > 0) {
        this.user_detail = res.result.data[0];
      } else {
        console.error("No data found.");
      }
    }).catch((err) => {
      console.error("Error retrieving data:", err);
    });
  },
  methods: {
    changePrice(value) {
      this.user_detail.price = value;
    },
    submit() {
      if (!this.user_detail.username) {
        common_vendor.index.showToast({
          title: "用户名不能为空",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      var value = this.user_detail.username;
      const test2 = /^[a-zA-Z0-9\u4e00-\u9fff_-]+$/;
      if (!test2.test(value)) {
        common_vendor.index.showToast({
          title: "用户名仅允许中文、英文、数字、符号-_",
          icon: "none"
        });
        return false;
      }
      if (!this.user_detail.comment) {
        common_vendor.index.showToast({
          title: "请填写简介",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      const db = common_vendor.Ds.database();
      let user_detail = { ...this.user_detail };
      delete user_detail._id;
      db.collection("user_detail").doc(this.user_detail._id).update(user_detail).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error("Error updating data:", err);
      });
      common_vendor.index.switchTab({
        url: "../m2_profile/m2_profile"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_number_box2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "用户名:",
      type: "line"
    }),
    b: common_vendor.o(($event) => $data.user_detail.username = $event),
    c: common_vendor.p({
      placeholder: "最大输入长度为20",
      maxlength: "20",
      autoHeight: true,
      modelValue: $data.user_detail.username
    }),
    d: common_vendor.p({
      title: "身份:导师",
      type: "line"
    }),
    e: common_vendor.p({
      title: "就职公司:" + $data.user_detail.co,
      type: "line"
    }),
    f: common_vendor.p({
      title: "导师邮箱:" + $data.user_detail.email,
      type: "line"
    }),
    g: common_vendor.p({
      title: "工作岗位:" + $data.direction.find((item) => item.value === $data.user_detail.post).text,
      type: "line"
    }),
    h: common_vendor.p({
      title: "咨询标签:" + $data.user_detail.tip_teacher.map((value) => {
        var _a;
        return (_a = $data.tag.find((item) => item.value === value)) == null ? void 0 : _a.text;
      }).join(" "),
      type: "line"
    }),
    i: common_vendor.p({
      title: "个人简介:",
      type: "line"
    }),
    j: common_vendor.o(($event) => $data.user_detail.comment = $event),
    k: common_vendor.p({
      placeholder: "最大输入长度为200",
      maxlength: "200",
      autoHeight: true,
      modelValue: $data.user_detail.comment
    }),
    l: common_vendor.o($options.changePrice),
    m: common_vendor.p({
      min: 0,
      max: 999,
      step: 10,
      value: $data.user_detail.price
    }),
    n: common_vendor.p({
      title: "咨询价格 (0-999): " + $data.user_detail.price + "元/小时",
      type: "line",
      padding: true
    }),
    o: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m4_mentor_information/m4_mentor_information.vue"]]);
wx.createPage(MiniProgramPage);
