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
        "phone": 12345678911,
        "lecture_title": "",
        "lecture_content": "",
        "lecture_label": 0,
        "lecture_price": 0,
        "lecture_time": this.getDateTime(/* @__PURE__ */ new Date(), false),
        "lecture_duration": 30,
        "lecture_limit": 0,
        "lecture_number": 1,
        "lecture_reserved": 0
      }
    };
  },
  methods: {
    changeDirection(e) {
      console.log(e);
    },
    changeLectureprice(value) {
      this.lecture.lecture_price = value;
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
      this.lecture.lecture_duration = value;
    },
    changeRestrictions(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.lecture.lecture_limit = i;
          break;
        }
      }
    },
    changeNumber(value) {
      this.lecture.lecture_number = value;
    },
    submit() {
      if (!this.lecture.lecture_title) {
        common_vendor.index.showToast({
          title: "请填写讲座名称",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      if (!this.lecture.lecture_content) {
        common_vendor.index.showToast({
          title: "请填写讲座简介",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      const db = common_vendor.Ds.database();
      db.collection("lecture").add(this.lecture).then((e) => {
        console.log(e);
      });
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
    b: common_vendor.o(($event) => $data.lecture.lecture_title = $event),
    c: common_vendor.p({
      placeholder: "最大输入长度为20",
      maxlength: "20",
      modelValue: $data.lecture.lecture_title
    }),
    d: common_vendor.p({
      title: "讲座简介:",
      type: "line"
    }),
    e: common_vendor.o(($event) => $data.lecture.lecture_content = $event),
    f: common_vendor.p({
      placeholder: "最大输入长度为50",
      maxlength: "50",
      autoHeight: true,
      modelValue: $data.lecture.lecture_content
    }),
    g: common_vendor.p({
      title: "标签(点击选择):",
      type: "line"
    }),
    h: common_vendor.o($options.changeDirection),
    i: common_vendor.o(($event) => $data.lecture.lecture_label = $event),
    j: common_vendor.p({
      localdata: $data.direction,
      clear: false,
      modelValue: $data.lecture.lecture_label
    }),
    k: common_vendor.o($options.changeLectureprice),
    l: common_vendor.o(($event) => $data.lecture.lecture_price = $event),
    m: common_vendor.p({
      max: 999,
      step: 5,
      value: $data.lecture.lecture_price,
      modelValue: $data.lecture.lecture_price
    }),
    n: common_vendor.p({
      title: "收费 : " + $data.lecture.lecture_price + "元/人（0-999）",
      type: "line",
      padding: true
    }),
    o: common_vendor.p({
      title: "开始时间:" + $data.lecture.lecture_time,
      type: "line"
    }),
    p: common_vendor.o($options.changeStart),
    q: common_vendor.o(($event) => $data.lecture.lecture_time = $event),
    r: common_vendor.p({
      type: "datetime",
      ["clear-icon"]: false,
      start: $data.start,
      end: $data.end,
      modelValue: $data.lecture.lecture_time
    }),
    s: common_vendor.o($options.changeLast),
    t: common_vendor.p({
      max: 999,
      step: 10,
      value: $data.lecture.lecture_duration
    }),
    v: common_vendor.p({
      title: "预期时间 : " + $data.lecture.lecture_duration + "分钟",
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
        b: index === $data.lecture.lecture_limit,
        c: common_vendor.t(item.name),
        d: item.value
      };
    }),
    y: common_vendor.o((...args) => $options.changeRestrictions && $options.changeRestrictions(...args)),
    z: $data.lecture.lecture_limit === 1
  }, $data.lecture.lecture_limit === 1 ? {
    A: common_vendor.o($options.changeNumber),
    B: common_vendor.p({
      min: 1,
      max: 9999,
      value: $data.lecture.lecture_number
    }),
    C: common_vendor.p({
      title: "允许 : " + $data.lecture.lecture_number + "人听讲座",
      type: "line",
      padding: true
    })
  } : {}, {
    D: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_release_lecture/m4_release_lecture.vue"]]);
wx.createPage(MiniProgramPage);
