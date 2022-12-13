import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons">
            <button type="button" className="acc" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button type="button" className="brake" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
