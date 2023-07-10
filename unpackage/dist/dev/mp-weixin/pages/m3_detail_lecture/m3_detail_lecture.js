"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      direction: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      lecture: {
        _id: "",
        phone: 0,
        lecture_title: "",
        lecture_time: "0000.00.00  00:00",
        lecture_label: 0,
        lecture_price: 0,
        lecture_limit: 0,
        lecture_number: 0,
        lecture_reserved: 0,
        lecture_content: ""
      },
      limit: "",
      nolimit: "无限额",
      isappt: 0,
      user_detail: {
        username: ""
      },
      appt_lecture: {
        lecture_id: "",
        phone: "",
        lecture_state: 0
      }
    };
  },
  onShow() {
    this.appt_lecture.phone = getApp().globalData.ph;
    console.log("Phone:", this.lecture.phone);
  },
  onLoad: function(option) {
    console.log(option.lecture);
    this.lecture._id = option.lecture;
    this.appt_lecture.lecture_id = this.lecture._id;
    this.getMsg();
  },
  methods: {
    getMsg() {
      const db = common_vendor.Ds.database();
      db.collection("lecture").doc(this.lecture._id).get().then((res) => {
        console.log(res);
        this.lecture = res.result.data[0];
        console.log(this.lecture.lecture_limit + "测试1");
        this.islimit(this.lecture.lecture_limit);
        this.lecture.phone;
        db.collection("user_detail").where({
          phone: this.phone
        }).get().then((res2) => {
          console.log(res2);
          if (res2.result.data.length > 0) {
            this.user_detail.username = res2.result.data[0].username;
          }
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    },
    islimit(lim) {
      if (lim == 0) {
        this.limit = this.nolimit;
      }
      if (lim == 1) {
        this.limit = this.lecture.lecture_reserved + " / " + this.lecture.lecture_number + " 人";
      }
    },
    updateLectureReserved() {
      const db = common_vendor.Ds.database();
      const lectureId = this.lecture._id;
      const newReservedValue = this.lecture.lecture_reserved + 1;
      db.collection("lecture").doc(lectureId).update({
        lecture_reserved: newReservedValue
      }).then((res) => {
        console.log("lecture_reserved updated successfully");
      }).catch((err) => {
        console.error("Failed to update lecture_reserved:", err);
      });
    },
    checkappt() {
      const db = common_vendor.Ds.database();
      db.collection("appt_lecture").where({
        lecture_id: this.appt_lecture.lecture_id,
        phone: this.appt_lecture.phone
      }).limit(1).get().then((res) => {
        if (res.result && res.result.data && res.result.data.length > 0) {
          common_vendor.index.showToast({
            title: "已预约",
            icon: "none",
            duration: 2e3
          });
        } else {
          if (this.lecture.lecture_limit == 1) {
            console.log("筛选1");
            if (this.lecture.lecture_reserved >= this.lecture.lecture_number) {
              console.log("筛选2");
              common_vendor.index.showToast({
                title: "预约人数已满",
                icon: "none",
                duration: 2e3
              });
              return;
            }
          }
          console.log("筛选成功");
          this.updateLectureReserved();
          const db2 = common_vendor.Ds.database();
          db2.collection("appt_lecture").add(this.appt_lecture).then((e) => {
            console.log(e);
          }).catch((err) => {
            console.error(err);
          });
          common_vendor.index.showToast({
            title: "预约成功",
            icon: "none",
            duration: 2e3
          });
          common_vendor.index.switchTab({
            url: "../find_lecture/find_lecture"
          });
        }
      });
    },
    appointLecture() {
      this.checkappt();
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_title2 + _easycom_uni_section2)();
}
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_title + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.lecture.lecture_title,
      color: "#027fff",
      type: "h1"
    }),
    b: common_vendor.p({
      title: "演 讲 人 ：" + $data.user_detail.username,
      type: "line",
      padding: "0px"
    }),
    c: common_vendor.p({
      title: "讲座时间：" + $data.lecture.lecture_time,
      type: "line"
    }),
    d: common_vendor.p({
      title: "讲座主题：" + $data.direction[$data.lecture.lecture_label].text,
      type: "line"
    }),
    e: common_vendor.p({
      title: "讲座费用：" + $data.lecture.lecture_price + " 元",
      type: "line"
    }),
    f: common_vendor.p({
      title: "剩余名额：" + $data.limit,
      type: "line"
    }),
    g: common_vendor.p({
      title: "讲座内容",
      type: "circle"
    }),
    h: common_vendor.t($data.lecture.lecture_content),
    i: common_vendor.o((...args) => $options.appointLecture && $options.appointLecture(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m3_detail_lecture/m3_detail_lecture.vue"]]);
wx.createPage(MiniProgramPage);
