var express = require('express');

var article=require('../models/article');
var articleReply=require('../models/articleReply');
var relatedEach=require('../models/relatedtoeach');
// 获取文章列表
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

// 根据文章id，获取文章的评论列表，分页，每次分页展示20个
exports.getReply=function (req,res,next) {
    var articleId=req.query.id;
    articleReply.findReplyByPage([id],function (err,rows) {
        if(err){
            return next(err);
        }else {
            res.json(rows);
        }
    })
}


// 根据文章id，获取文章的评论列表，分页，每次分页展示20个
exports.getRelatedArticle=function (req,res,next) {
    var articleId=req.query.id;
    relatedEach.findTop5Related([articleId],function (err,rows) {
        if(err){
            return next(err);
        }else {
            res.json(rows);
        }
    })
}