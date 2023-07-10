"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  name: "pageconfirmConsult",
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
      phone: "",
      consultData1: [],
      // Use this to store the data of the first unicloud-db component
      consultData2: []
      // Use this to store the data of the second unicloud-db component
    };
  },
  mounted() {
    try {
      const phone = getApp().globalData.ph;
      if (phone !== this.phone) {
        this.phone = phone;
        this.$forceUpdate();
      }
      console.log(this.phone);
    } catch (error) {
      console.error(error);
    }
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let db = common_vendor.Ds.database();
        let res1 = await db.collection("consult").where({ appt_state: 0, teach_tele: this.phone }).get();
        this.consultData1 = res1.result.data;
        let res2 = await db.collection("consult").where({ appt_state: 1, teach_tele: this.phone }).get();
        this.consultData2 = res2.result.data;
      } catch (error) {
        console.log(error);
      }
    },
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
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "./uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "./uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.consultData1, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.appt_cost),
        b: common_vendor.t($data.appt_theme[item.appt_label].text),
        c: common_vendor.t(item.appt_date),
        d: common_vendor.t(item.appt_duration),
        e: item._id,
        f: common_vendor.o(($event) => $options.updatefn(item), item._id),
        g: "38044095-1-" + i0 + ",38044095-0"
      };
    }),
    b: common_vendor.p({
      direction: "column",
      clickable: true
    }),
    c: common_vendor.f($data.consultData2, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.appt_cost),
        b: common_vendor.t($data.appt_theme[item.appt_label].text),
        c: common_vendor.t(item.appt_date),
        d: common_vendor.t(item.appt_duration),
        e: item._id,
        f: "38044095-3-" + i0 + ",38044095-2"
      };
    }),
    d: common_vendor.p({
      direction: "column"
    }),
    e: $data.consultData2 == null
  }, $data.consultData2 == null ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m3_confirm_consult/m3_confirm_consult.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
