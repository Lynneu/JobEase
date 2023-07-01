<template>
        <view>
                <view class="inv-h-w">
                        <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">未完成</view>
                        <view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">已完成</view>
						<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">已评价</view>
                </view>
                <view class="" v-show="Inv == 0">
                        未完成000
                </view>
                <view class="" v-show="Inv == 1">
                        已完成111
                </view>
				<view class="" v-show="Inv == 2">
				        已评价222
				</view>
        </view>
</template>
 
<script>
        export default {
                data() {
                        return {
                                Inv:0
                        }
                },
                methods: {
                        changeTab(Inv){
                                that.navIdx = Inv;
                                 
                        },
                }
        }
</script>
         
<style>
        .inv-h-w{background-color: #FFFFFF;height: 100upx;display: flex;}
        .inv-h{font-size: 30upx;flex: 1;text-align: center;color: #C9C9C9;height: 100upx;line-height: 100upx;}
        .inv-h-se{color: #5BA7FF;border-bottom: 4upx solid #5BA7FF;}
        page{background-color: #F2F2F2;}
</style>