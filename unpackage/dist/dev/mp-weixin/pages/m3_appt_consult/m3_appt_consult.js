"use strict";
const common_vendor = require("../../common/vendor.js");
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
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
      gethours: (/* @__PURE__ */ new Date()).getHours() + 1,
      Times: [
        { text: "08:00", value: 8 },
        { text: "09:00", value: 9 },
        { text: "10:00", value: 10 },
        { text: "11:00", value: 11 },
        { text: "12:00", value: 12 },
        { text: "13:00", value: 13 },
        { text: "14:00", value: 14 },
        { text: "15:00", value: 15 },
        { text: "16:00", value: 16 },
        { text: "17:00", value: 17 },
        { text: "18:00", value: 18 },
        { text: "19:00", value: 19 },
        { text: "20:00", value: 20 },
        { text: "21:00", value: 21 },
        { text: "22:00", value: 22 },
        { text: "23:00", value: 23 }
      ],
      consult: {
        "teach_tele": 12345678910,
        "stud_tele": 12345678911,
        "teach_name": "小王",
        "stud_name": "小张",
        "appt_label": 0,
        "appt_price": 30,
        "appt_duration": 0,
        "appt_date": Date.now(),
        "appt_time1": [],
        "appt_time2": 23,
        "appt_cost": 0,
        "appt_state": 0
      }
    };
  },
  methods: {
    apptpick_theme(e) {
      console.log(e);
    },
    date_change(e) {
      console.log("maskClick事件:", e);
    },
    duration_change(value) {
      this.consult.appt_duration = value;
      this.consult.appt_cost = value * this.consult.appt_duration / 30;
    },
    checktime(pick) {
      return pick >= this.gethours;
    },
    appointAndpay() {
      if (this.consult.appt_duration == 0) {
        common_vendor.index.showToast({
          title: "预约时长需大于零",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      if (Object.keys(this.consult.appt_time1).length == 0) {
        common_vendor.index.showToast({
          title: "请选择开始时间",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      if (this.consult.appt_date <= Date.now()) {
        if (this.consult.appt_time1.slice(0, 1) < this.gethours) {
          common_vendor.index.showToast({
            title: "请选择正确时间",
            icon: "none",
            duration: 2e3
          });
        }
        return;
      }
      const db = common_vendor.Ds.database();
      db.collection("consult").add(this.consult).then((e) => {
        console.log(e);
      });
      common_vendor.index.showToast({
        title: "预约成功",
        icon: "none",
        duration: 2e3
      });
      common_vendor.index.switchTab({
        url: "../find_teacher/find_teacher"
      });
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_section2 + _easycom_uni_data_select2 + _easycom_uni_number_box2 + _easycom_uni_datetime_picker2 + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_data_select + _easycom_uni_number_box + _easycom_uni_datetime_picker + _easycom_uni_data_checkbox)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "导师姓名：" + $data.consult.teach_name,
      type: "line"
    }),
    b: common_vendor.p({
      title: "咨询主题:",
      type: "line"
    }),
    c: common_vendor.o(($event) => $options.apptpick_theme()),
    d: common_vendor.o(($event) => $data.consult.appt_label = $event),
    e: common_vendor.p({
      localdata: $data.appt_theme,
      clear: false,
      modelValue: $data.consult.appt_label
    }),
    f: common_vendor.p({
      title: "咨询价格：" + $data.consult.appt_price + "元/30min",
      type: "line"
    }),
    g: common_vendor.p({
      title: "预约时长 : " + $data.consult.appt_duration + "分钟",
      type: "line"
    }),
    h: common_vendor.o($options.duration_change),
    i: common_vendor.p({
      step: 30,
      max: 120,
      min: 0,
      value: $data.consult.appt_duration,
      background: "#2979FF",
      color: "#fff"
    }),
    j: common_vendor.p({
      title: "预约日期:",
      type: "line"
    }),
    k: common_vendor.o($options.date_change),
    l: common_vendor.o(($event) => $data.consult.appt_date = $event),
    m: common_vendor.p({
      type: "date",
      start: $data.start,
      ["clear-icon"]: false,
      end: $data.end,
      modelValue: $data.consult.appt_date
    }),
    n: common_vendor.o(($event) => $data.consult.appt_time1 = $event),
    o: common_vendor.p({
      mode: "tag",
      multiple: true,
      localdata: $data.Times,
      modelValue: $data.consult.appt_time1
    }),
    p: common_vendor.p({
      title: "开始时间:",
      type: "line",
      subTitle: "可接受的咨询时间(多选)"
    }),
    q: common_vendor.p({
      title: "支付价格：" + $data.consult.appt_cost + " 元",
      type: "line"
    }),
    r: common_vendor.o((...args) => $options.appointAndpay && $options.appointAndpay(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m3_appt_consult/m3_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
