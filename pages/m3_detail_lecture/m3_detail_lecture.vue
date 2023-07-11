<template>
    <view>
        <view class="main_body">
            <view class="lec_title">
                <uni-title :title="lecture.lecture_title" color="#027fff" type="h1"></uni-title>

            </view>
            <view>
                <uni-section :title="'演 讲 人 ：'+ user_detail.username" type="line" padding="0px"></uni-section>
                <uni-section :title="'讲座时间：'+ lecture.lecture_time" type="line"></uni-section>
                <uni-section :title="'讲座主题：'+ direction[lecture.lecture_label].text" type="line"></uni-section>
                <uni-section :title="'讲座费用：'+lecture.lecture_price+' 元'" type="line"></uni-section>
                <uni-section :title="'剩余名额：'+limit" type="line"></uni-section>
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
                { value: 0, text: '简历优化' },
                { value: 1, text: '面试经验' },
                { value: 2, text: '就业指导' },
                { value: 3, text: '职业规划' },
                { value: 4, text: '薪资谈判' },
                { value: 5, text: '其他' }
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
			limit:'',
			nolimit:'无限额',
			isappt:0,
			user_detail:{
				username: '',
			},
			appt_lecture:{
				lecture_id:'',
				phone:'',
				lecture_state:0
			}
            
        };
    },
	onShow() {
		this.appt_lecture.phone=getApp().globalData.ph;			
		console.log('Phone:', this.lecture.phone);
	},
    onLoad:function(option) {
		console.log(option.lecture)
		this.lecture._id=option.lecture;
		
		this.appt_lecture.lecture_id=this.lecture._id;
        this.getMsg()
    },
    methods: {
		getMsg() {
            const db = uniCloud.database() // 创建数据库连接
            db.collection("lecture").doc(this.lecture._id).get() // 获取数据表的信息
                .then(res => {
                    console.log(res)
                    this.lecture = res.result.data[0]
					console.log(this.lecture.lecture_limit+'测试1')
					this.islimit(this.lecture.lecture_limit)
                    const phone = this.lecture.phone; // 从lecture数据库获取phone
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
                })
                .catch(err => {
                    console.log(err)
                })
        },
		islimit(lim){
			if(lim == 0){
				this.limit = this.nolimit
			}
			if(lim == 1){
				this.limit = this.lecture.lecture_reserved+' / '+this.lecture.lecture_number+' 人'
			}
		},
		updateLectureReserved() {
	
		  const db = uniCloud.database();
		  const lectureId = this.lecture._id;
		  const newReservedValue = this.lecture.lecture_reserved + 1;
		  db.collection("lecture").doc(lectureId).update({
		    lecture_reserved: newReservedValue
		  }).then(res => {
		    console.log("lecture_reserved updated successfully");
		    // 更新成功后，可以在此处执行其他操作或更新界面
		  }).catch(err => {
		    console.error("Failed to update lecture_reserved:", err);
		  });
		},
		checkappt(){
			const db = uniCloud.database();
			db.collection("appt_lecture").where({
				
				lecture_id : this.appt_lecture.lecture_id,
				phone : this.appt_lecture.phone
			}).limit(1).get().then(res => {
				if (res.result && res.result.data && res.result.data.length > 0)
					{
						uni.showToast({
							title: '预约重复',
							icon: 'none',
							duration: 2000
						});
					}
				else{
					if(this.lecture.lecture_limit == 1){
						console.log('筛选1')
						if (this.lecture.lecture_reserved >= this.lecture.lecture_number) {
							console.log('筛选2')
							uni.showToast({
								title: '预约人数已满',
								icon: 'none',
								duration: 2000
							});
							return;
							console.log('tishi')
						}
						
					}
					console.log('筛选成功')
					
					this.updateLectureReserved();
					const db = uniCloud.database();
					db.collection("appt_lecture").add(this.appt_lecture).then(e => {
					  console.log(e);
					}).catch(err => {
					  console.error(err);
					});
					
					uni.showToast({
						title: '预约成功',
						icon: 'none',
						duration: 2000
					});
					
					uni.switchTab({
						url: '../find_lecture/find_lecture'
					});
					
				}
				
			})	

		},
        appointLecture() {
			
			
			this.checkappt()

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
