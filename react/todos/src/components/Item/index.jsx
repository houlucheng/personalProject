import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouseState: false}

  mouseHandel = (mouseType)=> {
    return ()=> {
      this.setState({mouseState: mouseType})
    }
  }

  checkedHandel = (id)=>{
    return (event)=> {
      const {updateTodo} = this.props
      updateTodo(id, event.target.checked)
    }
  }
  handelDelete = (id)=> {
    const {deleteTodo} = this.props
    if(window.confirm('确定删除吗？')){
      deleteTodo(id)
    }
  }

  render() {
    let {id, name, done} = this.props
    let {mouseState} = this.state
    return (
      <li style={{background: mouseState? '#ddd' : '#fff'}} onMouseEnter={this.mouseHandel(true)} onMouseLeave={this.mouseHandel(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.checkedHandel(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handelDelete(id)} className="btn btn-danger" style={{ display: mouseState ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
