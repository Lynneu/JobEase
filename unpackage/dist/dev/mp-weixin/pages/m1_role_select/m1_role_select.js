"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          course_id: "001",
          title: "求职者",
          course: "体育课",
          duration: "0",
          selected: false
        },
        {
          course_id: "002",
          title: "导师",
          course: "音乐课",
          duration: "120",
          selected: false
        },
        {
          course_id: "003",
          title: "好好学习天天向上",
          course: "信息科",
          duration: "80",
          selected: false
        }
      ],
      selectId: []
    };
  },
  methods: {
    //选择课程
    choice(index) {
      if (this.list[index].selected == true) {
        this.list[index].selected = false;
        for (var i = 0; i < this.selectId.length; i++) {
          if (this.selectId[i] === this.list[index].course_id) {
            this.selectId.splice(i, 1);
          }
        }
        console.log("选中的值", this.selectId);
      } else {
        this.list[index].selected = true;
        this.selectId.push(this.list[index].course_id);
        console.log("选中的值", this.selectId);
      }
    },
    //提交
    sure() {
      if (this.selectId.length == 0) {
        alert("请选择学科");
        return false;
      }
      var listIds = this.selectId.join(",");
      console.log("提交的数据", listIds);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.selected ? "已选择" : "选择"),
        b: common_vendor.n(item.selected ? "selde-q" : "noselde-q"),
        c: common_vendor.n(item.selected ? "selde" : "noselde"),
        d: common_vendor.o(($event) => $options.choice(index), index),
        e: common_vendor.t(item.title),
        f: common_vendor.t(item.course),
        g: common_vendor.t(item.duration),
        h: index
      };
    }),
    b: common_vendor.o((...args) => $options.sure && $options.sure(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m1_role_select/m1_role_select.vue"]]);
wx.createPage(MiniProgramPage);
