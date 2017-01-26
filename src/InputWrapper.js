import React, { Component } from 'react'

export default (WrappedComponent) => {
  return (
    class Wrapper extends Component {
      state={
        [this.props.name]: ''
      }
      onInputChange = (inputName) => (event) => {
        this.setState({
          [inputName]: event.target.value
        })
      }
      render() {
        const newProps = {
          input: {
            value: this.state[this.props.name],
            onChange: this.onInputChange(this.props.name)
          }
        }
        return <WrappedComponent {...this.props} {...newProps}/>
      }
    }
  )
}
