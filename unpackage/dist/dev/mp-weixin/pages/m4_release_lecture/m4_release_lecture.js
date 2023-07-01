"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      lectureName: "",
      description: "",
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
      index1: 0,
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
      current: 0,
      listen_numberValue: 0,
      numberValue: 0,
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
      datetimeString: this.getDateTime(/* @__PURE__ */ new Date(), false),
      last_numberValue: 30
    };
  },
  watch: {
    datetimeString() {
      console.log("日期时间单选:", this.datetimeString);
    }
  },
  methods: {
    changeDirection(e) {
      console.log(e);
    },
    inputName(e) {
      this.lectureName = e.detail.value;
    },
    descriptionInput(e) {
      this.description = e.detail.value;
    },
    changeNumber(value) {
      this.listen_numberValue = value;
    },
    changeRestrictions(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.current = i;
          break;
        }
      }
    },
    changeLectureprice(value) {
      this.numberValue = value;
    },
    changeStart(e) {
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
    },
    changeLast(value) {
      this.last_numberValue = value;
    },
    savaInfo() {
      let that = this;
      let lectureName = that.lectureName;
      that.description;
      that.numberValue;
      that.index1;
      that.datetimeString;
      that.last_numberValue;
      that.listen_numberValue;
      if (!lectureName) {
        common_vendor.index.showToast({
          title: "请填写讲座名称",
          icon: "none",
          duration: 2e3
        });
        return;
      }
    }
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_data_select2 + _easycom_uni_number_box2 + _easycom_uni_datetime_picker2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_data_select + _easycom_uni_number_box + _easycom_uni_datetime_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "讲座名称:",
      type: "line"
    }),
    b: common_vendor.o($options.inputName),
    c: common_vendor.o(($event) => $data.lectureName = $event),
    d: common_vendor.p({
      placeholder: "最大输入长度为20",
      maxlength: "20",
      modelValue: $data.lectureName
    }),
    e: common_vendor.p({
      title: "讲座简介:",
      type: "line"
    }),
    f: common_vendor.o($options.descriptionInput),
    g: common_vendor.o(($event) => $data.description = $event),
    h: common_vendor.p({
      type: "textarea",
      autoHeight: true,
      placeholder: "最大输入长度为200",
      maxlength: "200",
      modelValue: $data.description
    }),
    i: common_vendor.p({
      title: "标签:",
      type: "line"
    }),
    j: common_vendor.o($options.changeDirection),
    k: common_vendor.o(($event) => $data.index1 = $event),
    l: common_vendor.p({
      localdata: $data.direction,
      modelValue: $data.index1
    }),
    m: common_vendor.o($options.changeLectureprice),
    n: common_vendor.p({
      max: 9999,
      step: 5,
      value: $data.numberValue
    }),
    o: common_vendor.p({
      title: "收费 : " + $data.numberValue + "元/人（0-9999）",
      type: "line",
      padding: true
    }),
    p: common_vendor.p({
      title: "开始时间:" + $data.datetimeString,
      type: "line"
    }),
    q: common_vendor.o($options.changeStart),
    r: common_vendor.o(($event) => $data.datetimeString = $event),
    s: common_vendor.p({
      type: "datetime",
      start: $data.start,
      end: $data.end,
      modelValue: $data.datetimeString
    }),
    t: common_vendor.o($options.changeLast),
    v: common_vendor.p({
      max: 9999,
      step: 10,
      value: $data.last_numberValue
    }),
    w: common_vendor.p({
      title: "预期时间 : " + $data.last_numberValue + "分钟",
      type: "line",
      padding: true
    }),
    x: common_vendor.p({
      title: "是否限制人数:",
      type: "line"
    }),
    y: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.value,
        b: index === $data.current,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    z: common_vendor.o((...args) => $options.changeRestrictions && $options.changeRestrictions(...args)),
    A: $data.current === 1
  }, $data.current === 1 ? {
    B: common_vendor.o($options.changeNumber),
    C: common_vendor.p({
      max: 9999,
      value: $data.listen_numberValue
    }),
    D: common_vendor.p({
      title: "允许 : " + $data.listen_numberValue + "人听讲座",
      type: "line",
      padding: true
    })
  } : {}, {
    E: common_vendor.o((...args) => $options.savaInfo && $options.savaInfo(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_release_lecture/m4_release_lecture.vue"]]);
wx.createPage(MiniProgramPage);
