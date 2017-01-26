import React, { Component } from 'react';
import './App.css';
import { Increment, Decrease } from './Calculate'
import CalculateWrapper from './CalculateWrapper'
import InputWrapper from './InputWrapper'
import { TextInput, TextArea } from './Input'
import ComponentValidator from './ComponentValidator'

class App extends Component {
  render() {
    const CalculateIncrement = CalculateWrapper(Increment)
    const CalculateDecrease = CalculateWrapper(Decrease)
    const Input = InputWrapper(TextInput)
    const TextAreaInput = InputWrapper(TextArea)
    const InputWithChecker = ComponentValidator(Input)
    return (
      <div className="App">
        <CalculateIncrement x={10} y={20} operation={'+'}/>
        <CalculateDecrease x={10} y={20} operation={'-'}/>
        <div>
          <Input name="text"/>
          <TextAreaInput name="textarea"/>
        </div>
        <div>
          <h2>Conditional rendering</h2>
          <InputWithChecker name="text" checker={false} />
          <InputWithChecker name="text" checker={true} />
        </div>
      </div>
    );
  }
}

export default App;
