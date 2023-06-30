"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      array: [{ name: "互联网IT" }, { name: "通信/硬件" }, { name: "设计/传媒" }, { name: "人事行政" }, { name: "金融/法务" }, { name: "生产制造" }, { name: "教育培训" }, { name: "生物医疗" }, { name: "服务业" }, { name: "房产/建筑" }, { name: "其他" }],
      index: 0,
      numberValue: 0,
      last_numberValue: 10,
      datetsingle: "",
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
      checkbox3: [],
      Times: [{
        text: "08:00",
        value: 0
      }, {
        text: "09:00",
        value: 1
      }, {
        text: "10:00",
        value: 2
      }, {
        text: "11:00",
        value: 3
      }, {
        text: "12:00",
        value: 4
      }, {
        text: "13:00",
        value: 5
      }, {
        text: "14:00",
        value: 6
      }, {
        text: "15:00",
        value: 7
      }, {
        text: "16:00",
        value: 8
      }, {
        text: "17:00",
        value: 9
      }, {
        text: "18:00",
        value: 10
      }, {
        text: "19:00",
        value: 11
      }, {
        text: "20:00",
        value: 12
      }, {
        text: "21:00",
        value: 13
      }, {
        text: "22:00",
        value: 14
      }, {
        text: "23:00",
        value: 15
      }]
    };
  },
  watch: {
    datesingle(newval) {
      console.log("单选:", this.datetimesingle);
    }
  },
  methods: {
    bindPickerChange(e) {
      console.log("picker发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    maskClick(e) {
      console.log("maskClick事件:", e);
    },
    change3(value) {
      this.last_numberValue = value;
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
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_section2 + _easycom_uni_number_box2 + _easycom_uni_datetime_picker2 + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_number_box + _easycom_uni_datetime_picker + _easycom_uni_data_checkbox)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "导师姓名:",
      type: "line"
    }),
    b: common_vendor.t($data.array[$data.index].name),
    c: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    d: $data.index,
    e: $data.array,
    f: common_vendor.p({
      title: "咨询主题:",
      type: "line"
    }),
    g: common_vendor.p({
      title: "咨询价格:",
      type: "line"
    }),
    h: common_vendor.o($options.change3),
    i: common_vendor.p({
      step: 10,
      max: "120",
      min: "10",
      value: $data.last_numberValue
    }),
    j: common_vendor.p({
      title: "预约时长 : " + $data.last_numberValue + "分钟",
      type: "line",
      padding: true
    }),
    k: common_vendor.p({
      title: "预约日期:",
      type: "line"
    }),
    l: common_vendor.o($options.maskClick),
    m: common_vendor.p({
      type: "date",
      start: $data.start,
      end: $data.end
    }),
    n: common_vendor.o(($event) => $data.checkbox3 = $event),
    o: common_vendor.p({
      mode: "tag",
      multiple: true,
      localdata: $data.Times,
      modelValue: $data.checkbox3
    }),
    p: common_vendor.p({
      title: "开始时间:",
      type: "line",
      subTitle: "可接受的咨询时间(多选)"
    }),
    q: common_vendor.p({
      title: "支付价格:",
      type: "line"
    }),
    r: common_vendor.o((...args) => $options.appointAndpay && $options.appointAndpay(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m3_appt_consult/m3_appt_consult.vue"]]);
wx.createPage(MiniProgramPage);
