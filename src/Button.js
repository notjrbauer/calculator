import React, { Component } from 'react'

class Button extends Component {
  constructor () {
    super()
  }
  render () {
    return <button value={this.props.value} onClick={this.props.onClick}>
             {this.props.value}
           </button>
  }

}

export default Button
