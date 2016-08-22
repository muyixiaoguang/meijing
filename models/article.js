var db=require("../framework/db");

// 查询所有的文章列表
exports.findAll=function (callback) {
    db.query("select Id,Title,Tip,Content,Image,Post,CreateDate,CreateUser From article;",callback);
}


