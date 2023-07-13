import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = {passedSecond: 0}
  }

  increase = () => {
    console.log('hi')
    this.setState(pre => ({passedSecond: pre.passedSecond + 1}))
  }

  start = () => {
    this.interval = setInterval(this.increase, 1000)
  }

  stop = () => {
    clearInterval(this.interval)
  }

  restart = () => {}

  getACTualtime = () => {
    const {passedSecond} = this.state
  }

  render() {
    const time = this.getActualTime()

    return (
      <div className="main col">
        <h1>StopWatch</h1>
        <div className="card">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            Timer
          </div>
          <div>
            <p>00:40</p>
          </div>
          <div>
            <button type="button" className="str" onClick={this.start}>
              Start
            </button>
            <button type="button" className="stp" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="re" onClick={this.restart}>
              Restart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
