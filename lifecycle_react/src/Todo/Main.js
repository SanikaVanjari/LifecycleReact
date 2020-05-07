import React, { Component } from 'react'
import Header from './Header'
import TodoList from './TodoList'

const list = [
  { id: 1, task: 'wash clothes' },
  { id: 2, task: 'mop floors' },
]

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="ToDo List"></Header>
        <TodoList tasks={list}></TodoList>
      </React.Fragment>
    )
  }
}

export default Main
