// 表同步
const seq = require('./index')

require('./model')
// 测试连接
seq.authenticate().then(() => {
  console.log('连接成功')
}).catch((err) => {
  console.log('连接失败', err)
})

seq.sync({
  force: true // 每次同步，如果有 User 则会重新创建
}).then(() => {
  // 同步成功，退出程序
  console.log('sync success')
  process.exit()
})