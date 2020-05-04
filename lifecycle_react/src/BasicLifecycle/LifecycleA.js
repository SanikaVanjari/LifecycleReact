import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export default class LifecycleA extends Component {
  constructor(props) {
    super(props)
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  render() {
    return (
      <div>
        <p>LifecycleA</p>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}
