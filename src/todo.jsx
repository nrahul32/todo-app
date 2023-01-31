import React, { Component } from "react";

class Todo extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.todo.id);
    }

    render() {
        return (
            <div>
                {this.props.todo.task}
                <span>  </span>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
}

export default Todo;
