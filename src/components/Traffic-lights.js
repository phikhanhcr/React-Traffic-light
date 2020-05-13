import React, { Component } from 'react';
import './traffic.css'
import classNames from 'classnames';
const RED = 0;
const YELLOW = 1;
const GREEN = 2;
class TrafficLight extends Component {
  // State is a variable and you can change its value , là 1 biến thay đối liên tục không cố định
  constructor() {
    super();
    this.state = {
      currentColor : RED
    };
    setInterval(() => {
      this.setState({
        currentColor : this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case GREEN:
        return YELLOW;
      case YELLOW:
        return RED;
      default:
        return GREEN;
    }
  }
  render() {
    const { currentColor } = this.state;
    return (
      <div className="TrafficLight">
         <div className={classNames('bulb', 'green', {
          active: currentColor === GREEN
        })}></div>
        <div className={classNames('bulb', 'yellow', {
          active: currentColor === YELLOW
        })}></div>
        <div className={classNames('bulb', 'red', {
          active: currentColor === RED
        })}></div>
        
      </div>
    );
  }
}

export default TrafficLight;