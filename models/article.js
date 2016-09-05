var db=require("../framework/db");


// 查询所有的文章列表
exports.findAll=function (callback) {
    db.query("select Id,Title,Tip,Content,Image,CreateDate,CreateUser From article;",callback);
}

exports.insert=function (values,callback) {
    db.query("INSERT INTO article (Title,Tip,Content,Image,CreateDate,CreateUser) VALUES (?, ?, ?, ?, ?, ?, ?);",values,callback);
}

exports.getArticleByPage=function(values,callback){
    db.query("Select Title,Tip,Content,Image,CreateDate,CreateUser From article;",callback);
}

exports.getDetail=function (values,callback) {
    db.query("Select Title,Tip,Content,Image,CreateDate,CreateUser From article Where Id=?",values,callback);
}
