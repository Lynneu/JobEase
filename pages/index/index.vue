<template>
  <div>
    <pageconfirmConsult v-if="role == '1'" />
    <pagefindTeacher v-else-if="role == '0'" />
  </div>
</template>

<script>
import pagefindTeacher from '../find_teacher/find_teacher.vue'
import pageconfirmConsult from '../m3_confirm_consult/m3_confirm_consult'

export default {
  name: 'NewPage',
  components: {
    pagefindTeacher,
    pageconfirmConsult
  },
  data() {
    return {
      role: ''  // 从某个地方获取用户角色
    };
	},
  onShow: function() {
  	  this.role = getApp().globalData.st
	  console.log(this.role)
  },
}
</script>

<style scoped>
/* 页面样式 */
</style>
