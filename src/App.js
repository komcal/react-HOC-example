import React, { Component } from 'react';
import './App.css';
import { Increment, Decrease } from './Calculate'
import CalculateWrapper from './CalculateWrapper'
import InputWrapper from './InputWrapper'
import { TextInput, TextArea } from './Input'

class App extends Component {
  render() {
    const CalculateIncrement = CalculateWrapper(Increment)
    const CalculateDecrease = CalculateWrapper(Decrease)
    const Input = InputWrapper(TextInput)
    const TextAreaInput = InputWrapper(TextArea)
    return (
      <div className="App">
        <CalculateIncrement x={10} y={20} operation={'+'}/>
        <CalculateDecrease x={10} y={20} operation={'-'}/>
        <div>
          <Input name="text"/>
        </div>
        <TextAreaInput name="textarea"/>
      </div>
    );
  }
}

export default App;
