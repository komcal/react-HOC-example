import React from 'react'

export const TextInput = (props) => (
  <input name={props.name} {...props.input}/>
)

export const TextArea = (props) => (
  <textarea  name={props.name} {...props.input}/>
)
