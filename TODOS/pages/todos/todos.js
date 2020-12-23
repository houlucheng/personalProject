// pages/todos/todos.js
Page({
  data :{
    input: "",
    todos: [
      {name: 'lea Html', completed: false},
      {name: 'lea Css', completed: true},
      {name: 'lea Java', completed: false}
    ],
    allCompleted: false,
    leftCount: 2
  },
  inputChangeHandl (e){
    this.setData({input:e.detail.value})
  },
  addTodoHandle (){
    if(!this.data.input){return}
    var todos = this.data.todos;
    todos.push({name: this.data.input,completed: false})
    this.setData({
      todos: todos, 
      input: "",
      leftCount: this.data.leftCount + 1
    })
  },
  toggleTodoHandl (e){
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
    this.setData({todos: this.data.todos, leftCount: leftCount})
  },
  removeTodoHandl (e){
    var todos = this.data.todos;
    var item = this.data.todos[e.currentTarget.dataset.index]
    var leftCount = this.data.leftCount;
    if(!item.completed){
      leftCount = leftCount - 1
    }
    todos.splice(e.currentTarget.dataset.index,1);
    this.setData({todos: todos, leftCount: leftCount})
  },
  toggleAllHandl (){
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos;
    todos.forEach(el => {
      el.completed = this.data.allCompleted
    });
    var leftCount = this.data.allCompleted ? 0 : todos.length
    this.setData({todos: todos, leftCount: leftCount})
  },
  clearHandl () {
    var todos = []
    this.data.todos.forEach(function(item){
      if(!item.completed){
        todos.push(item)
      }
    })
    this.setData({todos: todos})
  }
})