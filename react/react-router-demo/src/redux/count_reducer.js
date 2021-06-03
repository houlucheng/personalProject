/*
* 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
* reducer函数会接收两个参数，分别为：之前的状态（preState）, 动作对象（action）
*/

const initState = 6
export default function countReducer(preState = initState, action) {
  const {type, data} = action
  switch (type){
    case "add":
      return preState + data
    case "cur":
      return preState - data
    default:
      return preState
  }
}