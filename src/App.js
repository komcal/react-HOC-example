import React, { Component } from 'react';
import './App.css';
import { Increment, Decrease } from './Calculate'
import CalculateWrapper from './CalculateWrapper'

class App extends Component {
  render() {
    const CalculateIncrement = CalculateWrapper(Increment)
    const CalculateDecrease = CalculateWrapper(Decrease)
    return (
      <div className="App">
        <CalculateIncrement x={10} y={20} operation={'+'}/>
        <CalculateDecrease x={10} y={20} operation={'-'}/>
      </div>
    );
  }
}

export default App;
