<template>
    <view>
        <view class="main_body">
            <view class="lec_title">
                <uni-title :title="lecture.lecture_title" color="#027fff" type="h1"></uni-title>

            </view>
            <view>
                <uni-section :title="'演 讲 人 ：'+ username" type="line" padding="0px"></uni-section>
                <uni-section :title="'讲座时间：'+ lecture.lecture_time" type="line"></uni-section>
                <uni-section :title="'讲座主题：'+ direction[lecture.lecture_label].text" type="line"></uni-section>
                <uni-section :title="'讲座费用：'+lecture.lecture_price+' 元  / 30min'" type="line"></uni-section>
                <uni-section :title="'讲座名额：'+lecture.lecture_reserved+' / '+lecture.lecture_number+' 人'" type="line"></uni-section>
                <view class="line"></view>
                <uni-section title="讲座内容" type="circle"></uni-section>
            </view>
            <view class="lec_content">
                <text>{{lecture.lecture_content}}</text>
            </view>
            <uni-section class="button_display">
                <button class="appt_button" style="background-color: #007aff; color: #fff;" @click="appointLecture">
                    <text>预约</text>
                </button>
            </uni-section>
        </view>

    </view>
</template>

<script>

export default {
    data() {
        return {
            direction: [
                { value: 0, text: '前端开发' },
                { value: 1, text: '后端开发' },
                { value: 2, text: 'C++开发' },
                { value: 3, text: 'Java开发' },
                { value: 4, text: '算法' },
                { value: 5, text: '测试开发' },
                { value: 6, text: '产品经理' },
                { value: 7, text: '运营' },
                { value: 8, text: 'HR' },
                { value: 9, text: '其他' }
            ],
            lecture: {
                phone: 0,
                lecture_title: '',
                lecture_time: '0000.00.00 ' + ' 00:00',
                lecture_label: 0,
                lecture_price: 0,
                lecture_number: 0,
                lecture_reserved: 0,
                lecture_content: ''
            },
            username: ''
        };
    },
    onLoad() {
        this.getMsg()
    },
    methods: {
        getMsg() {
            const db = uniCloud.database() // 创建数据库连接
            db.collection("lecture").get() // 获取数据表的信息
                .then(res => {
                    console.log(res)
                    this.lecture = res.result.data[1]
                    const phone = this.lecture.phone; // 从lecture数据库获取phone
                    db.collection("user_detail").where({
                            phone
                        }) // 在user_detail数据库中根据phone进行查询
                        .get()
                        .then(res => {
                            console.log(res)
                            if (res.result.data.length > 0) {
                                this.username = res.result.data[0].username; // 获取查询结果中的username，并赋值给this.username
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        appointLecture() {
			uni.switchTab({
							  url: '../find_lecture/find_lecture'
							});
        }
    },

}
</script>


<style lang="scss">
	page{
		background-color: #ffffff;
	}
	.main_body{
		padding: 20rpx;
	}
	.lec_title{
		padding-left: 10px;
		padding-top: 15px;
	}
	.line{
		background-color: #c0c0c0;
		width: 100%;
		height: 1px;
	}
	.lec_content{
		font-size: 25rpx;
		padding-left: 8%;
		padding-right: 8%;
		padding-bottom: 20px;
	}
	.appt_button{
		border: none;
		color: #ffffff;
		margin-top: 40rpx;
		font-size: 28rpx;	
	}
	.button_display{
		padding-left: 40px;
		padding-right: 40px;
	}

</style>
