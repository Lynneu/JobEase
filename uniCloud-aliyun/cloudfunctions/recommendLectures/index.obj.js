// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
   // cloudfunctions/recommend/index.obj.js
   
     recommend: function(phone, data = [], limit = 10, offset = 0) {
		 const db = uniCloud.database();
       // userTags为空或者不是数组，则返回错误
       if(!Array.isArray(userTags) || userTags.length === 0) {
         return {
           errCode: 'INVALID_TAGS',
           errMsg: '用户标签不可为空，且必须是数组'
         }
       }
   
       // 使用数据库操作API获取所有讲座信息
       let lectures = await db.collection('lectures').get();
	   let users = await db.collection('user_detail').get();
		
       // 不进行过滤，让所有讲座都参与排序
       lectures = lectures.data.sort((a, b) => {
		 let scoreA = a.lecture_label.includes(userTag) ? 1 : 0;
         let scoreB = b.lecture_label.includes(userTag) ? 1 : 0;
   
         // 如果评分相同，以时间顺序进行排序
         if (scoreA === scoreB) {
           return new Date(b.lecture_time) - new Date(a.lecture_time);
         }
   
         // 以匹配评分进行排序
         return scoreB - scoreA;
       });
   
       // 返回结果，包括成功标识和推荐的讲座列表
       return {
         errCode: 0,
         errMsg: '获取推荐成功',
         data: lectures.slice(offset, offset + limit)
       }
     }
   }

}
