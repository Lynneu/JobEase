"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show_again: 0,
      //  显示发送验证码||请稍后按钮
      count: "",
      // 等待时间
      timer: null,
      //定时器
      flag: 0,
      valiFormData: {
        company: "",
        name: "",
        number: "",
        jobchoose: 0,
        consult: [],
        pay: "",
        email: "",
        code: ""
      },
      user_detail: {
        "phone": "",
        "username": "",
        "isTeacher": 1,
        "status": 1,
        "email": "",
        "comment": "",
        "co": "",
        "job_number": "",
        "price": 0,
        "score": 0,
        "post": 1,
        "tip_teacher": [],
        "tip_student": 1,
        "goal": 1
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
        { value: 5, text: "其他" }
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
    this.user_detail.phone = getApp().globalData.ph;
    const db1 = common_vendor.Ds.database();
    db1.collection("user_detail").where({
      phone: {
        $eq: this.user_detail.phone
      }
    }).limit(1).get().then((res) => {
      if (res.result && res.result.data && res.result.data.length > 0) {
        this.user_detail = res.result.data[0];
        this.flag = 1;
      }
    });
  },
  onReady() {
    this.$refs.valiForm.setRules(this.rules);
  },
  methods: {
    submit(ref) {
      this.$refs[ref].validate().then((res) => {
        console.log("success", res);
        this.user_detail.phone = getApp().globalData.ph;
        this.user_detail.username = this.valiFormData.name;
        this.user_detail.email = this.valiFormData.email;
        this.user_detail.co = this.valiFormData.company;
        this.user_detail.job_number = this.valiFormData.number;
        this.user_detail.price = this.valiFormData.pay;
        this.user_detail.post = this.valiFormData.jobchoose;
        this.user_detail.tip_teacher = this.valiFormData.consult;
        var value = this.user_detail.co;
        const test = /^[a-zA-Z\u4e00-\u9fff]+$/;
        if (!test.test(value)) {
          common_vendor.index.showToast({
            title: "就职公司仅允许中文、英文",
            icon: "none"
          });
          return false;
        }
        var value = this.user_detail.username;
        const test2 = /^[a-zA-Z0-9\u4e00-\u9fff_-]+$/;
        if (!test2.test(value)) {
          common_vendor.index.showToast({
            title: "用户名仅允许中文、英文、数字、符号-_",
            icon: "none"
          });
          return false;
        }
        var value = this.user_detail.job_number;
        const test1 = /^[a-zA-Z0-9]+$/;
        if (!test1.test(value)) {
          common_vendor.index.showToast({
            title: "工号仅允许英文、数字",
            icon: "none"
          });
          return false;
        }
        const db = common_vendor.Ds.database();
        if (this.flag == 0) {
          db.collection("user_detail").add(this.user_detail).then((e) => {
            console.log(e);
          });
        } else {
          db.collection("user_detail").where({
            phone: this.user_detail.phone
          }).update({
            username: this.user_detail.username,
            isTeacher: 1,
            status: 1,
            email: this.user_detail.email,
            co: this.user_detail.co,
            job_number: this.user_detail.job_number,
            price: this.user_detail.price,
            post: this.user_detail.post,
            tip_teacher: this.user_detail.tip_teacher
          }).then((res2) => {
            console.log("成功");
          }).catch((err) => {
            console.error("报错", err);
          });
        }
        common_vendor.index.switchTab({
          url: "../index/index"
        });
      }).catch((err) => {
        console.log("err", err);
      });
    },
    sendCode() {
      const count = 60;
      if (!this.timer) {
        this.count = count;
        this.show_again = 1;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= count) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
            this.show_again = 0;
          }
        }, 1e3);
      }
    },
    sendCodeAgain() {
      if (this.count <= 0) {
        this.sendCode();
      } else {
        common_vendor.index.showToast({
          title: `请稍后重试(${this.count})`,
          icon: "none",
          duration: 1500
        });
      }
    },
    jobchange(e) {
      console.log(e);
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
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.valiFormData.company = $event),
    b: common_vendor.p({
      maxlength: "20",
      trim: "all",
      placeholder: "最大输入长度为20",
      modelValue: $data.valiFormData.company
    }),
    c: common_vendor.p({
      label: "就职公司",
      ["label-width"]: "60",
      name: "company"
    }),
    d: common_vendor.o(($event) => $data.valiFormData.name = $event),
    e: common_vendor.p({
      maxlength: "20",
      trim: "all",
      placeholder: "最大输入长度为20",
      modelValue: $data.valiFormData.name
    }),
    f: common_vendor.p({
      label: "用户名称",
      ["label-width"]: "60",
      name: "name"
    }),
    g: common_vendor.o(($event) => $data.valiFormData.number = $event),
    h: common_vendor.p({
      maxlength: "10",
      trim: "all",
      placeholder: "最大输入长度为10",
      modelValue: $data.valiFormData.number
    }),
    i: common_vendor.p({
      label: "工号",
      name: "number"
    }),
    j: common_vendor.o($options.jobchange),
    k: common_vendor.o(($event) => $data.valiFormData.jobchoose = $event),
    l: common_vendor.p({
      localdata: $data.jobs,
      modelValue: $data.valiFormData.jobchoose
    }),
    m: common_vendor.p({
      label: "岗位",
      name: "jobchoose"
    }),
    n: common_vendor.o(($event) => $data.valiFormData.consult = $event),
    o: common_vendor.p({
      multiple: true,
      localdata: $data.consults,
      modelValue: $data.valiFormData.consult
    }),
    p: common_vendor.p({
      label: "咨询方向",
      ["label-width"]: "60",
      ["label-position"]: "top",
      name: "consult"
    }),
    q: common_vendor.o(($event) => $data.valiFormData.pay = $event),
    r: common_vendor.p({
      value: 0,
      step: 10,
      min: 0,
      max: 999,
      modelValue: $data.valiFormData.pay
    }),
    s: common_vendor.p({
      label: "收费标准(元/小时)",
      ["label-width"]: "60",
      name: "pay"
    }),
    t: common_vendor.o(($event) => $data.valiFormData.email = $event),
    v: common_vendor.p({
      trim: "all",
      placeholder: "请输入邮箱",
      modelValue: $data.valiFormData.email
    }),
    w: common_vendor.p({
      label: "公司邮箱",
      ["label-width"]: "60",
      name: "email"
    }),
    x: common_vendor.o(($event) => $data.valiFormData.code = $event),
    y: common_vendor.p({
      trim: "all",
      placeholder: "请输入验证码",
      modelValue: $data.valiFormData.code
    }),
    z: $data.show_again == 0
  }, $data.show_again == 0 ? {
    A: common_vendor.o((...args) => $options.sendCode && $options.sendCode(...args))
  } : {}, {
    B: $data.show_again == 1
  }, $data.show_again == 1 ? {
    C: common_vendor.t($data.count),
    D: common_vendor.o((...args) => $options.sendCodeAgain && $options.sendCodeAgain(...args))
  } : {}, {
    E: common_vendor.p({
      label: "验证码",
      name: "code"
    }),
    F: common_vendor.sr("valiForm", "67d438eb-0"),
    G: common_vendor.p({
      modelValue: $data.valiFormData
    }),
    H: common_vendor.o(($event) => $options.submit("valiForm"))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/lynneu/Documents/GitHub/JobEase/pages/m1_identify_teacher/m1_identify_teacher.vue"]]);
wx.createPage(MiniProgramPage);
