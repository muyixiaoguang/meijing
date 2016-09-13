
var db=require("../framework/db");

exports.findTop5Related=function (values,callback) {
    // 查询与本文章相关的前五条文章
    db.query("Select a.Id,Title from relatedtoeach e left join article a on e.SlaveId =a.Id where e.MasterId=? LIMIT 5;",values,callback);
}