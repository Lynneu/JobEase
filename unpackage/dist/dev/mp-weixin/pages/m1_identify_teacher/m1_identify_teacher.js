"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      array: [{ name: "前端开发" }, { name: "后端开发" }, { name: "C++开发" }, { name: "Java开发" }, { name: "算法" }, { name: "测试开发" }, { name: "产品经理" }, { name: "运营" }, { name: "HR" }, { name: "其他" }],
      index: 0,
      numberValue: 0,
      current: 0,
      timer: 0,
      //验证码时间
      showTimer: true
      //是否显示验证码时间
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
    },
    submit() {
      common_vendor.index.switchTab({
        url: "../find_teacher/find_teacher"
      });
    },
    getTest() {
      {
        common_vendor.index.showToast({
          title: "验证码发送成功",
          icon: "none"
        });
        that.timer = 60;
        that.timeDown(that.timer);
      }
    },
    // 设置验证码时间动态减少
    timeDown(num) {
      let that2 = this;
      if (num == 0) {
        that2.showTimer = true;
        return clearTimeout();
      } else {
        that2.showTimer = false;
        setTimeout(function() {
          that2.timer = num - 1;
          that2.timeDown(num - 1);
        }, 1e3);
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_number_box2 + _easycom_uni_section2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.bindTextAreaBlur && $options.bindTextAreaBlur(...args)),
    b: common_vendor.o((...args) => $options.bindTextAreaBlur && $options.bindTextAreaBlur(...args)),
    c: common_vendor.t($data.array[$data.index].name),
    d: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    e: $data.index,
    f: $data.array,
    g: common_vendor.o($options.change1),
    h: common_vendor.p({
      max: 999,
      step: 10,
      value: $data.numberValue
    }),
    i: common_vendor.p({
      title: "收费 : " + $data.numberValue + "元/小时（0-999）",
      type: "line",
      padding: true
    }),
    j: $data.showTimer
  }, $data.showTimer ? {
    k: common_vendor.o((...args) => $options.getTest && $options.getTest(...args))
  } : {
    l: common_vendor.t($data.timer + "s")
  }, {
    m: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m1_identify_teacher/m1_identify_teacher.vue"]]);
wx.createPage(MiniProgramPage);
