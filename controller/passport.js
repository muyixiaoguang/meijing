/**
 * Created by muyi on 2016/8/16.
 */
var article=require('../models/article');
var express = require('express');

var gt="GET";
exports.passport = function (req, res, next) {
    if(req.method==gt){
        article.findAll(function (err,rows) {
            console.log(rows[0]["Id "]);
        });
        res.render('passport',{title:'lily'});
    }else {
        var name=req.body.name;
        var age =req.body.age;
        console.log(name);
        console.log(age);
        res.redirect("https://baidu.com")
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