import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg'
import './Calculator.css'
import Button from './Button'

class Calculator extends Component {
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

    this.setState({sign: sign, memory: '', buffer: buffer })
  }
  onEqual (e) {
    let number = this.state.memory
    let buffer = this.state.buffer.concat(number)
    let result = 0

    if (buffer.length >= 2) {
      let first = Number(buffer[0])
      let second = Number(buffer[1])

      switch (this.state.sign) {
        case '+':
          result = Number(first + second).toFixed(2)
          break
        case '-':
          result = Number(first - second).toFixed(2)
          break
        case '*':
          result = Number(first * second).toFixed(2)
          break
        case '/':
          result = Number(first / second).toFixed(2)
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
    let Multiply = <Button value='*' onClick={this.onMath}></Button>
    let Divide = <Button value='/' onClick={this.onMath}></Button>
    let Equal = <Button value='=' onClick={this.onEqual}></Button>
    return (
      <div className='Calculator'>
        <section className='container'>
          <section className='viewContainer'>
            <input className=' form-control view' value={this.state.memory} ref='in'></input>
          </section>
          <section className='keyPadContainer'>
            {KeyPad}
          </section>
          <br/>
          <section className='operand-container'>
            {Add} {Subtract} {Multiply} {Divide} {Equal}
          </section>
        </section>
      </div>
    )
  }
}

export default Calculator
