var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
//创建一个connection
var connection = mysql.createConnection({
  host: 'localhost',       //主机
  user: 'root',               //MySQL认证用户名
  password :'123456',        //MySQL认证用户密码
  port: '3306',                   //端口号
  database:'meijing',
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //调用MySQL模块
  /*console.log('The solution is ww');
  connection.connect();
  var t;
  connection.query('SELECT Id,Name,Age From tt', function(err, rows, fields) {
    if (err) {
      console.log('The err is',err);
      return;
    }else {
      t=rows[0];
      console.log('The solution yxg: ', rows[0]);
      console.log('The solution is');
      res.render('index', { title: t });
    }
  })
  connection.end();*/

});

module.exports = router;
