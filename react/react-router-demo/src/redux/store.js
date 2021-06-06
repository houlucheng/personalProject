// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
// 支持异步action的中间件
import thunk from 'redux-thunk'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'

const store = createStore(countReducer, applyMiddleware(thunk))

export default store
