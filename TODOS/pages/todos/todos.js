// pages/todos/todos.js
Page({
  data :{
    input: "",
    todos: [
      {name: 'lea Html', completed: false},
      {name: 'lea Css', completed: true},
      {name: 'lea Java', completed: false}
    ],
  },
  inputChangeHandl: function(e){
    this.setData({input:e.detail.value})
  },
  addTodoHandle: function(){
    if(!this.data.input){return}
    var todos = this.data.todos;
    todos.push({name: this.data.input,completed: false})
    this.setData({todos: todos, input: ""})
  },
  toggleTodoHandl: function(e){
    var index = e.currentTarget.dataset.index
  }
})