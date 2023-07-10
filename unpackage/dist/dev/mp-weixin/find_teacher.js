"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  name: "pagefindTeacher",
  data() {
    return {
      options: {},
      // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
      pagesize: 20,
      searchValue: "",
      jobvalue: "",
      consultvalue: "",
      payvalue: "",
      scorevalue: "",
      tutors: [],
      recoData: null,
      filteredData: null,
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
  created() {
    this.userphone = getApp().globalData.ph;
    console.log(this.userphone);
    this.fetchUserTag().then(() => {
      this.$refs.udb.loadData();
    });
  },
  onReady() {
    if (this.userTag) {
      this.$refs.udb.loadData();
    }
  },
  onPullDownRefresh() {
    this.$refs.udb.loadData({
      clear: true
      //可选参数，是否清空数据
    }, () => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  onReachBottom() {
    this.$refs.udb.loadMore();
  },
  // mounted: async function() {
  // 	  this.recoData = await this.recommendAlgorithm(this.$refs.udb.dataList);
  // },
  methods: {
    async onqueryload(data, ended) {
      if (this.userTag) {
        data = this.recommendAlgorithm(data);
        console.log(data);
      }
    },
    async fetchUserTag() {
      return new Promise((resolve, reject) => {
        const db = common_vendor.Ds.database();
        db.collection("user_detail").where({
          phone: {
            $eq: this.userphone
          }
        }).get().then((res) => {
          console.log("res:" + res.result.data[0].tip_student);
          this.userTag = res.result.data[0].tip_student;
          console.log(this.userTag);
          resolve(this.userTag);
        }).catch((err) => {
          console.log(err.message);
          reject(err);
        });
      });
    },
    //打开搜索页
    openSearchPage() {
      common_vendor.index.navigateTo({
        url: "../m7_mentor_search/m7_mentor_search"
      });
    },
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
    showDrawer() {
      this.$refs.showLeft.open();
    },
    filter() {
      this.tutors = this.$refs.udb.dataList;
      console.log("111");
      console.log(this.tutors);
      let data = this.tutors;
      if (this.jobvalue !== "") {
        data = data.filter((tutor) => tutor.post === this.jobvalue);
      }
      if (this.consultvalue !== "") {
        data = data.filter((tutor) => tutor.tip_teacher.includes(this.consultvalue));
      }
      if (this.payvalue !== "") {
        const payRanges = [
          { min: 0, max: 100 },
          { min: 100, max: 150 },
          { min: 150, max: 200 },
          { min: 200, max: Infinity },
          { min: 0, max: Infinity }
        ];
        const { min, max } = payRanges[this.payvalue];
        data = data.filter((tutor) => tutor.price >= min && tutor.price < max);
      }
      if (this.scorevalue !== "") {
        const scoreRanges = [
          { min: 0, max: 4.5 },
          { min: 4.5, max: 4.6 },
          { min: 4.7, max: 4.8 },
          { min: 4.9, max: 5 },
          { min: 0, max: 5 }
        ];
        const { min, max } = scoreRanges[this.scorevalue];
        data = data.filter((tutor) => tutor.score >= min && tutor.score < max);
      }
      this.filteredData = data;
    },
    closeDrawer(ref) {
      this.$refs[ref].close();
      this.filter();
    },
    searchclick() {
      this.filteredData = null;
      this.$refs.udb.refresh();
    },
    changeJob(e) {
      console.log("e:", e);
    },
    changeconsult(e) {
      console.log("e:", e);
    },
    changepay(e) {
      console.log(e);
    },
    changescore(e) {
      console.log(e);
    },
    getJobText(value) {
      let jobObj = this.job.find((job) => job.value === value);
      return jobObj ? jobObj.text : "";
    },
    getConsultText(tip) {
      let consultObj = this.consult.find((cons) => cons.value === tip);
      return consultObj ? consultObj.text : "";
    },
    navigateToTutorDetail(id) {
      console.log(id);
      common_vendor.index.navigateTo({
        url: `../m3_detail_appt_consult/m3_detail_appt_consult?id=${id}`
      });
    },
    recommendAlgorithm(tutors) {
      tutors = tutors.sort((a, b) => {
        let scoreA = a.tip_teacher.includes(this.userTag) ? 1 : 0;
        let scoreB = b.tip_teacher.includes(this.userTag) ? 1 : 0;
        if (scoreA === scoreB) {
          return b.score - a.score;
        }
        return scoreB - scoreA;
      });
      console.log("over");
      return tutors;
    }
  },
  onBackPress() {
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
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  (_easycom_uni_icons2 + _easycom_uni_data_select2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2 + _easycom_uni_drawer2 + _easycom_uni_search_bar2 + _easycom_uni_tag2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2 + _easycom_unicloud_db2)();
}
const _easycom_uni_icons = () => "./uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_data_select = () => "./uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms_item = () => "./uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "./uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "./uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_drawer = () => "./uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
const _easycom_uni_search_bar = () => "./uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_tag = () => "./uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_list_item = () => "./uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "./uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "./uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_unicloud_db = () => "./node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_data_select + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section + _easycom_uni_drawer + _easycom_uni_search_bar + _easycom_uni_tag + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more + _easycom_unicloud_db)();
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
    v: common_vendor.sr("showLeft", "0c1b2ad5-1"),
    w: common_vendor.p({
      mode: "left",
      width: 300
    }),
    x: common_vendor.o($options.search),
    y: common_vendor.o(($event) => $data.searchValue = $event),
    z: common_vendor.p({
      focus: false,
      placeholder: "请输入搜索内容",
      clearButton: "auto",
      cancelButton: "none",
      modelValue: $data.searchValue
    }),
    A: common_vendor.o((...args) => $options.openSearchPage && $options.openSearchPage(...args)),
    B: common_vendor.o((...args) => $options.searchclick && $options.searchclick(...args)),
    C: common_vendor.w(({
      data,
      pagination,
      loading,
      error,
      options,
      hasMore
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : loading ? {} : common_vendor.e({
        d: common_vendor.f($data.filteredData || data, (tutor, index, i1) => {
          return {
            a: common_vendor.t(`${tutor.username} - ${$options.getJobText(tutor.post)}`),
            b: common_vendor.t(`${tutor.score}分`),
            c: common_vendor.t(`, 价格 ¥${tutor.price}/小时`),
            d: common_vendor.f(tutor.tip_teacher, (tip, idx, i2) => {
              return {
                a: idx,
                b: "0c1b2ad5-16-" + i0 + "-" + i1 + "-" + i2 + "," + ("0c1b2ad5-15-" + i0 + "-" + i1),
                c: common_vendor.p({
                  text: $options.getConsultText(tip),
                  type: "primary"
                })
              };
            }),
            e: common_vendor.t(tutor.comment),
            f: index,
            g: common_vendor.o(($event) => $options.navigateToTutorDetail(tutor.phone), index),
            h: "0c1b2ad5-15-" + i0 + "-" + i1 + "," + ("0c1b2ad5-14-" + i0)
          };
        }),
        e: common_vendor.p({
          direction: "column",
          clickable: true
        }),
        f: "0c1b2ad5-14-" + i0 + ",0c1b2ad5-13",
        g: common_vendor.p({
          border: false
        }),
        h: !hasMore
      }, !hasMore ? {
        i: "0c1b2ad5-17-" + i0 + ",0c1b2ad5-13",
        j: common_vendor.p({
          status: "noMore"
        })
      } : {}), {
        c: loading,
        k: i0,
        l: s0
      });
    }, {
      name: "d",
      path: "C",
      vueId: "0c1b2ad5-13"
    }),
    D: common_vendor.sr("udb", "0c1b2ad5-13"),
    E: common_vendor.o($options.onqueryload),
    F: common_vendor.p({
      collection: "user_detail",
      where: "isTeacher==1",
      options: $data.options,
      ["page-size"]: $data.pagesize
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/find_teacher/find_teacher.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
