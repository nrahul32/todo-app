import React, { Component } from "react";

class AddTodo extends Component {

    state = {
        todo: 'Add text here'
    }

    handleChange = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert("State: " + this.state.todo);
    }

    render() {
        return (
            <div>
                Add Todo:
                <input type='text' value={this.state.todo} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        )
    }
}

export default AddTodo;
