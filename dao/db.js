// 引用mysql
var mysql = require('mysql');
// mysql的配置信息
var option = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'zmeijing'
};

// 封装mysql查询
function query(sqls,values,callback) {
    var client = mysql.createConnection(option);
    client.connect(function(err){
        if (err) {
            console.log(err);
            return;
        }
        // 查询
        client.query(sqls || '', values || [],function(err,r){
            callback(err,r);
        });
        client.end();
    });
    client.on('error',function(err) {
        if (err.errno != 'ECONNRESET') {
            callback("err01",false);
            throw err;
        } else {
            callback("err02",false);
        }
    });
}
exports.query = query;