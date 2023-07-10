"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
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
        "isTeacher": "",
        "status": "",
        "email": "",
        "comment": "",
        "co": "",
        "job_number": "",
        "price": "",
        "score": "",
        "post": 0,
        "tip_teacher": [],
        "tip_student": 0,
        "goal": 0
      }
    };
  },
  onLoad: function(option) {
    console.log("手机号上传");
    console.log(option.id);
    this.user_detail.phone = option.id;
    console.log("手机号上传成功");
    console.log(this.user_detail.phone);
    const db = common_vendor.Ds.database();
    db.collection("user_detail").where({
      phone: this.user_detail.phone
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
    appointconsult(e) {
      console.log(e);
      common_vendor.index.redirectTo({
        url: "../m3_appt_consult/m3_appt_consult?phone=" + this.user_detail.phone
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_title2 + _easycom_uni_section2)();
}
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.user_detail.username,
      color: "#027fff",
      type: "h1"
    }),
    b: common_vendor.p({
      title: "专业标签：" + $data.user_detail.tip_teacher.map((value) => {
        var _a;
        return (_a = $data.tag.find((item) => item.value === value)) == null ? void 0 : _a.text;
      }).join(" "),
      type: "line",
      padding: "0px"
    }),
    c: common_vendor.p({
      title: "评　　分：" + $data.user_detail.score + "分",
      type: "line"
    }),
    d: common_vendor.p({
      title: "工作单位：" + $data.user_detail.co,
      type: "line"
    }),
    e: common_vendor.p({
      title: "咨询费用：" + $data.user_detail.price + " 元  / 小时",
      type: "line"
    }),
    f: common_vendor.p({
      title: "导师介绍",
      type: "circle"
    }),
    g: common_vendor.t($data.user_detail.comment),
    h: common_vendor.o((...args) => $options.appointconsult && $options.appointconsult(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m3_detail_appt_consult/m3_detail_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
