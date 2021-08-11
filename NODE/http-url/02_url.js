const URL = require('url')

const api = "http://www.baidu.com?a=123&b=666"

// 获取url后面的参数  parse的第二个参数true代表把参数转换为对象形式
const getValue = URL.parse(api, true).query

console.log(getValue);