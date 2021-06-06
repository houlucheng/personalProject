import store from "./store"


// 同步action 就是指action的值为Object类型的一般对象
export const createAddAction = data => ({type: "add", data}) 
export const createCurAction = data => ({type: "cur", data})

// 异步action， 就是指action的值为函数
export const createAddAsyncAction = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createAddAction(data))
    }, time)
  }
}