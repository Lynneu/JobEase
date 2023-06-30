<template>
	<view>
		<view>
			<uni-card>
				<view class="card_display">
					<view>
						<uni-section title="咨询信息" type="line"></uni-section>
						<text class="word">咨询价格:\n</text>
						<text class="word">咨询主题:\n</text>
						<text class="word">咨询日期:\n</text>
						<text class="word">预计时长:\n</text>
					</view>
					<view class="button_display">
						<button  size="mini" type="primary" @click="open()">
							<text>同意</text>
						</button>
						<button  size="mini" type="primary">
							<text>拒绝</text>
						</button>
						<uni-popup ref="popup" type="center" background-color="#fff">11</uni-popup>
					</view>
				</view>
			</uni-card>
			
		</view>		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},

		methods: {
			 open(){
			     // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			    this.$refs.popup.open('center')
	        },
		}
		
	}
</script>

<style lang="scss">
	@mixin flex {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
		}
	
	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}
	page{
		background-color: #ffffff;
	}
	.word{
		padding-left: 40rpx;
		font-size: 10px;
		font-weight: 600;
	}
	.button_display{
		padding-left: 220rpx;
		display: flex;
	}
</style>
