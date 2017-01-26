import React from 'react'

export default (Component) => (props) => (
  <div>
    <div>{`${props.x} ${props.operation} ${props.y}`}</div>
    <Component {...props} />
  </div>
)
