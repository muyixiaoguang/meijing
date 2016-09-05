
// 查询文章的评论信息
exports.findReplyByPage=function (values,callback) {
    db.query("Select Id,Content,CreateDate,CreateUser From articleReply limit "+values+","+values*10,callback);
}