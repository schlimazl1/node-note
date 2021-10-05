const { run } = require('./connect-mongodb')
// 连接测试
async function test () {
  const client = await run()
  // 名称获取数据库
  const testDb = client.db('test')
  // 得到集合
  const inventoryCollection = testDb.collection('inventory')
  // 查询所有
  let ret = await inventoryCollection.find()
  ret = await ret.toArray()
  console.log(ret)
  client.close()
}
test()