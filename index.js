const process = require('process')
const { createClient } = require('oicq')
const connection = require('./src/until/createCollect')
const accountInfo = require('./src/config/accountInfo')
const bot = createClient(accountInfo.account)
module.exports = bot
bot.on('system.online', () => {
  console.log('Logged in!')
  require('./src/group/sendInterview')
})
bot.on('system.login.qrcode', async function (e) {
  // 扫码后按回车登录
  process.stdin.once('data', () => {
    this.login()
  })
}).login(accountInfo.password)

bot.on('system.offline.kickoff', e => {
  console.log(e.message)
  connection.end()
})
bot.on('system.offline.network', e => {
  console.log(e.message)
  connection.end()
})
