"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: "",
      jobvalue: "",
      consultvalue: "",
      job: [
        { value: 0, text: "前端" },
        { value: 1, text: "后端" },
        { value: 2, text: "产品经理" },
        { value: 3, text: "运营" },
        { value: 4, text: "策划" }
      ],
      consult: [
        { value: 0, text: "简历修改" },
        { value: 1, text: "面试准备" },
        { value: 2, text: "薪资" },
        { value: 3, text: "职业规划" }
      ]
    };
  },
  methods: {
    search(res) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
    },
    input(res) {
      console.log("----input:", res);
    },
    clear(res) {
      common_vendor.index.showToast({
        title: "clear事件，清除值为：" + res.value,
        icon: "none"
      });
    },
    blur(res) {
      common_vendor.index.showToast({
        title: "blur事件，输入值为：" + res.value,
        icon: "none"
      });
    },
    focus(e) {
      common_vendor.index.showToast({
        title: "focus事件，输出值为：" + e.value,
        icon: "none"
      });
    },
    cancel(res) {
      common_vendor.index.showToast({
        title: "点击取消，输入值为：" + res.value,
        icon: "none"
      });
    },
    showDrawer() {
      this.$refs.showLeft.open();
    },
    closeDrawer() {
      this.$refs.showLeft.close();
    },
    searchclick() {
      console.log(this.searchValue);
    },
    changeJob(e) {
      console.log("e:", e);
    },
    changeconsult(e) {
      console.log("e:", e);
    }
  },
  onBackPress() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_number_box2 + _easycom_uni_forms2 + _easycom_uni_section2 + _easycom_uni_drawer2 + _easycom_uni_search_bar2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_number_box + _easycom_uni_forms + _easycom_uni_section + _easycom_uni_drawer + _easycom_uni_search_bar + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDrawer("showLeft")),
    b: common_vendor.p({
      type: "bars",
      size: "25",
      color: "#007AFF"
    }),
    c: common_vendor.o($options.changeJob),
    d: common_vendor.o(($event) => $data.jobvalue = $event),
    e: common_vendor.p({
      localdata: $data.job,
      placeholder: "请选择职位",
      modelValue: $data.jobvalue
    }),
    f: common_vendor.p({
      label: "咨询职位",
      ["label-width"]: "60"
    }),
    g: common_vendor.o($options.changeconsult),
    h: common_vendor.o(($event) => $data.consultvalue = $event),
    i: common_vendor.p({
      localdata: $data.consult,
      placeholder: "请选择咨询方向",
      modelValue: $data.consultvalue
    }),
    j: common_vendor.p({
      label: "咨询方向",
      ["label-width"]: "60"
    }),
    k: common_vendor.p({
      min: 1,
      max: 999,
      value: 100,
      background: "#2979FF",
      color: "#fff"
    }),
    l: common_vendor.p({
      label: "价格区间",
      ["label-width"]: "60"
    }),
    m: common_vendor.p({
      min: 0,
      max: 10,
      value: 5,
      background: "#2979FF",
      color: "#fff"
    }),
    n: common_vendor.p({
      label: "评分区间",
      ["label-width"]: "60"
    }),
    o: common_vendor.o(($event) => $options.closeDrawer("showLeft")),
    p: common_vendor.p({
      title: "筛选",
      type: "line"
    }),
    q: common_vendor.sr("showLeft", "671efb96-1"),
    r: common_vendor.p({
      mode: "left",
      width: 300
    }),
    s: common_vendor.o($options.search),
    t: common_vendor.o($options.blur),
    v: common_vendor.o($options.focus),
    w: common_vendor.o($options.input),
    x: common_vendor.o($options.cancel),
    y: common_vendor.o($options.clear),
    z: common_vendor.o(($event) => $data.searchValue = $event),
    A: common_vendor.p({
      focus: true,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    B: common_vendor.o((...args) => $options.searchclick && $options.searchclick(...args)),
    C: common_vendor.p({
      title: "默认 navigateTo 方式跳转页面",
      to: "../m3_detail_appt_consult/m3_detail_appt_consult",
      note: "列表描述信息"
    }),
    D: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    E: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    F: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    G: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    H: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    I: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    J: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    K: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    L: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    M: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    }),
    N: common_vendor.p({
      title: "列表文字",
      note: "列表描述信息"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/find_teacher/find_teacher.vue"]]);
wx.createPage(MiniProgramPage);
