"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      teacher_name: "pp",
      index1: 0,
      appt_theme: [
        { value: 0, text: "请选择咨询主题" },
        { value: 1, text: "简历优化" },
        { value: 2, text: "面试经验" },
        { value: 3, text: "就业指导" },
        { value: 4, text: "职业规划" },
        { value: 5, text: "薪资谈判" },
        { value: 6, text: "其他" }
      ],
      appt_cost: "20",
      apply_cost: "120",
      index: 0,
      last_duration: 10,
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
      apptpick_time: [],
      Times: [
        { text: "08:00", value: 0 },
        { text: "09:00", value: 1 },
        { text: "10:00", value: 2 },
        { text: "11:00", value: 3 },
        { text: "12:00", value: 4 },
        { text: "13:00", value: 5 },
        { text: "14:00", value: 6 },
        { text: "15:00", value: 7 },
        { text: "16:00", value: 8 },
        { text: "17:00", value: 9 },
        { text: "18:00", value: 10 },
        { text: "19:00", value: 11 },
        { text: "20:00", value: 12 },
        { text: "21:00", value: 13 },
        { text: "22:00", value: 14 },
        { text: "23:00", value: 15 }
      ]
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
      this.last_duration = value;
    },
    appointAndpay() {
      common_vendor.index.switchTab({
        url: "../find_teacher/find_teacher"
      });
    }
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
      title: "导师姓名：" + $data.teacher_name,
      type: "line"
    }),
    b: common_vendor.p({
      title: "咨询主题:",
      type: "line"
    }),
    c: common_vendor.o(($event) => $options.apptpick_theme()),
    d: common_vendor.o(($event) => $data.index1 = $event),
    e: common_vendor.p({
      localdata: $data.appt_theme,
      clear: false,
      modelValue: $data.index1
    }),
    f: common_vendor.p({
      title: "咨询价格：" + $data.appt_cost + "元/30min",
      type: "line"
    }),
    g: common_vendor.p({
      title: "预约时长 : " + $data.last_duration + "分钟",
      type: "line"
    }),
    h: common_vendor.o($options.duration_change),
    i: common_vendor.p({
      step: 10,
      max: 120,
      min: 10,
      value: $data.last_duration,
      background: "#2979FF",
      color: "#fff"
    }),
    j: common_vendor.p({
      title: "预约日期:",
      type: "line"
    }),
    k: common_vendor.o($options.date_change),
    l: common_vendor.p({
      type: "date",
      start: $data.start,
      end: $data.end
    }),
    m: common_vendor.o(($event) => $data.apptpick_time = $event),
    n: common_vendor.p({
      mode: "tag",
      multiple: true,
      localdata: $data.Times,
      modelValue: $data.apptpick_time
    }),
    o: common_vendor.p({
      title: "开始时间:",
      type: "line",
      subTitle: "可接受的咨询时间(多选)"
    }),
    p: common_vendor.p({
      title: "支付价格：" + $data.apply_cost + " 元",
      type: "line"
    }),
    q: common_vendor.o((...args) => $options.appointAndpay && $options.appointAndpay(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m3_appt_consult/m3_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
