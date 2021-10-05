const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  dialect: 'mysql' // 操作是 mysql
}

conf.pool = {
  max: 5, // 连接池最大的连接数量
  min: 0,
  idle: 10000, // 如果一个连接池 10s 之内没有被使用，则被释放
}

const seq = new Sequelize('数据库名字', '用户名', '密码', conf)

module.exports = seq