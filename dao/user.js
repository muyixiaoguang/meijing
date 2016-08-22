
var db=require("./../framework/db");

// 登录验证是否存在此账户及密码
exports.find=function(value,callback){
    db.query("select * from user where userName=? and password=?",value,callback);
}

