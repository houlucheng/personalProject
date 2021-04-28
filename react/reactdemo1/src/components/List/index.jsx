import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    let {todos, updateTodo, deleteTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map( item => {
            return <Item updateTodo={updateTodo} deleteTodo={deleteTodo} key={item.id} {...item}/>
          })
        }
      </ul>
    )
  }
}
