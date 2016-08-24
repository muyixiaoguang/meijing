var express = require('express');

var article=require('../models/article');
exports.getArticle=function (req, res, next) {
    var page=req.query.page;
    article.getArticleByPage(page,function (err,rows) {
       if(err){
           next(err);
       }else {
           res.send(rows);
       }
   })
    console.log(page);
}