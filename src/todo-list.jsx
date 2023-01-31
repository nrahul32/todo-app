import React, { Component } from "react";
import Todo from "./todo";

class TodoList extends Component {
    render() {
        return (
            this.props.todos.map(todo => {
                return (<div>
                    <Todo todo={todo} handleDelete={this.props.handleDelete} />
                </div>)
            })
        )
    }
}

export default TodoList;
