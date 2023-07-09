"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      appt_theme: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      appt_ste: [
        { value: 0, text: "待审核" },
        { value: 1, text: "未完成" },
        { value: 2, text: "已完成" },
        { value: 3, text: "已评价" },
        { value: 4, text: "已取消" },
        { value: 5, text: "其他" }
      ],
      len: 1,
      pick: 0,
      agree_consult: 1,
      refuse_consult: 2,
      timepick: [
        { value: 0, text: "时间段①" },
        { value: 1, text: "时间段②" },
        { value: 2, text: "时间段③" }
      ],
      item: {
        "_id": "",
        "appt_cost": "",
        "appt_label": 0,
        "appt_date": "",
        "appt_duration": "",
        "appt_state": "",
        "appt_time1": "",
        "appt_time2": ""
      }
    };
  },
  onLoad({ item }) {
    this.item = JSON.parse(item);
  },
  methods: {
    getlen(times) {
      this.len = Object.keys(times).length;
    },
    apptpick_theme(e) {
      console.log("xuanze");
      this.item.appt_time2 = this.item.appt_time1[this.pick];
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  _easycom_uni_section2();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  _easycom_uni_section();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "咨询主题：" + $data.appt_theme[$data.item.appt_label].text,
      type: "line"
    }),
    b: common_vendor.p({
      title: "咨询日期：" + $data.item.appt_date,
      type: "line"
    }),
    c: common_vendor.p({
      title: "咨询时长：" + $data.item.appt_duration + " 小时",
      type: "line"
    }),
    d: common_vendor.p({
      title: "咨询价格：" + $data.item.appt_cost + " 元",
      type: "line"
    }),
    e: common_vendor.p({
      title: "老师电话：" + $data.item.teach_tele,
      type: "line"
    }),
    f: common_vendor.p({
      title: "学生电话：" + $data.item.stud_tele,
      type: "line"
    }),
    g: common_vendor.p({
      title: "完成状态：" + $data.appt_ste[$data.item.appt_state].text,
      type: "line"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m2_my_consult/detail/m2_consult_detail.vue"]]);
wx.createPage(MiniProgramPage);
