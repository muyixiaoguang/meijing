/**
 * Created by muyi on 2016/8/16.
 */


exports.passport = function (req, res, next) {
    console.log("这是passport的请求");
    res.render('passport',{title:'lily'})
};