import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {console.log(this.props.title)}
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header
