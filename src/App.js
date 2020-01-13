
import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: data
    };
  }

  addTodo = name => {
    // update grocery state with a new item
    const newTodo = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => (item.completed !== true))
    })
  };

  toggleCompleted = id => {
    // loop through groceries data
    // find the grocery we clicked
    // toggle that grocery's purchased property
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  }
    
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;