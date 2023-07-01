<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">未完成</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">已完成</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">已评价</view>
                </view>
                <view class="" v-show="Inv == 0">
                        <uni-card style="align-content: center;">
							<view class="uni-flex uni-row">
								<view class="normal title">AAA前端</view>
								<view class="status-green">已成功预约</view>
							</view>
							<view>咨询价格：100元</view>
							<view>支付情况：已付款</view>
							<view>预计时间：2小时</view>
							<view>预约时间：2023年6月20日</view>
						</uni-card>
                        <uni-card style="align-content: center;">
							<view class="uni-flex uni-row">
								<view class="normal title">AAA前端</view>
								<view class="status-red">已取消</view>
							</view>
							<view>咨询价格：100元</view>
							<view>支付情况：已付款</view>
							<view>预计时间：2小时</view>
							<view>预约时间：2023年6月20日</view>
						</uni-card>
                </view>
                <view class="" v-show="Inv == 1">
                        <uni-card style="align-content: center;">
                        	<view class="uni-flex uni-row">
                        		<view class="normal title">AAA前端</view>
                        		<view class="status-green">已完成，待评价</view>
                        	</view>
                        	<view>咨询价格：100元</view>
                        	<view>支付情况：已付款</view>
                        	<view>预计时间：2小时</view>
                        	<view>预约时间：2023年6月20日</view>
                        </uni-card>
                </view>
				<view class="" v-show="Inv == 2">
				        <uni-card style="align-content: center;">
				        	<view class="uni-flex uni-row">
				        		<view class="normal title">产品经理</view>
				        		<view class="status-green">已评价</view>
				        	</view>
				        	<view>咨询价格：100元</view>
				        	<view>支付情况：已付款</view>
				        	<view>预计时间：2小时</view>
				        	<view>预约时间：2023年6月20日</view>
				        </uni-card>
				</view>
        </view>
</template>
 
<script>
        export default {
                data() {
                        return {
                                Inv:0,
                        }
						
                },
                methods: {
                        changeTab(Inv){
                                that.navIdx = Inv;
                                 
                        },
                }
        }
</script>
         
<style lang="scss">
        .inv-h-w{background-color: #FFFFFF;height: 100upx;display: flex;}
        .inv-h{font-size: 30upx;flex: 1;text-align: center;color: #C9C9C9;height: 100upx;line-height: 100upx;}
        .inv-h-se{color: #5BA7FF;border-bottom: 4upx solid #5BA7FF;}
        page{background-color: #F2F2F2;}
		
body{
	color: white;
}
		.normal {
			display: flex;
			flex: 1;
			flex-direction: row;
			align-items: center;
			overflow: hidden;
			height: 100rpx;
		}
		.title {
			font-size: 40rpx;
		}
		.status-red{
			display: flex;
			align-items: center;
			font-size: 25rpx;
			color: red;
		}
		.status-green{
			display: flex;
			align-items: center;
			font-size: 25rpx;
			color: greenyellow;
		}

</style>