import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.task}</h1>
            </div>
        )
    }
}
