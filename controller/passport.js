
var user=require('../models/user');
var express = require('express');

var gt="GET";
exports.passport = function (req, res, next) {
    if(req.method==gt){
        res.render('passport',{title:'lily'});
    }else {
        var userName=req.body.userName;
        var password=req.body.password;
        var values=[userName,password];
        user.findUser(values,function (err,rows) {
            if(err){
                next(err);
            }else {
                var tt=1;
                req.session.user=rows;
                res.json(tt);
            }
        })
    }

    /* var userName=req.params("userName");
    var pass=req.params("password");
    user.find(['aaa','123'],function (err,row) {
        consle.log(row[0].Id);
    })*/
   /* console.log("这是passport的请求");
    db.query('SELECT Id,Name,Age From tt', function(err, rows, fields) {
    if (err) {
        console.log('The err is',err);
        return;
    }else {
        t=rows[0];
        console.log('The solution yxg: ', rows[0]);
        console.log('The solution is');
        res.render('index', { title: t });
    }
})*/

   // res.render('passport',{title:'lily'})
};