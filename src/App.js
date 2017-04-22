import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './App.css'
import Button from './Button'

class App extends Component {
  constructor () {
    super()

    this.numbers = [
      7, 8, 9,
      4, 5, 6,
      3, 2, 1,
      0
    ]

    this.state = {memory: '', sign: null, buffer: []}
    this.onClick = this.onClick.bind(this)
    this.onMath = this.onMath.bind(this)
    this.onEqual = this.onEqual.bind(this)
  }
  onClick (e) {
    let memory = this.state.memory
    memory += e.target.value
    this.setState({ memory: memory })
  }
  onMath (e) {
    let number = this.state.memory
    let buffer = this.state.buffer.concat(number)
    let sign = e.target.value
    console.log('sign', sign)

    this.setState({sign: sign, memory: '', buffer: buffer })
  }
  onEqual (e) {
    let number = this.state.memory
    let buffer = this.state.buffer.concat(number)
    let result = 0
    console.log('e', e.target.value)
    if (buffer.length >= 2) {
      switch (this.state.sign) {
        case '+':
          result = Number(buffer[0]) + Number(buffer[1])
          break
        case '-':
          result = Number(buffer[0]) - Number(buffer[1])
          break
        default:
          result = ''
          break
      }
      this.setState({sign: '', memory: result, buffer: []})
    }
  }
  render () {
    let KeyPad = this.numbers.map((e, i) => <Button value={e} key={i} onClick={this.onClick}>
                                              {e}
                                            </Button>)
    let Add = <Button value='+' onClick={this.onMath}></Button>
    let Subtract = <Button value='-' onClick={this.onMath}></Button>
    let Equal = <Button value='=' onClick={this.onEqual}></Button>
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <input value={this.state.memory} ref='in'></input>
        {KeyPad}
        <br/>
        {Add}
        {Subtract}
        <br/>
        {Equal}
      </div>
    )
  }
}

export default App
