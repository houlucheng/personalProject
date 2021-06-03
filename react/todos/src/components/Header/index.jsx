import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addtodo: PropTypes.func.isRequired
  }
  handelKeyUp = (event) => {
    let {addtodo} = this.props
    const {keyCode, target} = event
    if(keyCode !== 13) return
    if(target.value.trim() === "") return
    const todoObj = {id: nanoid(), name: target.value, done: false}
    addtodo(todoObj)
    target.value = ""
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handelKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
