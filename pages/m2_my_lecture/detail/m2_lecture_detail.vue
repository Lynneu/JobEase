<template>
    <view>
        <view class="main_body">
            <view class="lec_title">
                <uni-title :title="item.lecture_id[0].lecture_title" color="#027fff" type="h1"></uni-title>

            </view>
            <view>
                <uni-section :title="'演 讲 人 ：'+ user_detail.username" type="line" padding="0px"></uni-section>
                <uni-section :title="'讲座时间：'+ item.lecture_id[0].lecture_time" type="line"></uni-section>
                <uni-section :title="'讲座主题：'+ direction[item.lecture_id[0].lecture_label].text" type="line"></uni-section>
                <uni-section :title="'讲座费用：'+item.lecture_id[0].lecture_price+' 元'" type="line"></uni-section>
                <uni-section :title="'讲座名额：'+item.lecture_id[0].lecture_reserved+' / '+item.lecture_id[0].lecture_number+' 人'+limit[item.lecture_id[0].lecture_limit].text" type="line"></uni-section>
                <uni-section :title="'学生手机号：'+item.phone" type="line"></uni-section>
				<uni-section :title="'状态：'+appt_ste[item.lecture_state].text" type="line"></uni-section>
				<view class="line"></view>
                <uni-section title="讲座内容" type="circle"></uni-section>
            </view>
            <view class="lec_content">
                <text>{{item.lecture_id[0].lecture_content}}</text>
            </view>
        </view>

    </view>
</template>

<script>

export default {
    data() {
        return {
            direction: [
                { value: 0, text: '简历优化' },
                { value: 1, text: '面试经验' },
                { value: 2, text: '就业指导' },
                { value: 3, text: '职业规划' },
                { value: 4, text: '薪资谈判' },
                { value: 5, text: '其他' }
            ],
			appt_ste:[
				{ value: 0, text: '未完成' },
				{ value: 1, text: '已完成' },
				{ value: 2, text: '已评价' }
			],
            lecture: {
				_id:"",
                phone: 0,
                lecture_title: '',
                lecture_time: '0000.00.00 ' + ' 00:00',
                lecture_label: 0,
                lecture_price: 0,
				lecture_limit:0,
                lecture_number: 0,
                lecture_reserved: 0,
                lecture_content: ''
            },
			limit:[
				{ value: 0, text: ' （无限制）' },
				{ value: 1, text: '' }
			],
			user_detail:{
				username: '',
			},
			appt_lecture:{
				lecture_id:'',
				phone:'12345678900',
				lecture_state:0
			}
            
        };
    },
    onLoad({item}) {
		this.item=JSON.parse(item)
		console.log(this.item)
		this.getMsg()
    },
    methods: {
		getMsg(){
			const db = uniCloud.database()
			const phone = this.item.lecture_id[0].phone;
		
			db.collection("user_detail").where({
			        phone
			    }) // 在user_detail数据库中根据phone进行查询
			    .get()
			    .then(res => {
			        console.log(res)
			        if (res.result.data.length > 0) {
			            this.user_detail.username = res.result.data[0].username; // 获取查询结果中的username，并赋值给this.username
			        }
			    })
			    .catch(err => {
			        console.log(err)
			    })
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
