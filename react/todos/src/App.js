import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import FormList from './components/FormData/index'
import MyForeardRef from './components/MyForeardRef'

class App extends Component {
  state = {
    todos: [
      {id: '001', name: "吃饭", done: true},
      {id: '002', name: "睡觉", done: true},
      {id: '003', name: "打代码", done: false},
    ]
  }
  addtodo = (addTodo) => {
    let {todos} = this.state 
    let newTodos = [addTodo, ...todos]
    this.setState({todos: newTodos})
  }
  updateTodo = (id, done)=> {
    let {todos} = this.state
    let newTodos = todos.map((item, index) => {
      if(item.id === id){
        return {...item, done}
      }else {
        return item
      }
    })
    this.setState({todos: newTodos})
  }
  deleteTodo= (id)=> {
    const {todos} = this.state
    let newTodos = todos.filter( item=> {
      return item.id !== id
    })
    this.setState({todos: newTodos})
  }
  checkAllTodo = (checkType)=> {
    const {todos} = this.state
    let newTodos = todos.map(item=> {
      return {...item, done: checkType}
    })
    console.log(newTodos);
    this.setState({todos: newTodos})
  }
  clearAllDone = ()=> {
    const {todos} = this.state
    let newTodos = todos.filter( item=> {
      return !item.done
    })
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addtodo={this.addtodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
        <FormList />
        <hr />
        <MyForeardRef />

      </div>
    )
    
  }
}

export default App;
