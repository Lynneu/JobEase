"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showFake: false,
      lecture_list: [
        { value: 0, text: "前端开发" },
        { value: 1, text: "后端开发" },
        { value: 2, text: "C++开发" },
        { value: 3, text: "Java开发" },
        { value: 4, text: "算法" },
        { value: 5, text: "测试开发" },
        { value: 6, text: "产品经理" },
        { value: 7, text: "运营" },
        { value: 8, text: "HR" },
        { value: 9, text: "简历优化" },
        { value: 10, text: "面试经验" },
        { value: 11, text: "就业指导" },
        { value: 12, text: "职业规划" },
        { value: 13, text: "薪资谈判" },
        { value: 14, text: "其他" }
      ],
      appt_ste: [
        { value: 0, text: "未完成" },
        { value: 1, text: "已完成" },
        { value: 2, text: "已评价" }
      ],
      Inv: 0
    };
  },
  onLoad() {
    this.ph = getApp().globalData.ph;
    if (getApp().globalData.st == 0) {
      this.st = true;
      this.sWhere = "phone=='" + this.ph + "'";
    } else {
      this.st = false;
      this.sWhere = "lecture.phone=='" + this.ph + "' && appt_lecture.lecture_id == lecture._id";
    }
    this.getMsg();
  },
  methods: {
    detail(item) {
      common_vendor.index.navigateTo({
        url: "../m2_my_lecture/detail/m2_lecture_detail?item=" + JSON.stringify(item),
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    },
    changeTab(Inv) {
      that.navIdx = Inv;
    },
    getMsg() {
      {
        const db = common_vendor.Ds.database();
        db.collection("appt_lecture,lecture").foreignKey("appt_lecture.lecture_id").where(
          {
            phone: this.ph,
            lecture_state: 2
            // phone: {
            // 	$eq: this.ph
            // },
            // lecture_state: {
            // 	$eq: '3'
            // }
          }
        ).field("lecture_state,lecture_id").get().then((res) => {
          console.log(res);
          if (this.st) {
            this.showFake = false;
          } else {
            this.showFake = true;
          }
        }).catch((err) => {
          console.log("xxxx" + err);
        });
      }
    },
    goFinish(id) {
      this.id = id;
      const db = common_vendor.Ds.database();
      db.collection("appt_lecture").doc(this.id).update({
        lecture_state: 1
      }).then((res) => {
        console.log("xxx");
        console.log(res);
      }).catch((err) => {
        console.error("Error updating data:", err);
      });
      common_vendor.index.showToast({
        title: "确认成功",
        icon: "none"
      });
      event.stopPropagation();
    },
    goEvaluate(id) {
      this.id = id;
      this.$refs.popup.open("center");
      event.stopPropagation();
    },
    onChange(e) {
      console.log(this.id);
      const db = common_vendor.Ds.database();
      db.collection("appt_lecture").doc(this.id).update({
        lecture_state: 2
      }).then((res) => {
        console.log("xxx");
        console.log(res);
      }).catch((err) => {
        console.error("Error updating data:", err);
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
        c: common_vendor.f(data.filter((item) => item.lecture_state === 0), (item, k1, i1) => {
          return {
            a: common_vendor.t(item.lecture_id[0].lecture_title),
            b: common_vendor.t($data.appt_ste[item.lecture_state].text),
            c: common_vendor.t(item.lecture_id[0].lecture_price),
            d: common_vendor.t(item.lecture_id[0].lecture_duration),
            e: common_vendor.t(item.lecture_id[0].lecture_time),
            f: common_vendor.o(($event) => $options.goFinish(item._id), item._id),
            g: "6abc03a1-7-" + i0 + "-" + i1 + "," + ("6abc03a1-6-" + i0 + "-" + i1),
            h: item._id,
            i: common_vendor.o(($event) => $options.detail(item), item._id),
            j: "6abc03a1-6-" + i0 + "-" + i1 + "," + ("6abc03a1-5-" + i0)
          };
        }),
        d: common_vendor.p({
          direction: "column"
        }),
        e: "6abc03a1-5-" + i0 + ",6abc03a1-4"
      }, {
        f: error
      }, error ? {
        g: common_vendor.t(error.message)
      } : {
        h: common_vendor.f(data.filter((item) => item.lecture_state === 1), (item, k1, i1) => {
          return {
            a: common_vendor.t(item.lecture_id[0].lecture_title),
            b: common_vendor.t($data.appt_ste[item.lecture_state].text),
            c: common_vendor.t(item.lecture_id[0].lecture_price),
            d: common_vendor.t(item.lecture_id[0].lecture_duration),
            e: common_vendor.t(item.lecture_id[0].lecture_time),
            f: common_vendor.o(($event) => $options.goEvaluate(item._id), item._id),
            g: "6abc03a1-10-" + i0 + "-" + i1 + "," + ("6abc03a1-9-" + i0 + "-" + i1),
            h: item._id,
            i: common_vendor.o(($event) => $options.detail(item), item._id),
            j: "6abc03a1-9-" + i0 + "-" + i1 + "," + ("6abc03a1-8-" + i0)
          };
        }),
        i: common_vendor.p({
          direction: "column"
        }),
        j: "6abc03a1-8-" + i0 + ",6abc03a1-4"
      }, {
        k: error
      }, error ? {
        l: common_vendor.t(error.message)
      } : {
        m: common_vendor.f(data.filter((item) => item.lecture_state === 2), (item, k1, i1) => {
          return {
            a: common_vendor.t(item.lecture_id[0].lecture_title),
            b: common_vendor.t($data.appt_ste[item.lecture_state].text),
            c: common_vendor.t(item.lecture_id[0].lecture_price),
            d: common_vendor.t(item.lecture_id[0].lecture_duration),
            e: common_vendor.t(item.lecture_id[0].lecture_time),
            f: "6abc03a1-13-" + i0 + "-" + i1 + "," + ("6abc03a1-12-" + i0 + "-" + i1),
            g: item._id,
            h: common_vendor.o(($event) => $options.detail(item), item._id),
            i: "6abc03a1-12-" + i0 + "-" + i1 + "," + ("6abc03a1-11-" + i0)
          };
        }),
        n: common_vendor.p({
          direction: "column"
        }),
        o: "6abc03a1-11-" + i0 + ",6abc03a1-4"
      }, {
        p: i0,
        q: s0
      });
    }, {
      name: "d",
      path: "k",
      vueId: "6abc03a1-4"
    }),
    l: $data.Inv == 0,
    m: $data.Inv == 1,
    n: $data.Inv == 2,
    o: common_vendor.p({
      collection: "appt_lecture,lecture",
      ["foreign-key"]: "appt_lecture.lecture_id",
      where: _ctx.sWhere
    }),
    p: common_vendor.o($options.onChange),
    q: common_vendor.sr("popup", "6abc03a1-14"),
    r: common_vendor.p({
      ["mask-click"]: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m2_my_lecture/m2_my_lecture.vue"]]);
wx.createPage(MiniProgramPage);
