<template>
  <div>
	  <view>
    <pageconfirmConsult v-show="role == '1'" />
    <pagefindTeacher v-show="role == '0'" />
	</view>
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
  onLoad: function() {
  	  this.role = getApp().globalData.st
	  console.log(this.role)
  },
  onShow: function() {
  	  this.role = getApp().globalData.st
  	  console.log(this.role)
	  if(this.role == 1) {
		  setTimeout(() => {
		      uni.setNavigationBarTitle({
		          title: '咨询信息'
		      });
		  }, 5);  // 延迟2000毫秒，也就是2秒
		  uni.setTabBarItem({
		    index: 0,
		    text: '咨询信息',
		  })
	  }
	  else {
		  setTimeout(() => {
		      uni.setNavigationBarTitle({
		          title: '找导师'
		      });
		  }, 5);  // 延迟2000毫秒，也就是2秒
		  uni.setTabBarItem({
		    index: 0,
		    text: '找导师',
		  })
	  }
  },
}
</script>

<style scoped>
/* 页面样式 */
</style>
