"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      direction: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      appt_ste: [
        { value: 0, text: "未完成" },
        { value: 1, text: "已完成" },
        { value: 2, text: "已评价" }
      ],
      lecture: {
        _id: "",
        phone: 0,
        lecture_title: "",
        lecture_time: "0000.00.00  00:00",
        lecture_label: 0,
        lecture_price: 0,
        lecture_limit: 0,
        lecture_number: 0,
        lecture_reserved: 0,
        lecture_content: ""
      },
      limit: [
        { value: 0, text: " （无限制）" },
        { value: 1, text: "" }
      ],
      user_detail: {
        username: ""
      },
      appt_lecture: {
        lecture_id: "",
        phone: "12345678900",
        lecture_state: 0
      }
    };
  },
  onLoad({ item }) {
    this.item = JSON.parse(item);
    console.log(this.item);
    this.getMsg();
  },
  methods: {
    getMsg() {
      const db = common_vendor.Ds.database();
      const phone = this.item.lecture_id[0].phone;
      db.collection("user_detail").where({
        phone
      }).get().then((res) => {
        console.log(res);
        if (res.result.data.length > 0) {
          this.user_detail.username = res.result.data[0].username;
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_title2 + _easycom_uni_section2)();
}
const _easycom_uni_title = () => "../../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: _ctx.item.lecture_id[0].lecture_title,
      color: "#027fff",
      type: "h1"
    }),
    b: common_vendor.p({
      title: "演 讲 人 ：" + $data.user_detail.username,
      type: "line",
      padding: "0px"
    }),
    c: common_vendor.p({
      title: "讲座时间：" + _ctx.item.lecture_id[0].lecture_time,
      type: "line"
    }),
    d: common_vendor.p({
      title: "讲座主题：" + $data.direction[_ctx.item.lecture_id[0].lecture_label].text,
      type: "line"
    }),
    e: common_vendor.p({
      title: "讲座费用：" + _ctx.item.lecture_id[0].lecture_price + " 元",
      type: "line"
    }),
    f: common_vendor.p({
      title: "讲座名额：" + _ctx.item.lecture_id[0].lecture_reserved + " / " + _ctx.item.lecture_id[0].lecture_number + " 人" + $data.limit[_ctx.item.lecture_id[0].lecture_limit].text,
      type: "line"
    }),
    g: common_vendor.p({
      title: "学生手机号：" + _ctx.item.phone,
      type: "line"
    }),
    h: common_vendor.p({
      title: "状态：" + $data.appt_ste[_ctx.item.lecture_state].text,
      type: "line"
    }),
    i: common_vendor.p({
      title: "讲座内容",
      type: "circle"
    }),
    j: common_vendor.t(_ctx.item.lecture_id[0].lecture_content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m2_my_lecture/detail/m2_lecture_detail.vue"]]);
wx.createPage(MiniProgramPage);
