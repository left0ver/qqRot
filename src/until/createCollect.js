const mysql = require('mysql')
const connection = mysql.createConnection({
  // 本地
  //   host: 'localhost', //ip地址
  //   user: 'root',    //用户名
  //   password: 'zwc666666', //密码
  //   database: 'qqrot'   //对应的数据库的名称
  host: '0.0.0.0',
  user: 'qqrot',
  password: 'zwc666666',
  database: 'qqrot'
})
connection.connect(err => {
  if (err !== null) {
    console.log(err)
  }
  console.log('database connect success')
})
module.exports = connection
