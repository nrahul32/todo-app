import React, { Component } from "react";
import Title from "./title";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Title />
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default TodoApp;
