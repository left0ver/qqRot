const bot = require('../../index')
const connection = require('../until/createCollect')
const { timeoutFunc } = require('../until/timeoutFunc')
const group = bot.pickGroup(479644933, true)
let count = 0
let questions = []
timeoutFunc({ interval: 1, time: '00:00:00', runNow: true }, () => {
  connection.query('select * from question', (err, results) => {
    if (err !== null) {
      throw new Error(err)
    }
    if (results.length === 0) {
      throw new Error('查询到的数据为空')
    }
    questions = results
  })
})

timeoutFunc(
  { interval: 1, time: '08:00:00', runNow: false, delay: 1000 * 60*60*24 },
  () => {
    if (count < questions.length) {
      const question = questions[count].question
      group.sendMsg(question)
    }
  }
)

timeoutFunc(
  { interval: 1, time: '09:30:00', runNow: false, delay: 1000 * 60*60*24 },
  () => {
    if (count < questions.length) {
      const question = questions[count].question
      const answer = questions[count++].answer
      group.sendMsg(`${question}\n${answer}`)
    }
  }
)
