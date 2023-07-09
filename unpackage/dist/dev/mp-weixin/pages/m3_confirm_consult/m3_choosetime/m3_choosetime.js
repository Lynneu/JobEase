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
    },
    agree() {
      this.item.appt_state = this.agree_consult;
      if (this.pick > this.len) {
        common_vendor.index.showToast({
          title: "该时间段无效",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      const db = common_vendor.Ds.database();
      let item = { ...this.item };
      delete item._id;
      db.collection("consult").doc(this.item._id).update(item).then((e) => {
        console.log(e);
      });
      common_vendor.index.showToast({
        title: "通过",
        icon: "none",
        duration: 2e3
      });
      common_vendor.index.navigateTo({
        url: "../m3_confirm_consult"
      });
      console.log("跳转");
    },
    refuse() {
      this.item.appt_state = this.refuse_consult;
      const db = common_vendor.Ds.database();
      let item = { ...this.item };
      delete item._id;
      db.collection("consult").doc(this.item._id).update(item).then((e) => {
        console.log(e);
      });
      common_vendor.index.showToast({
        title: "拒绝成功",
        icon: "none",
        duration: 2e3
      });
      common_vendor.index.navigateTo({
        url: "../m3_confirm_consult"
      });
      console.log("跳转");
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_section2 + _easycom_uni_data_select2)();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_data_select)();
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
      title: "咨询时间：",
      type: "line"
    }),
    f: common_vendor.f($data.item.appt_time1, (time, k0, i0) => {
      return {
        a: common_vendor.t(time)
      };
    }),
    g: common_vendor.o(($event) => $options.apptpick_theme()),
    h: common_vendor.o(($event) => $data.pick = $event),
    i: common_vendor.p({
      localdata: $data.timepick,
      clear: false,
      modelValue: $data.pick
    }),
    j: common_vendor.o(($event) => ($options.agree(), $options.getlen())),
    k: common_vendor.o((...args) => $options.refuse && $options.refuse(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m3_confirm_consult/m3_choosetime/m3_choosetime.vue"]]);
wx.createPage(MiniProgramPage);
