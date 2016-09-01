var db=require("../framework/db");

exports.findUser=function (values,callback) {
    db.query("Select UserName,NickName,Degree From User where UserName=? and Password=?",values,callback);
}
