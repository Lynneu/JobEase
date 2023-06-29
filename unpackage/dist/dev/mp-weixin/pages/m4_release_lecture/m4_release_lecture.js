"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      array: [{ name: "互联网IT" }, { name: "通信/硬件" }, { name: "设计/传媒" }, { name: "人事行政" }, { name: "金融/法务" }, { name: "生产制造" }, { name: "教育培训" }, { name: "生物医疗" }, { name: "服务业" }, { name: "房产/建筑" }, { name: "其他" }],
      index: 0,
      numberValue: 0,
      datetimeString: this.getDateTime(/* @__PURE__ */ new Date(), false),
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
      last_numberValue: 0,
      listen_numberValue: 0,
      title: "radio 单选框",
      items: [
        {
          value: "0",
          name: "不限制人数",
          checked: "true"
        },
        {
          value: "1",
          name: "限制人数"
        }
      ],
      current: 0
    };
  },
  watch: {
    datetimeString() {
      console.log("日期时间单选:", this.datetimeString);
    }
  },
  onLoad() {
  },
  methods: {
    bindPickerChange(e) {
      console.log("picker发送选择改变，携带值为：" + e.detail.value);
      this.index = e.detail.value;
    },
    bindTextAreaBlur(e) {
      console.log(e.detail.value);
    },
    change1(value) {
      this.numberValue = value;
    },
    change3(value) {
      this.last_numberValue = value;
    },
    change4(value) {
      this.listen_numberValue = value;
    },
    radioChange(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.current = i;
          break;
        }
      }
    },
    change2(e) {
      console.log("----change2事件:", e);
    },
    getDateTime(date, addZero = true) {
      return `${this.getDate(date, addZero)} ${this.getTime(date, addZero)}`;
    },
    getDate(date, addZero = true) {
      date = new Date(date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${addZero ? this.addZero(month) : month}-${addZero ? this.addZero(day) : day}`;
    },
    getTime(date, addZero = true) {
      date = new Date(date);
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      return this.hideSecond ? `${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}` : `${addZero ? this.addZero(hour) : hour}:${addZero ? this.addZero(minute) : minute}:${addZero ? this.addZero(second) : second}`;
    },
    addZero(num) {
      if (num < 10) {
        num = `0${num}`;
      }
      return num;
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_uni_number_box2 + _easycom_uni_section2 + _easycom_uni_datetime_picker2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_section + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.bindTextAreaBlur && $options.bindTextAreaBlur(...args)),
    b: common_vendor.t($data.array[$data.index].name),
    c: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    d: $data.index,
    e: $data.array,
    f: common_vendor.o($options.change1),
    g: common_vendor.p({
      max: 9999,
      step: 5,
      value: $data.numberValue
    }),
    h: common_vendor.p({
      title: "收费 : " + $data.numberValue + "元/人（0-9999）",
      type: "line",
      padding: true
    }),
    i: common_vendor.p({
      title: "开始时间:",
      type: "line"
    }),
    j: common_vendor.o($options.change2),
    k: common_vendor.p({
      type: "datetime",
      start: $data.start,
      end: $data.end
    }),
    l: common_vendor.o($options.change3),
    m: common_vendor.p({
      max: 9999,
      step: 10,
      value: $data.last_numberValue
    }),
    n: common_vendor.p({
      title: "预期时间 : " + $data.last_numberValue + "分钟",
      type: "line",
      padding: true
    }),
    o: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.value,
        b: index === $data.current,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    p: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args)),
    q: $data.current === 1
  }, $data.current === 1 ? {
    r: common_vendor.o($options.change4),
    s: common_vendor.p({
      max: 9999,
      value: $data.listen_numberValue
    }),
    t: common_vendor.p({
      title: "允许 : " + $data.listen_numberValue + "人听讲座",
      type: "line",
      padding: true
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m4_release_lecture/m4_release_lecture.vue"]]);
wx.createPage(MiniProgramPage);
