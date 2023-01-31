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
        this.props.handleAdd(this.state.todo);

        // clearing the input field/state after adding
        this.setState({
            todo: ''
        })
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
