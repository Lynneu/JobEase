<template>
	<view class="index">
		<view class="new_box" style="margin-top: 20upx;">
			<view class="bbox">
				<view class="list-box" v-for="(item,index) in list" :key="index">
					<view class="list-ed">
						<image class="list-img" src="../../static/logo.png" mode="aspectFill"></image>
						<view class="list-right">
							<view class="list-head" @click="choice(index)">
								<view :class="[item.selected?'selde':'noselde']">{{item.selected?"已选择":"选择"}}<text :class="[item.selected?'selde-q':'noselde-q']"></text></view>
							</view>
							<view class="list-name">{{item.title}}</view>
							<view class="list-da">
								<view>课程：<text>{{item.course}}</text></view>
								<view>时长：<text>{{item.duration}}</text>分</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sure" @click="sure">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						course_id: "001",
						title: "求职者",
						course: "体育课",
						duration: "0",
						selected: false
					},
					{
						course_id: "002",
						title: "导师",
						course: "音乐课",
						duration: "120",
						selected: false
					},
					{
						course_id: "003",
						title: "好好学习天天向上",
						course: "信息科",
						duration: "80",
						selected: false
					},
				],
				selectId:[],
			};
		},
		methods: {
			//选择课程
			choice(index){
				if(this.list[index].selected == true){
					this.list[index].selected = false;
					//取消选中时删除数组中的值
					for(var i = 0; i < this.selectId.length; i++){
					    if(this.selectId[i] === this.list[index].course_id){
					        this.selectId.splice(i,1);
					    }
					}
					console.log("选中的值",this.selectId)
				}else{
					this.list[index].selected = true;
					this.selectId.push(this.list[index].course_id)
					console.log("选中的值",this.selectId)
				}
			},
			//提交
			sure(){
				//提交选中的值
				if(this.selectId.length==0){
					alert("请选择学科");
					return false;
				}
				var listIds = this.selectId.join(",")
				console.log("提交的数据",listIds)
			}
		
		}
	};
</script>

<style>
	page{
		background-color: #eee;
	}
	/* 已选择 */
	.selde {
		border: 1px solid red;
		background: red;
		color: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 20upx;
		padding: 0 10upx;
	}

	.selde-q {
		width: 18upx;
		height: 18upx;
		border-radius: 50%;
		background: #FFFFFF;
		margin-left: 6upx;
	}

	/* 未选择 */
	.noselde {
		border: 1px solid #959595;
		background: #FFFFFF;
		color: #959595;
		border-radius: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 20upx;
		padding: 0 10upx;
	}

	.noselde-q {
		border: 1px solid #959595;
		width: 16upx;
		height: 16upx;
		border-radius: 50%;
		background: #FFFFFF;
		margin-left: 6upx;
	}
	.list-box {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		margin: 0upx 16upx 16upx 16upx;
		padding: 16upx;
		border-radius: 10upx;
	}

	.list-ed {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.list-left {
		margin-right: 16upx;
	}

	.list-img {
		width: 160upx;
		height: 160upx;
		margin: 0upx 16upx 0upx 0upx;
	}

	.list-right {
		display: flex;
		flex-direction: column;
		width: 510upx;
		height: 180upx;
	}

	.list-right-img {
		width: 140upx;
		height: 38upx;
	}

	.noadsop {
		width: 120upx;
		height: 32upx;
	}

	.list-head {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 10upx;
	}

	.list-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 10upx;
	}

	.list-da {
		display: flex;
		flex-direction: row;
		font-size: 26upx;
	}

	.list-da view {
		width: 50%;
	}

	.list-da view text {
		color: red;
	}

	.sure {
		background: #0000e1;
		color: #FFFFFF;
		width: 600upx;
		height: 70upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 40upx;
		margin: 60upx auto;
	}
</style>
