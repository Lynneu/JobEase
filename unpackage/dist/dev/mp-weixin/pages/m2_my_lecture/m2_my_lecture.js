"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabIndex: 0,
      barNameList: [{
        name: "未完成",
        id: "0"
      }, {
        name: "已完成",
        id: "1"
      }, {
        name: "已评价",
        id: "2"
      }, {
        name: "全部",
        id: "3"
      }],
      barContentList: []
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.barNameList.forEach((tabBar) => {
          this.barContentList.push({
            data: [],
            isLoading: false,
            refreshText: "",
            loadingText: "加载更多..."
          });
        });
        this.getList(0);
      }, 350);
    },
    // 获取列表数据
    getList(index) {
      let activeTab = this.barContentList[index];
      let list = [];
      activeTab.data = activeTab.data.concat(list);
    },
    // swiper滑动时改变下标
    tabChange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    // scroll-view 点击 tab 时 改变下标
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.tabIndex == index) {
        return;
      }
      this.barContentList[this.tabIndex].data = [];
      this.getList(index);
      this.tabIndex = index;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.barNameList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.tabIndex == index ? "active_text" : ""),
        c: item.id,
        d: index,
        e: common_vendor.o((...args) => $options.ontabtap && $options.ontabtap(...args), item.id)
      };
    }),
    b: common_vendor.f($data.barContentList, (item, index, i0) => {
      return {
        a: common_vendor.f(item.data, (listItem, listIndex, i1) => {
          return {
            a: common_vendor.t(listItem.title),
            b: common_vendor.t(listItem.statusLabal),
            c: common_vendor.t(listItem.content)
          };
        }),
        b: item.id
      };
    }),
    c: $data.tabIndex,
    d: common_vendor.o((...args) => $options.tabChange && $options.tabChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m2_my_lecture/m2_my_lecture.vue"]]);
wx.createPage(MiniProgramPage);
