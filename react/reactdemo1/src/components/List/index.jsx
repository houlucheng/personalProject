import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    let {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map( item => {
            return <Item key={item.id} {...item}/>
          })
        }
      </ul>
    )
  }
}
