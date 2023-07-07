"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goal: [{
        value: 0,
        text: "看看机会"
      }, {
        value: 1,
        text: "找实习"
      }, {
        value: 2,
        text: "找校招"
      }],
      direction: [
        { value: 0, text: "看看机会" },
        { value: 1, text: "前端开发" },
        { value: 2, text: "后端开发" },
        { value: 3, text: "C++开发" },
        { value: 4, text: "Java开发" },
        { value: 5, text: "算法" },
        { value: 6, text: "测试开发" },
        { value: 7, text: "产品经理" },
        { value: 8, text: "运营" },
        { value: 9, text: "HR" },
        { value: 10, text: "其他" }
      ],
      seeker: {
        "_id": "",
        "username": "",
        "index": 0,
        "index1": 0
      }
    };
  },
  /*onLoad({seeker}) {
  	//this.seeker=JSON.parse(seeker)
  	try {
  	    this.seeker = JSON.parse(seeker);
  	  } catch (error) {
  	    console.log('Error during parsing seeker:', error);
  	  }
  },*/
  methods: {
    changeGoal(e) {
      console.log(this.seeker.index);
    },
    changeDirection(e) {
      console.log(this.seeker.index1);
    },
    /*submit(){
    	const db = uniCloud.database();
    	let seeker={...this.seeker}//this.item的每一项放在{}里
    	delete seeker._id; // 不包含 _id 字段
    	db.collection("contacts").doc(this.seeker._id).update(seeker).then(e=>{
    		console.log(e)
    	}) 
    }*/
    submit() {
      common_vendor.index.switchTab({
        url: "../m2_profile/m2_profile"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_section2 + _easycom_uni_data_select2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_data_select)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "用户名:" + $data.seeker.username,
      type: "line"
    }),
    b: common_vendor.p({
      title: "身份:求职者",
      type: "line"
    }),
    c: common_vendor.p({
      title: "就业目标:",
      type: "line"
    }),
    d: common_vendor.o($options.changeGoal),
    e: common_vendor.o(($event) => $data.seeker.index = $event),
    f: common_vendor.p({
      localdata: $data.goal,
      clear: false,
      modelValue: $data.seeker.index
    }),
    g: common_vendor.p({
      title: "求职方向:",
      type: "line"
    }),
    h: common_vendor.o($options.changeDirection),
    i: common_vendor.o(($event) => $data.seeker.index1 = $event),
    j: common_vendor.p({
      localdata: $data.direction,
      clear: false,
      modelValue: $data.seeker.index1
    }),
    k: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/hbuilder/JobEase/pages/m4_seeker_information/m4_seeker_information.vue"]]);
wx.createPage(MiniProgramPage);
