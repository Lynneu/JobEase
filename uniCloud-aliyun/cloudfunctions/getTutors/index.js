'use strict';
// 云函数：getTutors
const db = uniCloud.database();
exports.main = async (event, context) => {
  const pageSize = event.pageSize; // 一页的数据条数
  const pageIndex = event.pageIndex; // 页码，从0开始

  const tutorsCollection = db.collection('user_detail');
  const total = await tutorsCollection.where({ isTeacher: 1 }).count(); // 获取总的导师数量

  const tutors = await tutorsCollection.where({ isTeacher: 1 })
    .skip(pageSize * pageIndex)
    .limit(pageSize)
    .get(); // 获取一页导师数据

  return {
    total: total.total,
    tutors: tutors.data,
  };
};
