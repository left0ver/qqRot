/**
 * @description:
 * @param {*interval:number timePoint:string,runtime:boolean,delay:number, } config
 * @param {*Function} func
 * @return {*void}
 */
function timeoutFunc (
  {
    // 隔多少个延迟
    interval = 1,
    // 默认0点执行
    time = '00:00:00',
    // 是否立即执行一次
    runNow = false,
    // 延迟多久
    delay = 1000 * 60 * 60 * 24
  },
  fn
) {
  runNow && fn()
  const nowTime = new Date().getTime()
  const timePoint = time.split(':')
  const hours = parseInt(timePoint[0])
  const minutes = parseInt(timePoint[1])
  const seconds = parseInt(timePoint[2])
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  date.setSeconds(seconds)
  let recent = date.getTime()
  recent >= nowTime || (recent += 24 * 3600000)
  setTimeout(() => {
    fn()
    setInterval(fn, interval * delay)
  }, recent - nowTime)
}

module.exports = { timeoutFunc }
