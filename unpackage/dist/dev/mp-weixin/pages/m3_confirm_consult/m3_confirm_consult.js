"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      appt_theme: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      phone: ""
    };
  },
  onShow() {
    this.phone = getApp().globalData.ph;
  },
  methods: {
    updatefn(item) {
      console.log("cehsi");
      common_vendor.index.navigateTo({
        url: "../m3_confirm_consult/m3_choosetime/m3_choosetime?item=" + JSON.stringify(item),
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    },
    warning() {
      common_vendor.index.showToast({
        title: "咨询未完成",
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : {
        c: common_vendor.f(data.filter((item) => item.appt_state === 0 && item.teach_tele === $data.phone), (item, k1, i1) => {
          return {
            a: common_vendor.t(item.appt_cost),
            b: common_vendor.t($data.appt_theme[item.appt_label].text),
            c: common_vendor.t(item.appt_date),
            d: common_vendor.t(item.appt_duration),
            e: item._id,
            f: common_vendor.o(($event) => $options.updatefn(item), item._id),
            g: "38044095-2-" + i0 + "-" + i1 + "," + ("38044095-1-" + i0)
          };
        }),
        d: common_vendor.p({
          where: `item.appt_state = 0`,
          direction: "column"
        }),
        e: "38044095-1-" + i0 + ",38044095-0"
      }, {
        f: i0,
        g: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "38044095-0"
    }),
    b: common_vendor.p({
      collection: "consult"
    }),
    c: common_vendor.w(({
      data,
      loading,
      error,
      options
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : {
        c: common_vendor.f(data.filter((item) => item.appt_state === 1 && item.teach_tele === $data.phone), (item, k1, i1) => {
          return {
            a: common_vendor.t(item.appt_cost),
            b: common_vendor.t($data.appt_theme[item.appt_label].text),
            c: common_vendor.t(item.appt_date),
            d: common_vendor.t(item.appt_duration),
            e: item._id,
            f: common_vendor.o($options.warning, item._id),
            g: "38044095-5-" + i0 + "-" + i1 + "," + ("38044095-4-" + i0)
          };
        }),
        d: common_vendor.p({
          where: `item.appt_state = 0`,
          direction: "column"
        }),
        e: "38044095-4-" + i0 + ",38044095-3"
      }, {
        f: i0,
        g: s0
      });
    }, {
      name: "d",
      path: "c",
      vueId: "38044095-3"
    }),
    d: common_vendor.p({
      collection: "consult"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m3_confirm_consult/m3_confirm_consult.vue"]]);
wx.createPage(MiniProgramPage);
