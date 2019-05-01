/**
 * EXAMPLE ?id=123&name=abc
 * RETURN Object {id:123,name:abc}
 */
export function urlParse() {
  let parm = window.location.search
  parm = decodeURIComponent(parm)
  let object = {}
  /*这是一种方法
  parm = parm.substr(1)
  let reg = /([^&]+)=([^&]+)&?/
  while (reg.test(parm)) {
    object[RegExp.$1] = RegExp.$2
    parm = parm.replace(reg, '')
    console.log(parm)
  }
  */

  /* 这是另一种方法 */
  let reg = /[?&][^?&]+=[^&]+/g
  let arr = parm.match(reg)
  // ['?id=123', '&name=abc']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substr(1).split('=')
      let key = tempArr[0]
      let value = tempArr[1]
      object[key] = value
    })
  }

  return object

}