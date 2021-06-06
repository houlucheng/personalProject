import React, {Component} from 'react'
import store from '../../redux/store'
import {
  createAddAction,
  createCurAction,
  createAddAsyncAction
} from '../../redux/createAction'

class Count extends Component {

  // 解决改变store里的值之后组件不更新（也可直接写在根组件index.js里）
  // componentDidMount(){
  //   store.subscribe(()=> {
  //     this.setState({})
  //   })
  // }

  // 加
  addHandel = ()=> {
    store.dispatch(createAddAction(this.eleVal.value * 1))
    // store.dispatch({type: "add", data: this.eleVal.value * 1})
  }

  // 减
  cutHandel = ()=> {
    store.dispatch(createCurAction(this.eleVal.value * 1))
    // store.dispatch({type: "cur", data: this.eleVal.value * 1})
  }

  // 奇数加
  oddHandel = ()=> {
    const count = store.getState()
    if(count % 2 !== 0){
      store.dispatch(createAddAction(this.eleVal.value * 1))
      // store.dispatch({type: "add", data: this.eleVal.value * 1})
    }
  }

  // 异步加
  asyncHandel = ()=> {
    store.dispatch(createAddAsyncAction(this.eleVal.value * 1, 1000))
    
    // setTimeout(()=> {
    //   store.dispatch({type: "add", data: this.eleVal.value * 1})
    // },1000)
    
  }
  
  render() {
    return (
      <>
        <h2>当前求和为{store.getState()}</h2> <br/>&nbsp;&nbsp;
        <select ref={e => this.eleVal = e}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.addHandel} >加</button>&nbsp;
        <button onClick={this.cutHandel} >减</button>&nbsp;
        <button onClick={this.oddHandel} >奇数加</button>&nbsp;
        <button onClick={this.asyncHandel} >延时加</button>
      </>
      
    )
  }
}

export default Count