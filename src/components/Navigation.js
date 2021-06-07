import React, { Component } from 'react';

import { todos } from '../todos.json';
console.log(todos);

class Navigation extends Component{
    constructor() {
        super();
        this.state = {
            todos
        }
    }

    render(){

        const todos = this.state.todos.map ((todo, i) =>{
            return(
                <div className="col-md-4">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            
                            <span className="badge badge-pill badge-dark ml-2">
                                {todo.priority}
                            </span>
                            
                            
                            <h1>{todo.priority}</h1> 
                        </div>
                        <div className="card-body">
                            <p>{todo.descripcion}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            
            <div className="container">
                <div className="row mt-4">
                    {todos}
                </div>
                
            </div>
        )
    }
}

export default Navigation;