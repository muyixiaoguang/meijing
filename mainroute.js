/**
 * Created by muyi on 2016/8/15.
 */
var express = require('express');
var home = require('./controller/home');
var passport = require('./controller/passport');
var postarticle = require('./controller/post_article');

var apiArticle=require('./controller/api');
var detail=require('./controller/details');

var router = express.Router();



router.get("/",home.index);

router.get('/passport', passport.passport); // 用户个人主页
router.post('/passport', passport.passport); // 用户个人主页

router.get("/write",postarticle.post_article);
router.post("/post",postarticle.post_article);

router.get("/getArticle",apiArticle.getArticle);
router.get("/getReply",apiArticle.getReply);

router.get("/detail",detail.detail);
module.exports = router;