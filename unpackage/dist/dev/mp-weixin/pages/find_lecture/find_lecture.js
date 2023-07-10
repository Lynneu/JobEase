"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      searchValue: "",
      consultvalue: "",
      payvalue: "",
      timevalue: "",
      title: "uni-fab",
      directionStr: "垂直",
      horizontal: "right",
      vertical: "bottom",
      direction: "horizontal",
      lectrue: [],
      filteredData: null,
      recoData: null,
      userphone: "",
      userTag: "",
      role: "",
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
      time: [
        { value: 0, text: "30分钟以下" },
        { value: 1, text: "30-60分钟" },
        { value: 2, text: "60分钟以上" },
        { value: 3, text: "无限制" }
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
  onShow: async function() {
    this.role = getApp().globalData.st;
    this.recoData = await this.recommendAlgorithm(this.$refs.udb.dataList);
  },
  methods: {
    //打开搜索页
    openSearchPage() {
      common_vendor.index.navigateTo({
        url: "../m8_lecture_search/m8_lecture_search"
      });
    },
    search(res) {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
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
    filter() {
      this.lectrue = this.$refs.udb.dataList;
      console.log(this.lectrue);
      let data = this.lectrue;
      if (this.consultvalue !== "") {
        data = data.filter((lecture) => lecture.lecture_label === this.consultvalue);
      }
      if (this.payvalue !== "") {
        const payRanges = [
          { min: 0, max: 100 },
          { min: 100, max: 150 },
          { min: 150, max: 200 },
          { min: 200, max: Infinity },
          { min: 0, max: Infinity }
        ];
        console.log("pay:" + this.payvalue);
        const { min, max } = payRanges[this.payvalue];
        data = data.filter((lecture) => lecture.lecture_price >= min && lecture.lecture_price < max);
      }
      if (this.timevalue !== "") {
        const timeRanges = [
          { min: 0, max: 30 },
          { min: 30, max: 60 },
          { min: 60, max: Infinity },
          { min: 0, max: Infinity }
        ];
        console.log("time:" + this.timevalue);
        const { min, max } = timeRanges[this.timevalue];
        data = data.filter((lecture) => lecture.lecture_duration >= min && lecture.lecture_duration < max);
      }
      this.filteredData = data;
    },
    closeDrawer(ref) {
      this.$refs[ref].close();
      this.filter();
    },
    searchclick() {
      console.log(this.searchValue);
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
    changetime(e) {
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
    },
    async recommendAlgorithm(lectures) {
      this.userphone = getApp().globalData.ph;
      console.log(this.userphone);
      const db = common_vendor.Ds.database();
      db.collection("user_detail").where({
        phone: {
          $eq: this.userphone
        }
      }).get().then((res) => {
        console.log("res:" + res.result.data[0].tip_student);
        this.userTag = res.result.data[0].tip_student;
        console.log(this.userTag);
      }).catch((err) => {
        console.log(err.message);
      });
      console.log(lectures);
      return lectures;
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
  return common_vendor.e({
    a: common_vendor.o(($event) => $options.showDrawer("showLeft")),
    b: common_vendor.p({
      type: "bars",
      size: "25",
      color: "#007AFF"
    }),
    c: common_vendor.o($options.changeconsult),
    d: common_vendor.o(($event) => $data.consultvalue = $event),
    e: common_vendor.p({
      localdata: $data.consult,
      placeholder: "请选择咨询方向",
      modelValue: $data.consultvalue
    }),
    f: common_vendor.p({
      label: "咨询方向",
      ["label-width"]: "60"
    }),
    g: common_vendor.o($options.changepay),
    h: common_vendor.o(($event) => $data.payvalue = $event),
    i: common_vendor.p({
      localdata: $data.pay,
      placeholder: "请选择价格区间",
      modelValue: $data.payvalue
    }),
    j: common_vendor.p({
      label: "价格区间",
      ["label-width"]: "60"
    }),
    k: common_vendor.o($options.changetime),
    l: common_vendor.o(($event) => $data.timevalue = $event),
    m: common_vendor.p({
      localdata: $data.time,
      placeholder: "请选择讲座时长",
      modelValue: $data.timevalue
    }),
    n: common_vendor.p({
      label: "讲座时长",
      ["label-width"]: "60"
    }),
    o: common_vendor.o(($event) => $options.closeDrawer("showLeft")),
    p: common_vendor.p({
      title: "筛选",
      type: "line"
    }),
    q: common_vendor.sr("showLeft", "7538e855-1"),
    r: common_vendor.p({
      mode: "left",
      width: 300
    }),
    s: common_vendor.o(($event) => $data.searchValue = $event),
    t: common_vendor.p({
      focus: false,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    v: common_vendor.o((...args) => $options.openSearchPage && $options.openSearchPage(...args)),
    w: common_vendor.o((...args) => $options.searchclick && $options.searchclick(...args)),
    x: common_vendor.w(({
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
        c: common_vendor.f($data.filteredData || $data.recoData, (tutor, index, i1) => {
          return {
            a: common_vendor.t(`${tutor.lecture_title}`),
            b: common_vendor.t(`已预约${tutor.lecture_reserved}人`),
            c: common_vendor.t(`, 价格 ¥${tutor.lecture_price}/小时`),
            d: "7538e855-14-" + i0 + "-" + i1 + "," + ("7538e855-13-" + i0 + "-" + i1),
            e: common_vendor.p({
              text: $options.getConsultText(tutor.lecture_label),
              type: "primary"
            }),
            f: common_vendor.t(tutor.lecture_content),
            g: index,
            h: common_vendor.o(($event) => $options.navigateToTutorDetail(tutor.phone), index),
            i: "7538e855-13-" + i0 + "-" + i1 + "," + ("7538e855-12-" + i0)
          };
        }),
        d: common_vendor.p({
          border: false,
          direction: "column",
          clickable: true
        }),
        e: "7538e855-12-" + i0 + ",7538e855-11",
        f: common_vendor.p({
          border: false
        })
      }, {
        g: i0,
        h: s0
      });
    }, {
      name: "d",
      path: "x",
      vueId: "7538e855-11"
    }),
    y: common_vendor.sr("udb", "7538e855-11"),
    z: common_vendor.p({
      collection: "lecture"
    }),
    A: $data.role == "1"
  }, $data.role == "1" ? {
    B: common_vendor.sr("fab", "7538e855-15"),
    C: common_vendor.o($options.trigger),
    D: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: $data.horizontal,
      vertical: $data.vertical,
      direction: $data.direction
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/find_lecture/find_lecture.vue"]]);
wx.createPage(MiniProgramPage);
