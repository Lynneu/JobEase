"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goal: [
        { value: 0, text: "找实习" },
        { value: 1, text: "找校招" }
      ],
      direction: [
        { value: 0, text: "前端开发" },
        { value: 1, text: "后端开发" },
        { value: 2, text: "C++开发" },
        { value: 3, text: "Java开发" },
        { value: 4, text: "算法" },
        { value: 5, text: "测试开发" },
        { value: 6, text: "产品经理" },
        { value: 7, text: "运营" },
        { value: 8, text: "HR" },
        { value: 9, text: "其他" }
      ],
      tag: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      user_detail: {
        "_id": "",
        "phone": "",
        "username": "",
        //"isTeacher":"",
        //"status":"",
        //"email":"",
        //"comment":"",
        //"co":"",
        //"job_number":"",
        //"price":"",
        //"score":"",
        "post": 0,
        //"tip_teacher":0,
        "tip_student": 0,
        "goal": 0
      }
    };
  },
  onLoad() {
    const db = common_vendor.Ds.database();
    db.collection("user_detail").where({
      phone: {
        $eq: "12345678900"
      }
    }).limit(1).get().then((res) => {
      if (res.result && res.result.data && res.result.data.length > 0) {
        this.user_detail = res.result.data[0];
      } else {
        console.error("No data found.");
      }
    }).catch((err) => {
      console.error("Error retrieving data:", err);
    });
  },
  methods: {
    changeGoal(e) {
      console.log(this.user_detail.goal);
    },
    changeDirection(e) {
      console.log(this.user_detail.post);
    },
    changeTag(e) {
      console.log(this.user_detail.tip_student);
    },
    submit() {
      if (!this.user_detail.username) {
        common_vendor.index.showToast({
          title: "用户名不能为空",
          icon: "none",
          duration: 2e3
        });
        return;
      }
      const db = common_vendor.Ds.database();
      let user_detail = { ...this.user_detail };
      delete user_detail._id;
      db.collection("user_detail").doc(this.user_detail._id).update(user_detail).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.error("Error updating data:", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_data_select2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_data_select)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "用户名:",
      type: "line"
    }),
    b: common_vendor.o(($event) => $data.user_detail.username = $event),
    c: common_vendor.p({
      placeholder: "最大输入长度为20",
      maxlength: "20",
      autoHeight: true,
      modelValue: $data.user_detail.username
    }),
    d: common_vendor.p({
      title: "身份:求职者",
      type: "line"
    }),
    e: common_vendor.p({
      title: "就业目标(点击更改):",
      type: "line"
    }),
    f: common_vendor.o($options.changeGoal),
    g: common_vendor.o(($event) => $data.user_detail.goal = $event),
    h: common_vendor.p({
      localdata: $data.goal,
      modelValue: $data.user_detail.goal
    }),
    i: common_vendor.p({
      title: "目标岗位(点击更改):",
      type: "line"
    }),
    j: common_vendor.o($options.changeDirection),
    k: common_vendor.o(($event) => $data.user_detail.post = $event),
    l: common_vendor.p({
      localdata: $data.direction,
      modelValue: $data.user_detail.post
    }),
    m: common_vendor.p({
      title: "需求标签(点击更改):",
      type: "line"
    }),
    n: common_vendor.o($options.changeTag),
    o: common_vendor.o(($event) => $data.user_detail.tip_student = $event),
    p: common_vendor.p({
      localdata: $data.tag,
      modelValue: $data.user_detail.tip_student
    }),
    q: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_seeker_information/m4_seeker_information.vue"]]);
wx.createPage(MiniProgramPage);
