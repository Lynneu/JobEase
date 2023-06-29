"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: ""
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
    }
  },
  onBackPress() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_icons2 + _easycom_uni_drawer2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_drawer + _easycom_uni_search_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDrawer("showLeft")),
    b: common_vendor.p({
      type: "bars",
      size: "25",
      color: "#007AFF"
    }),
    c: common_vendor.o(($event) => $options.closeDrawer("showLeft")),
    d: common_vendor.sr("showLeft", "671efb96-1"),
    e: common_vendor.p({
      mode: "left",
      width: 320
    }),
    f: common_vendor.o($options.search),
    g: common_vendor.o($options.blur),
    h: common_vendor.o($options.focus),
    i: common_vendor.o($options.input),
    j: common_vendor.o($options.cancel),
    k: common_vendor.o($options.clear),
    l: common_vendor.o(($event) => $data.searchValue = $event),
    m: common_vendor.p({
      focus: true,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    n: common_vendor.o((...args) => $options.searchclick && $options.searchclick(...args)),
    o: common_vendor.t($data.searchValue)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/find_teacher/find_teacher.vue"]]);
wx.createPage(MiniProgramPage);
