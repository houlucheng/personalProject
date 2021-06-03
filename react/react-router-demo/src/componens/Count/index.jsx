import React, {Component} from 'react'
import store from '../../redux/store'

class Count extends Component {

  // 解决改变store里的值之后组件不更新（也可直接写在根组件index.js里）
  // componentDidMount(){
  //   store.subscribe(()=> {
  //     this.setState({})
  //   })
  // }

  addHandel = ()=> {
    store.dispatch({type: "add", data: this.eleVal.value * 1})
  }
  cutHandel = ()=> {
    store.dispatch({type: "cur", data: this.eleVal.value * 1})
  }
  oddHandel = ()=> {
    const count = store.getState()
    if(count % 2 !== 0){
      store.dispatch({type: "add", data: this.eleVal.value * 1})
    }
  }
  asyncHandel = ()=> {
    setTimeout(()=> {
      store.dispatch({type: "add", data: this.eleVal.value * 1})
    },1000)
    
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