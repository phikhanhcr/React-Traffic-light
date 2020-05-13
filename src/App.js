import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/Traffic-lights';
import Input from './components/Input.js'
import DisplayBox from './components/DisplayBox'

class App extends Component {
  constructor(){
    super();
    this.state = {
      display : false
    }
  }
  clickMe = () => {
    this.setState({
      display : true
    })
  }
  render() {
    const { display } = this.state;
    return (
      <div className="App">
        <TrafficLight />
        <Input />
        <a href="#" class='AppBtn' onClick={this.clickMe}> Readme </a>
        <DisplayBox display={display}/>
      </div>
    );
  }
}

export default App;
