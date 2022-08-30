const express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
const loginRead = require('./common/loginRead.json')
const menuData = require('./common/menu.json')
const app = express() //实例化express

/**登录接口 */
app.use('/user/login', function (req, res) {
  // console.log(req, 'req')
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      loginData
    })
  )
})

/**登录日志 */
app.use('/home/loginsearch', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '登录成功',
      loginRead
    })
  )
})

// 侧边栏
app.use('/shou/menus', function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: '获取菜单栏成功!',
      menuData
    })
  )
})

app.listen('8099', () => {
  console.log('监听端口 8090')
})
