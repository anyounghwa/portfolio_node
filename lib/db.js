var mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'database-1.chqupvl9apyw.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'dmcom4544**',
    database: 'comicbook',
    port: '3306',
  });
  
connection.connect();
module.exports = connection;