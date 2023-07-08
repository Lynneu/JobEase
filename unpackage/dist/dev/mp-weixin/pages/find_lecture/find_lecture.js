"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      searchValue: "",
      jobvalue: "",
      consultvalue: "",
      payvalue: "",
      scorevalue: "",
      title: "uni-fab",
      directionStr: "垂直",
      horizontal: "right",
      vertical: "bottom",
      direction: "horizontal",
      lectrue: [],
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
      }],
      job: [
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
      consult: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "其他" }
      ],
      pay: [
        { value: 0, text: "100元以下" },
        { value: 1, text: "100-150元" },
        { value: 2, text: "150-200元" },
        { value: 3, text: "200元以上" },
        { value: 4, text: "无限制" }
      ],
      score: [
        { value: 0, text: "4.5以下" },
        { value: 1, text: "4.5-4.6" },
        { value: 2, text: "4.7-4.8" },
        { value: 3, text: "4.9-5.0" },
        { value: 4, text: "无限制" }
      ]
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
    },
    changeJob(e) {
      console.log(e);
    },
    changeconsult(e) {
      console.log(e);
    },
    changepay(e) {
      console.log(e);
    },
    changescore(e) {
      console.log(e);
    },
    getConsultText(tip) {
      let consultObj = this.consult.find((cons) => cons.value === tip);
      return consultObj ? consultObj.text : "";
    },
    navigateToTutorDetail(id) {
      console.log(id);
      common_vendor.index.navigateTo({
        url: `../m3_detail_lecture/m3_detail_lecture?lecture=${id}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_icons2 + _easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2 + _easycom_uni_drawer2 + _easycom_uni_search_bar2 + _easycom_uni_tag2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_unicloud_db2 + _easycom_uni_fab2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section + _easycom_uni_drawer + _easycom_uni_search_bar + _easycom_uni_tag + _easycom_uni_list_item + _easycom_uni_list + _easycom_unicloud_db + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDrawer("showLeft")),
    b: common_vendor.p({
      type: "bars",
      size: "25",
      color: "#007AFF"
    }),
    c: common_vendor.o($options.changeJob),
    d: common_vendor.o(($event) => $data.jobvalue = $event),
    e: common_vendor.p({
      localdata: $data.job,
      placeholder: "请选择职位",
      modelValue: $data.jobvalue
    }),
    f: common_vendor.p({
      label: "咨询职位",
      ["label-width"]: "60"
    }),
    g: common_vendor.o($options.changeconsult),
    h: common_vendor.o(($event) => $data.consultvalue = $event),
    i: common_vendor.p({
      localdata: $data.consult,
      placeholder: "请选择咨询方向",
      modelValue: $data.consultvalue
    }),
    j: common_vendor.p({
      label: "咨询方向",
      ["label-width"]: "60"
    }),
    k: common_vendor.o($options.changepay),
    l: common_vendor.o(($event) => $data.payvalue = $event),
    m: common_vendor.p({
      localdata: $data.pay,
      placeholder: "请选择价格区间",
      modelValue: $data.payvalue
    }),
    n: common_vendor.p({
      label: "价格区间",
      ["label-width"]: "60"
    }),
    o: common_vendor.o($options.changescore),
    p: common_vendor.o(($event) => $data.scorevalue = $event),
    q: common_vendor.p({
      localdata: $data.score,
      placeholder: "请选择评分区间",
      modelValue: $data.scorevalue
    }),
    r: common_vendor.p({
      label: "评分区间",
      ["label-width"]: "60"
    }),
    s: common_vendor.o(($event) => $options.closeDrawer("showLeft")),
    t: common_vendor.p({
      title: "筛选",
      type: "line"
    }),
    v: common_vendor.sr("showLeft", "7538e855-1"),
    w: common_vendor.p({
      mode: "left",
      width: 300
    }),
    x: common_vendor.o($options.search),
    y: common_vendor.o($options.blur),
    z: common_vendor.o($options.focus),
    A: common_vendor.o($options.input),
    B: common_vendor.o($options.cancel),
    C: common_vendor.o($options.clear),
    D: common_vendor.o(($event) => $data.searchValue = $event),
    E: common_vendor.p({
      focus: false,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    F: common_vendor.o((...args) => $options.searchclick && $options.searchclick(...args)),
    G: common_vendor.w(({
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
        c: common_vendor.f(data, (tutor, index, i1) => {
          return {
            a: common_vendor.t(`${tutor.lecture_title}`),
            b: common_vendor.t(`已预约${tutor.lecture_reserved}人`),
            c: common_vendor.t(`, 价格 ¥${tutor.lecture_price}/小时`),
            d: common_vendor.f(tutor.lecture_label, (tip, idx, i2) => {
              return {
                a: idx,
                b: "7538e855-16-" + i0 + "-" + i1 + "-" + i2 + "," + ("7538e855-15-" + i0 + "-" + i1),
                c: common_vendor.p({
                  text: $options.getConsultText(tip),
                  type: "primary"
                })
              };
            }),
            e: common_vendor.t(tutor.lecture_content),
            f: index,
            g: common_vendor.o(($event) => $options.navigateToTutorDetail(tutor._id), index),
            h: "7538e855-15-" + i0 + "-" + i1 + "," + ("7538e855-14-" + i0)
          };
        }),
        d: common_vendor.p({
          border: false,
          direction: "column"
        }),
        e: "7538e855-14-" + i0 + ",7538e855-13",
        f: common_vendor.p({
          border: false
        })
      }, {
        g: i0,
        h: s0
      });
    }, {
      name: "d",
      path: "G",
      vueId: "7538e855-13"
    }),
    H: common_vendor.p({
      collection: "lecture"
    }),
    I: common_vendor.sr("fab", "7538e855-17"),
    J: common_vendor.o($options.trigger),
    K: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: $data.horizontal,
      vertical: $data.vertical,
      direction: $data.direction
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/find_lecture/find_lecture.vue"]]);
wx.createPage(MiniProgramPage);
