/* 防抖 */
export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout( () => {
      fn.apply(this, args)
    }, delay)
  }
}

/* 节流 */
export function throttle( fn, delay=3000 ){
  let canUse = true ; // 设置一个开关
  return function(){
      if(!canUse ){ return false } // 如果开关已经关掉了就不用往下了
      canUse  = false  // 利用闭包刚进来的时候关闭开关
      setTimeout( ( ) => { 
              fn.apply(this,arguments)
　　　　　　　　　　canUse = true // 执行完才打开开关
          }, delay)
  }
}

export function formatDate(date, fmt) {
	var o = {
		'M+': date.getMonth() + 1, //月份
		'd+': date.getDate(), //日
		'h+': date.getHours(), //小时
		'm+': date.getMinutes(), //分
		's+': date.getSeconds(), //秒
		'q+': Math.floor((date.getMonth() + 3) / 3), //季度
		S: date.getMilliseconds() //毫秒
	}
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(
			RegExp.$1,
			(date.getFullYear() + '').substr(4 - RegExp.$1.length)
		)
	for (var k in o)
		if (new RegExp('(' + k + ')').test(fmt))
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1
					? o[k]
					: ('00' + o[k]).substr(('' + o[k]).length)
			)
	return fmt
}