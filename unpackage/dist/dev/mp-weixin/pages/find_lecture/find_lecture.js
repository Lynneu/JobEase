"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      searchValue: "",
      title: "uni-fab",
      directionStr: "垂直",
      horizontal: "right",
      vertical: "bottom",
      direction: "horizontal",
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#fff",
        buttonColor: "#007AFF",
        iconBackgroundColor: "#fff"
      },
      is_color_type: false,
      content: [{
        iconWidth: "24px",
        iconPath: "../../static/image/icon_create_lecture.png",
        // selectedIconPath: '../../static/image/icon_create_lecture_HL.png',
        text: "发布讲座",
        active: false
      }]
    };
  },
  onBackPress() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close(false);
      return true;
    }
    return false;
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
    trigger(e) {
      console.log(e);
      this.$refs.fab.close();
      common_vendor.index.navigateTo({
        url: "../m4_release_lecture/m4_release_lecture"
      });
    },
    showDrawer(ref) {
      this.$refs[ref].open();
    },
    closeDrawer(ref) {
      this.$refs[ref].close();
    },
    searchclick() {
      console.log(this.searchValue());
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_icons2 + _easycom_uni_drawer2 + _easycom_uni_search_bar2 + _easycom_uni_fab2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_drawer + _easycom_uni_search_bar + _easycom_uni_fab)();
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
    d: common_vendor.sr("showLeft", "358e3fb5-1"),
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
    o: common_vendor.t($data.searchValue),
    p: common_vendor.sr("fab", "358e3fb5-3"),
    q: common_vendor.o($options.trigger),
    r: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: $data.horizontal,
      vertical: $data.vertical,
      direction: $data.direction
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/find_lecture/find_lecture.vue"]]);
wx.createPage(MiniProgramPage);
