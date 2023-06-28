<template>
    <view class="navbar">
        <view class="navbar-fixed">
            <!-- 状态栏小程序撑起高度 -->
            <view :style="{height:statusBarHeight+'px'}"></view>
            <view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
                <view class="navbar-search">
                    <view class="navbar-search_icon">
                        <uni-icons type="search" size="16" color="#999"></uni-icons>
                    </view>
                    <view class="navbar-serach">
                        <input class="navbar-search_text" type="text" v-model="val" placeholder="请输入您要搜索的内容" />
                    </view>
                </view>
            </view>
        </view>
        <!-- 需要添加占位符高度  状态栏高度+导航栏高度（否则下面tab会塌陷）-->
        <view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
    </view>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                statusBarHeight: 20,/* 状态栏高度 */
                navBarHeight: 50,/* 导航栏高度 */
                windowWidth: 375,/* 窗口宽度 */
                /* 设定状态栏默认高度 */
                val: ''/* 导航栏搜索框的值 */
            };
        },
        created() {
            // 获取手机系统信息
            const info = uni.getSystemInfoSync()
            // 设置状态栏高度（H5顶部无状态栏小程序有状态栏需要撑起高度）
            this.statusBarHeight = info.statusBarHeight
            this.windowWidth = info.windowWidth
            // 除了h5 app mp-alipay的情况下执行
            // #ifndef H5 || APP-PLUS || MP-ALIPAY
            // 获取胶囊的位置
            const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
            console.log(menuButtonInfo);
            // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
            this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
            this.windowWidth = menuButtonInfo.left
            // #endif
        }
    }
</script>

<style lang="scss">
 
     .navbar {
      .navbar-fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        background-color: #55aaff;
    
        .navbar-content {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 15px;
          height: 45px;
          box-sizing: border-box;
    
          .navbar-search {
            display: flex;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            height: 30px;
            border-radius: 30px;
            background-color: #fff;
    
            .navbar-search_icon {
              // width: 10px;
              // height: 10px;
              margin-right: 10px;
            }
    
            .navbar-search_text {
              width: 100%;
              font-size: 14px;
              color: #999;
            }
          }
    
          &.search {
            padding-left: 0;
    
            .navbar-content__search-icons {
              margin-left: 10px;
              margin-right: 10px;
            } 
    
            .navbar-search {
              border-radius: 5px;
            }
          }
    
        }
    
      }
    }
</style>
