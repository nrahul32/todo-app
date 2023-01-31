import React, { Component } from "react";
import Title from "./title";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

class TodoApp extends Component {

    state = {
        todos: [
            {
                id: 1,
                task: "This is a sample todo item"
            },
            {
                id: 2,
                task: "Click on X to delete any item"
            },
        ]
    }

    addTodo = (newTodo) => {
        let existingTodos = this.state.todos;
        existingTodos.push({
            id: this.state.todos.length + 1,
            task: newTodo
        })
        this.setState({existingTodos})
    }

    render() {
        return (
            <div>
                <Title />
                <AddTodo handleAdd={this.addTodo}/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default TodoApp;
