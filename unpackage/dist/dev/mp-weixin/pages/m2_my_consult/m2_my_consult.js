"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showFake: false,
      appt_theme: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      appt_ste: [
        { value: 0, text: "待审核" },
        { value: 1, text: "未完成" },
        { value: 2, text: "已完成" },
        { value: 3, text: "已评价" },
        { value: 4, text: "已取消" },
        { value: 5, text: "其他" }
      ],
      Inv: 0
    };
  },
  onLoad() {
    this.st = getApp().globalData.ph;
    if (getApp().globalData.st == 0) {
      this.student = true;
      this.sWhere = "stud_tele=='" + this.st + "'";
    } else {
      this.student = false;
      this.sWhere = "teach_tele=='" + this.st + "'";
    }
    this.getMsg();
  },
  methods: {
    getMsg() {
      {
        const db = common_vendor.Ds.database();
        db.collection("consult").limit(1).get().then((res) => {
          console.log("xxx");
          if (this.student) {
            this.showFake = false;
          } else {
            this.showFake = true;
          }
        }).catch((err) => {
          console.log(err);
          if (this.student) {
            showFake = false;
          } else {
            showFake = true;
          }
        });
      }
    },
    detail(item) {
      common_vendor.index.navigateTo({
        url: "../m2_my_consult/detail/m2_consult_detail?item=" + JSON.stringify(item),
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    },
    goFinish(id) {
      this.id = id;
      const db = common_vendor.Ds.database();
      db.collection("consult").doc(this.id).update({
        appt_state: 2
      });
      common_vendor.index.showToast({
        title: "确认成功",
        icon: "none"
      });
      event.stopPropagation();
    },
    goEvaluate(id, ph) {
      this.id = id;
      this.evaluatePh = ph;
      this.$refs.popup.open("center");
      event.stopPropagation();
    },
    changeTab(Inv) {
      that.navIdx = Inv;
    },
    onChange(e) {
      console.log("rate发生改变:" + e["value"]);
      console.log("xx" + this.evaluatePh);
      const db = common_vendor.Ds.database();
      db.collection("consult").doc(this.id).update({
        appt_state: 3
      });
      db.collection("user_detail").where({
        phone: {
          $eq: this.st
        }
      }).get().then((res) => {
        if (res.result.data.length > 0) {
          db.collection("user_detail").doc(res.result.data[0]._id).update({
            score: e["value"]
          }).then((res2) => {
          }).catch((err) => {
            console.error("Error updating data:", err);
          });
        }
      }).catch((err) => {
        console.log(err);
      });
      common_vendor.index.showToast({
        title: "感谢您的评分🙏：" + e["value"] + "分",
        icon: "none"
      });
      this.$refs.popup.close();
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_card2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db + _easycom_uni_rate + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.n($data.Inv == 0 ? "inv-h-se" : ""),
    b: common_vendor.o(($event) => $data.Inv = 0),
    c: common_vendor.n($data.Inv == 1 ? "inv-h-se" : ""),
    d: common_vendor.o(($event) => $data.Inv = 1),
    e: common_vendor.n($data.Inv == 2 ? "inv-h-se" : ""),
    f: common_vendor.o(($event) => $data.Inv = 2),
    g: $data.showFake
  }, $data.showFake ? {
    h: $data.Inv == 0,
    i: $data.Inv == 1,
    j: $data.Inv == 2
  } : {}, {
    k: common_vendor.w(({
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
        c: common_vendor.f(data.filter((item) => item.appt_state === 0 || item.appt_state === 1), (item, k1, i1) => {
          return {
            a: common_vendor.t($data.appt_theme[item.appt_label].text),
            b: common_vendor.t($data.appt_ste[item.appt_state].text),
            c: common_vendor.t(item.appt_cost),
            d: common_vendor.t(item.appt_duration),
            e: common_vendor.t(item.appt_date),
            f: common_vendor.o(($event) => $options.goFinish(item._id), item._id),
            g: "225f79fd-7-" + i0 + "-" + i1 + "," + ("225f79fd-6-" + i0 + "-" + i1),
            h: item._id,
            i: common_vendor.o(($event) => $options.detail(item), item._id),
            j: "225f79fd-6-" + i0 + "-" + i1 + "," + ("225f79fd-5-" + i0)
          };
        }),
        d: common_vendor.p({
          direction: "column"
        }),
        e: "225f79fd-5-" + i0 + ",225f79fd-4"
      }, {
        f: error
      }, error ? {
        g: common_vendor.t(error.message)
      } : {
        h: common_vendor.f(data.filter((item) => item.appt_state === 2), (item, k1, i1) => {
          return {
            a: common_vendor.t($data.appt_theme[item.appt_label].text),
            b: common_vendor.t($data.appt_ste[item.appt_state].text),
            c: common_vendor.t(item.appt_cost),
            d: common_vendor.t(item.appt_duration),
            e: common_vendor.t(item.appt_date),
            f: common_vendor.o(($event) => $options.goEvaluate(item._id, item.teach_tele), item._id),
            g: "225f79fd-10-" + i0 + "-" + i1 + "," + ("225f79fd-9-" + i0 + "-" + i1),
            h: item._id,
            i: common_vendor.o(($event) => $options.detail(item), item._id),
            j: "225f79fd-9-" + i0 + "-" + i1 + "," + ("225f79fd-8-" + i0)
          };
        }),
        i: common_vendor.p({
          direction: "column"
        }),
        j: "225f79fd-8-" + i0 + ",225f79fd-4"
      }, {
        k: error
      }, error ? {
        l: common_vendor.t(error.message)
      } : {
        m: common_vendor.f(data.filter((item) => item.appt_state === 3), (item, k1, i1) => {
          return {
            a: common_vendor.t($data.appt_theme[item.appt_label].text),
            b: common_vendor.t($data.appt_ste[item.appt_state].text),
            c: common_vendor.t(item.appt_cost),
            d: common_vendor.t(item.appt_duration),
            e: common_vendor.t(item.appt_date),
            f: "225f79fd-13-" + i0 + "-" + i1 + "," + ("225f79fd-12-" + i0 + "-" + i1),
            g: item._id,
            h: common_vendor.o(($event) => $options.detail(item), item._id),
            i: "225f79fd-12-" + i0 + "-" + i1 + "," + ("225f79fd-11-" + i0)
          };
        }),
        n: common_vendor.p({
          direction: "column"
        }),
        o: "225f79fd-11-" + i0 + ",225f79fd-4"
      }, {
        p: i0,
        q: s0
      });
    }, {
      name: "d",
      path: "k",
      vueId: "225f79fd-4"
    }),
    l: $data.Inv == 0,
    m: $data.Inv == 1,
    n: $data.Inv == 2,
    o: common_vendor.sr("udb", "225f79fd-4"),
    p: common_vendor.p({
      collection: "consult",
      where: _ctx.sWhere
    }),
    q: common_vendor.o($options.onChange),
    r: common_vendor.sr("popup", "225f79fd-14"),
    s: common_vendor.p({
      ["mask-click"]: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m2_my_consult/m2_my_consult.vue"]]);
wx.createPage(MiniProgramPage);
