<template>
	<view>
		<view class="information_display">
			<uni-card padding="5px" margin="6px">
				<view class="card_display">
					<view>
						<uni-section title="咨询信息" type="line"></uni-section>
						<text class="word">咨询价格：{{consult_cost}} 元\n</text>
						<text class="word">咨询主题：{{consult_theme}}\n</text>
						<text class="word">咨询日期：{{consult_date}}\n</text>
						<text class="word">预计时长：{{consult_duration}} min \n</text>
					</view>
					<view class="button_display">
						<button  size="mini" style="background-color: #007aff; color: #fff;" @click="open()">
							<text>同意</text>
						</button>
						<button  size="mini" style="background-color: #007aff; color: #fff;">
							<text>拒绝</text>
						</button>
					</view>
				</view>
			</uni-card>
			<uni-card padding="5px" margin="6px">
				<view class="card_display">
					<view>
						<uni-section title="咨询信息" type="line"></uni-section>
						<text class="word">咨询价格：{{consult_cost}} 元\n</text>
						<text class="word">咨询主题：{{consult_theme}}\n</text>
						<text class="word">咨询日期：{{consult_date}}\n</text>
						<text class="word">预计时长：{{consult_duration}} min \n</text>
					</view>
					<view class="button_display">
						<button  size="mini" style="background-color: #007aff; color: #fff;" @click="open()">
							<text>同意</text>
						</button>
						<button  size="mini" style="background-color: #007aff; color: #fff;">
							<text>拒绝</text>
						</button>
					</view>
				</view>
			</uni-card>
			<uni-card padding="5px" margin="6px">
				<view class="card_display">
					<view>
						<uni-section title="咨询信息" type="line"></uni-section>
						<text class="word">咨询价格：{{consult_cost}} 元\n</text>
						<text class="word">咨询主题：{{consult_theme}}\n</text>
						<text class="word">咨询日期：{{consult_date}}\n</text>
						<text class="word">预计时长：{{consult_duration}} min \n</text>
					</view>
					<view class="button_display">
						<button  size="mini" style="background-color: #007aff; color: #fff;" @click="open()">
							<text>同意</text>
						</button>
						<button  size="mini" style="background-color: #007aff; color: #fff;">
							<text>拒绝</text>
						</button>
					</view>
				</view>
			</uni-card>
		</view>	
		
		<uni-popup ref="popup" :mask-click="false" type="center" background-color="#fff">
			<view class="pick_time">
				<uni-card margin="1px">
					<uni-section title="选择咨询时间(单选)" type="line"></uni-section>
					<view class="uni-px-5 uni-pb-5">
						<uni-data-checkbox v-model="picktime" :localdata="time" mode="list"></uni-data-checkbox>
					</view>
					<view class="button_display2">
						<button size="mini" style="background-color: #007aff; color: #fff;" @click="close">确认</button>
						<button size="mini" style="background-color: #007aff; color: #fff;" @click="close">取消</button>
					</view>
				</uni-card>
			</view>
			
		</uni-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				consult_cost:'120',
				consult_theme:'就业指导',
				consult_date:'2023.6.18',
				consult_duration:'30',
				
				picktime: 0,
				time: [
					{text: '08:00',value: 0}, 
					{text: '09:00',value: 1}, 
					{text: '10:00',value: 2}, 
					{text: '11:00',value: 3}, 
				],
			};
		},

		methods: {
			 open(){
			    this.$refs.popup.open('center')
	        },
			close() {
				this.$refs.popup.close()
			}
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
	.word{
		padding-left: 40rpx;
		font-size: 10px;
		font-weight: 600;
	}
	.button_display{
		padding-left: 220rpx;
		padding-top: 5px;
		display: flex;
	}
	.button_display2{
		padding-left: 8px;
		padding-bottom: 15px;
		display: flex;
	}
	.information_display{
		padding: 5px;
	}
	.uni-px-5 {
		 padding-left: 10px;
	    padding-right: 10px;
	}
	.uni-pb-5 {
	    padding-bottom: 10px;
	}
	.pick_time{
		padding: 1px;
		background-color: #ffffff;
		
	}
</style>
