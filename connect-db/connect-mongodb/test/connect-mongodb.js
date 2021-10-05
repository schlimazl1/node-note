const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function run () {
  try {
    // 开始连接
    await client.connect()
    return client
  } catch (err) {
    console.log('连接失败', err)
  }
}

module.exports = {
  run
}