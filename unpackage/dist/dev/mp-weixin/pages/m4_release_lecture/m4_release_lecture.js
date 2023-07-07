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
      start: Date.now(),
      end: Date.now() + 14 * 24 * 36e5,
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
      lecture: {
        "lectureName": "",
        "description": "",
        index1: 0,
        numberValue: 0,
        "datetimeString": this.getDateTime(/* @__PURE__ */ new Date(), false),
        last_numberValue: 30,
        current: 0,
        listen_numberValue: 1
      }
    };
  },
  methods: {
    changeDirection(e) {
      console.log(e);
    },
    changeLectureprice(value) {
      this.lecture.numberValue = value;
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
      this.lecture.last_numberValue = value;
    },
    changeRestrictions(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.lecture.current = i;
          break;
        }
      }
    },
    changeNumber(value) {
      this.lecture.listen_numberValue = value;
    },
    submit() {
      if (!this.lecture.lectureName) {
        common_vendor.index.showToast({
          title: "请填写讲座名称",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      if (!this.lecture.description) {
        common_vendor.index.showToast({
          title: "请填写讲座简介",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      common_vendor.index.showToast({
        title: "发布成功",
        icon: "none",
        duration: 2e3
      });
      common_vendor.index.switchTab({
        url: "../find_lecture/find_lecture"
      });
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
    b: common_vendor.o(($event) => $data.lecture.lectureName = $event),
    c: common_vendor.p({
      placeholder: "最大输入长度为20",
      maxlength: "20",
      modelValue: $data.lecture.lectureName
    }),
    d: common_vendor.p({
      title: "讲座简介:",
      type: "line"
    }),
    e: common_vendor.o(($event) => $data.lecture.description = $event),
    f: common_vendor.p({
      placeholder: "最大输入长度为50",
      maxlength: "50",
      autoHeight: true,
      modelValue: $data.lecture.description
    }),
    g: common_vendor.p({
      title: "标签:",
      type: "line"
    }),
    h: common_vendor.o($options.changeDirection),
    i: common_vendor.o(($event) => $data.lecture.index1 = $event),
    j: common_vendor.p({
      localdata: $data.direction,
      clear: false,
      modelValue: $data.lecture.index1
    }),
    k: common_vendor.o($options.changeLectureprice),
    l: common_vendor.o(($event) => $data.lecture.numberValue = $event),
    m: common_vendor.p({
      max: 999,
      step: 5,
      value: $data.lecture.numberValue,
      modelValue: $data.lecture.numberValue
    }),
    n: common_vendor.p({
      title: "收费 : " + $data.lecture.numberValue + "元/人（0-999）",
      type: "line",
      padding: true
    }),
    o: common_vendor.p({
      title: "开始时间:" + $data.lecture.datetimeString,
      type: "line"
    }),
    p: common_vendor.o($options.changeStart),
    q: common_vendor.o(($event) => $data.lecture.datetimeString = $event),
    r: common_vendor.p({
      type: "datetime",
      ["clear-icon"]: false,
      start: $data.start,
      end: $data.end,
      modelValue: $data.lecture.datetimeString
    }),
    s: common_vendor.o($options.changeLast),
    t: common_vendor.p({
      max: 999,
      step: 10,
      value: $data.lecture.last_numberValue
    }),
    v: common_vendor.p({
      title: "预期时间 : " + $data.lecture.last_numberValue + "分钟",
      type: "line",
      padding: true
    }),
    w: common_vendor.p({
      title: "是否限制人数:",
      type: "line"
    }),
    x: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.value,
        b: index === $data.lecture.current,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    y: common_vendor.o((...args) => $options.changeRestrictions && $options.changeRestrictions(...args)),
    z: $data.lecture.current === 1
  }, $data.lecture.current === 1 ? {
    A: common_vendor.o($options.changeNumber),
    B: common_vendor.p({
      min: 1,
      max: 9999,
      value: $data.lecture.listen_numberValue
    }),
    C: common_vendor.p({
      title: "允许 : " + $data.lecture.listen_numberValue + "人听讲座",
      type: "line",
      padding: true
    })
  } : {}, {
    D: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_release_lecture/m4_release_lecture.vue"]]);
wx.createPage(MiniProgramPage);
