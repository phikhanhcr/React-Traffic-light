import React, { Component } from 'react';
import classNames from 'classnames';
class Input extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false,
      color: false
    };
  }
  changeState = () => {
    this.setState({
      isFocused: true
    })
  }
  hidden = () => {
    this.setState({
      isFocused: false
    })
  }

  tinhToan = () => {
    let value = document.getElementById('id').value;
    if (value.length > 10) {
      this.setState({
        color: true
      })
    } else {
      this.setState({
        color: false
      })
    }
    let convertString = parseInt(value);
    if (convertString === NaN) {
      this.setState({
        color: true
      })
    } else {
      if (value.indexOf("090") === 0) {
        this.setState({
          color: false
        })
      } else {
        this.setState({
          color: true
        })
      }
    }
  }



  render() {
    const { color } = this.state;
    let className = "";
    const linkanh = "https://cdn.glitch.com/b1a4a51d-d7af-4529-a24f-6778ac65df53%2Fmagnifying-glass.png?v=1589288364144"
    if (this.state.isFocused === true) {
      className = classNames('display');
    }
    if (color === true) {
      className = classNames(className, "color");
    }

    return (
      <div className="INPUT">
        <input type="text"
          maxlength="11"
          className={className}
          id="id"
          placeholder="Type something to search..."
          onFocus={this.changeState}
          onChange={this.tinhToan}
          onBlur={this.hidden} 
        />
        <img className={className} src={linkanh} />
      </div>
    );
  }

}
export default Input;