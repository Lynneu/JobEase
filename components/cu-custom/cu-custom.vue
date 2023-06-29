<template>
	<view>
		<view class="cu-custom" :style="[{height:StatusBar + 'px'}]"></view>
		<view>
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:CustomBar + 'px',height:CustomBar+'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
		<view :style="{height: StatusBar+CustomBar+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name: 'cu-custom',
		data() {
			return {
				StatusBar: 20,
				CustomBar: 50
			};
		},
		computed: {
			style() {
				const info = uni.getSystemInfoSync()
				// 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
				this.StatusBar = info.statusBarHeight
				this.CustomBar = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
				console.log(menuButtonInfo);
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
					let url = '/' + __wxConfig.pages[0]
					return uni.redirectTo({url})
				}
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
