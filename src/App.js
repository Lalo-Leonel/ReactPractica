import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm'; 
import { todos } from './todos.json';


console.log(todos);



class App extends Component {
  constructor() {       
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  <p>{ todo.priority }</p>
                </span>
            </div>
            <div className="card-body">
              <p>{todo.descripcion}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>  
      )
    });

    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
              Task
              <span className="badge badge-pill badge-light ml-2">
                {this.state.todos.length}
              </span>
            </a>
                  
          </nav>
          <div className="container">
            <div className="row mt-4">
              <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo" />
                <TodoForm onAddTodo={this.handleAddTodo}/>
              </div> 
              <div className="col-md-9">
                <div className="row">
                  { todos }
                </div>
              </div>
            </div> 
            
          </div>       
          
      </div>
    );

  }

  
}

export default App;
