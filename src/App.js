import React, { Component } from "react";
import Todos from './Todos'
import AddForms from "./AddForms";


class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Buy some yugurt" }
    ],
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }
  componentDidMount(){
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component Updated");
    console.log(prevProps);
    console.log(prevState);
  }
  render() {
    return <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddForms addTodo={this.addTodo} />
    </div>;
  }
}

export default App;
