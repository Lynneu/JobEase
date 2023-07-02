"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      valiFormData: {
        company: "",
        name: "",
        number: "",
        jobchoose: 0,
        consult: [0],
        pay: "",
        email: "",
        code: ""
      },
      jobs: [
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
      consults: [
        { value: 0, text: "简历优化" },
        { value: 1, text: "面试经验" },
        { value: 2, text: "就业指导" },
        { value: 3, text: "职业规划" },
        { value: 4, text: "薪资谈判" },
        { value: 5, text: "测试开发" },
        { value: 6, text: "其他" }
      ],
      rules: {
        company: {
          rules: [{
            required: true,
            errorMessage: "公司不能为空"
          }]
        },
        name: {
          rules: [{
            required: true,
            errorMessage: "姓名不能为空"
          }]
        },
        number: {
          rules: [{
            required: true,
            errorMessage: "工号不能为空"
          }, {
            format: "number",
            errorMessage: "工号只能输入数字"
          }]
        },
        consult: {
          rules: [
            {
              format: "array"
            },
            {
              validateFunction: function(rule, value, data, callback) {
                if (value.length < 1) {
                  callback("请至少勾选一个咨询方向");
                }
                return true;
              }
            }
          ]
        },
        email: {
          rules: [{
            required: true,
            errorMessage: "邮箱不能为空"
          }, {
            format: "email",
            errorMessage: "请输入正确的邮箱"
          }]
        },
        code: {
          rules: [{
            required: true,
            errorMessage: "验证码不能为空"
          }]
        }
      }
    };
  },
  onLoad() {
  },
  onReady() {
    this.$refs.valiFormData.setRules(this.valiFormData);
  },
  methods: {
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log("success", res);
        common_vendor.index.showToast({
          title: `校验通过`
        });
      }).catch((err) => {
        console.log("err", err);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_select2 + _easycom_uni_data_checkbox2 + _easycom_uni_number_box2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_select + _easycom_uni_data_checkbox + _easycom_uni_number_box + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.input),
    b: common_vendor.o(($event) => $data.valiFormData.company = $event),
    c: common_vendor.p({
      maxlength: "20",
      trim: "all",
      placeholder: "最大输入长度为20",
      modelValue: $data.valiFormData.company
    }),
    d: common_vendor.p({
      label: "就职公司",
      ["label-width"]: "60",
      name: "company"
    }),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => $data.valiFormData.name = $event),
    g: common_vendor.p({
      maxlength: "10",
      trim: "all",
      placeholder: "最大输入长度为10",
      modelValue: $data.valiFormData.name
    }),
    h: common_vendor.p({
      label: "真实姓名",
      ["label-width"]: "60",
      name: "name"
    }),
    i: common_vendor.o(_ctx.input),
    j: common_vendor.o(($event) => $data.valiFormData.number = $event),
    k: common_vendor.p({
      maxlength: "10",
      trim: "all",
      placeholder: "最大输入长度为10",
      modelValue: $data.valiFormData.number
    }),
    l: common_vendor.p({
      label: "工号",
      name: "number"
    }),
    m: common_vendor.o(_ctx.bindPickerChange),
    n: common_vendor.o(($event) => $data.valiFormData.jobchoose = $event),
    o: common_vendor.p({
      localdata: $data.jobs,
      modelValue: $data.valiFormData.jobchoose
    }),
    p: common_vendor.p({
      label: "岗位",
      name: "jobchoose"
    }),
    q: common_vendor.o(($event) => $data.valiFormData.consult = $event),
    r: common_vendor.p({
      multiple: true,
      localdata: $data.consults,
      modelValue: $data.valiFormData.consult
    }),
    s: common_vendor.p({
      label: "咨询方向",
      ["label-width"]: "60",
      ["label-position"]: "top",
      name: "consult"
    }),
    t: common_vendor.o(($event) => $data.valiFormData.pay = $event),
    v: common_vendor.p({
      value: 0,
      step: 10,
      min: 0,
      max: 999,
      modelValue: $data.valiFormData.pay
    }),
    w: common_vendor.p({
      label: "收费标准(元/小时)",
      ["label-width"]: "60",
      name: "pay"
    }),
    x: common_vendor.o(_ctx.input),
    y: common_vendor.o(($event) => $data.valiFormData.email = $event),
    z: common_vendor.p({
      trim: "all",
      placeholder: "请输入邮箱",
      modelValue: $data.valiFormData.email
    }),
    A: common_vendor.p({
      label: "公司邮箱",
      ["label-width"]: "60",
      name: "email"
    }),
    B: common_vendor.o(_ctx.input),
    C: common_vendor.o(($event) => $data.valiFormData.code = $event),
    D: common_vendor.p({
      trim: "all",
      placeholder: "请输入验证码",
      modelValue: $data.valiFormData.code
    }),
    E: common_vendor.p({
      label: "验证码",
      name: "code"
    }),
    F: common_vendor.sr("valiForm", "9a65af6a-0"),
    G: common_vendor.p({
      rules: $data.rules,
      modelValue: $data.valiFormData
    }),
    H: common_vendor.o(($event) => $options.submit("valiForm"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Code/JobEase/JobEase/pages/m1_identify_teacher/m1_identify_teacher.vue"]]);
wx.createPage(MiniProgramPage);
