/**
 * Created by muyi on 2016/8/15.
 */
var express = require('express');
var passport = require('./controller/passport');
var router = express.Router();





router.get('/passport', passport.passport); // 用户个人主页

module.exports = router;