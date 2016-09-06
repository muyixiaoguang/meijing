/*
 * 首页展示的推荐
 * 默认值展示6个推荐信息
 */

var db=require("../framework/db");

exports.findAll=function (callback) {
    db.query("Select Title,Content,Image From recommend order by Sort;",callback);
}