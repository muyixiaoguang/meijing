/**
 * Created by muyi on 2016/8/16.
 */
var article=require('../models/article');
var express = require('express');

var gt="GET";
exports.post_article = function (req, res, next) {
    if(req.method==gt){
        res.render('write',{title:'lily'});
    }else {
        var title=req.body.title;
        var content =req.body.content;
        var v=[];
        v.push(title);
        v.push(content.substring(0,30));
        v.push(content);
        v.push("/uploads/allimg/150207/1-15020G514530-L.jpg");
        v.push(0);
        v.push(new Date());
        v.push(1);
        console.log(v);
        article.insert(v,function(err,rows){
            if(err){
                next(err);
            }else {
                res.send("success");
            }
        });

    }
};