var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引入 express-session 模块
var session = require('express-session');

var ueditor      = require('ueditor');

var mainRoute = require('./mainroute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'meijingwang',// 用来对session数据进行加密的字符串.这个属性值为必须指定的属性。
  resave:true,// 是指每次请求都重新设置session cookie，假设你的cookie是10000毫秒过期，每次请求都会再设置10000毫秒。
  saveUninitialized: true,// 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
  cookie: { maxAge: 10*60 * 1000 }//cookie过期时间，毫秒。
}));
//ueditor
app.use("/libs/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {

  // ueditor 客户发起上传图片请求
  if (req.query.action === 'uploadimage') {
    var foo = req.ueditor;
    var date = new Date();
    var imgname = req.ueditor.filename;

    var img_url = '/images/2016';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
  }

  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images';
    res.ue_list(dir_url);  // 客户端会列出 dir_url 目录下的所有图片
  }

  // 客户端发起其它请求
  else {

    res.setHeader('Content-Type', 'application/json');
    res.redirect('/libs/ueditor/nodejs/config.json')
  }

}));



app.use('/', mainRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
