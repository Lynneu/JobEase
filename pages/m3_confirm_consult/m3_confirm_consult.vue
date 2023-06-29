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
						<button  size="mini" type="primary" @click="toggle">
							<text>同意</text>
						</button>
						<button  size="mini" type="primary">
							<text>拒绝</text>
						</button>
						<uni-popup ref="popup" background-color="#000" @change="change">
								<text class="text">popup 内容</text>
						</uni-popup>
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
				type: 'center',
			};
		}
		onReady() {},
		methods: {
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				this.$refs.popup.open(type)
			}
		}
		
	}
</script>

<style lang="scss">
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
