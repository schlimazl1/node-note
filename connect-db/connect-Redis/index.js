const Redis = require("ioredis");
// 建立连接
const redis = new Redis({
  port: 6379,
  host: '127.0.0.1',
  showFriendlyErrorStack: true // 错误处理
});

// ioredis supports all Redis commands:
redis.set("foo", "bar", (err, ret) => {
  if (err) {
    console.log('写入失败', err)
  } else {
    console.log('写入成功', ret)
  }
}); // returns promise which resolves to string, "OK"

// the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING)
// the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" `

// ioredis supports the node.js callback style
redis.get("foo", function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log(result); // Promise resolves to "bar"
  }
});

// Or ioredis returns a promise if the last argument isn't a function
redis.get("foo").then(function (result) {
  console.log(result); // Prints "bar"
});

// Pipelining

// 事务

// 错误处理