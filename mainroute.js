/**
 * Created by muyi on 2016/8/15.
 */
var express = require('express');
var passport = require('./controller/passport');
var postarticle = require('./controller/post_article');

var apiArticle=require('./controller/api');
var router = express.Router();



router.get("/",function (req,res) {
    res.render("index",{Title:"nodejs ueditor"});
})

router.get('/passport', passport.passport); // 用户个人主页
router.post('/passport', passport.passport); // 用户个人主页

router.get("/post",postarticle.post_article);
router.post("/post",postarticle.post_article);

router.get("/getArticle",apiArticle.getArticle);
module.exports = router;