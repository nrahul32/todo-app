import React, { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.todo.task}
                <span>  </span>
                <span>X</span>
            </div>
        )
    }
}

export default Todo;
