<script>
	export default {
		globalData: {  
		    ph: '12345678911',//手机号
			st:0,//身份，0求职者，1导师
			tip: '',//求职者标签 0-5
		  },
		onLaunch: function() {
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import 'common/uni.css';
	
</style>
