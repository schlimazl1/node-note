const Sequelize = require('sequelize')
const seq = require('./index')

// 创建 User 模型
const User = req.define('user', {
  // id 会自动创建，并设为主键，自增
  userName: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称'
  },
  // 自动创建：createdAt 和 updatedAt
})

// Blog 模型
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

// 外键关联
// 多对一
Blog.belongsTo(User, {
  // Blog.userId -> User.id
  foreignKey: 'userId'
})
User.hasMany(Blog, {
  // Blog.userId -> User.id
  foreignKey: 'userId'
})

module.exports {
  User
}