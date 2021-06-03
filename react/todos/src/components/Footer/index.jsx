import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  state = {
    count: 0
  }
  static propTyps = {
    todos: PropTypes.array.isRequired
  }
  handelCheckedAll = (event)=> {
    this.props.checkAllTodo(event.target.checked)
  }
  handelClearAll= ()=> {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    let doneTodos = todos.filter(item=> item.done === true)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={todos.length === doneTodos.length && todos.length !== 0?true:false} onChange={this.handelCheckedAll} />
        </label>
        <span>
          <span>已完成{doneTodos.length}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handelClearAll}>清除已完成任务</button>
      </div>
    )
  }
}
