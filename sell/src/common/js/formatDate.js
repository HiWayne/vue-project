export function formatDate(date, fmt) {
  if (typeof (fmt) !== "string") {
    throw new TypeError(`The param fmt : "${fmt} is not string"`)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
  }
  let o = {
    'M+': date.getMonth() + 1 + '',
    'd+': date.getDate() + '',
    'h+': date.getHours() + '',
    'm+': date.getMinutes() + '',
    's+': date.getSeconds() + ''
  }
  for (let i in o) {
    if (new RegExp(`(${i})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? o[i] : addZero(o[i]))
    }
  }
  return fmt
}

//如果是一位数字前面加0
function addZero(date) {
  if (typeof (date) !== "string") {
    date = date.toString()
  }
  let time = '00' + date
  return time.substr(date.length)
}