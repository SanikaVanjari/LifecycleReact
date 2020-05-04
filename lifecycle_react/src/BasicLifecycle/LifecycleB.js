import React, { Component } from 'react'

export default class LifecycleB extends Component {
  constructor(props) {
    super(props)
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  render() {
    return (
      <div>
        <p>LifecycleB</p>
      </div>
    )
  }
}
