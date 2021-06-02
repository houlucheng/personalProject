import React, {Component} from 'react'

class Count extends Component {
  constructor() {
    super()
    this.state = {
      count: 1
    }
  }

  addHandel = ()=> {
    const {count} = this.state
    this.setState({count: count + this.eleVal.value * 1})
  }
  cutHandel = ()=> {
    const {count} = this.state
    this.setState({count: count - this.eleVal.value * 1})
  }
  oddHandel = ()=> {
    const {count} = this.state
    if(count % 2 !== 0){
      this.setState({count: count + this.eleVal.value * 1})
    }
  }
  asyncHandel = ()=> {
    const {count} = this.state
    setTimeout(()=> {
      this.setState({count: count + this.eleVal.value * 1})
    },1000)
    
  }
  
  render() {
    return (
      <>
        <h2>当前求和为{this.state.count}</h2> <br/>&nbsp;&nbsp;
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