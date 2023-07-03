"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        {
          course_id: "1",
          title: "求职者",
          course: "可付费进行求职咨询，听讲座\n无需认证",
          selected: false
        },
        {
          course_id: "2",
          title: "导师",
          course: "可收费提供咨询，举办讲座\n首次进入需进行导师认证",
          //course:"首次进入需进行导师认证",
          selected: false
        }
      ],
      selectId: []
    };
  },
  methods: {
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
        for (var i = 0; i <= this.selectId.length; i++)
          this.list[i].selected = false;
        for (var i = 0; i <= this.selectId.length; i++) {
          this.selectId.splice(i, 1);
        }
        this.list[index].selected = true;
        this.selectId.push(this.list[index].course_id);
        console.log("选中的值", this.selectId);
      }
    },
    //提交
    sure() {
      if (this.selectId.length == 0) {
        common_vendor.index.showToast({
          title: "请选择身份",
          icon: "none"
        });
        return false;
      }
      var listIds = this.selectId.join(",");
      console.log("提交的数据", listIds);
      if (listIds.includes("2")) {
        common_vendor.index.navigateTo({
          url: "../m1_identify_teacher/m1_identify_teacher"
        });
      } else {
        common_vendor.index.switchTab({
          url: "../find_teacher/find_teacher"
        });
      }
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
        g: index
      };
    }),
    b: common_vendor.o((...args) => $options.sure && $options.sure(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m1_role_select/m1_role_select.vue"]]);
wx.createPage(MiniProgramPage);
