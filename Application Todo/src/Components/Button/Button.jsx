import React from 'react'

const Button = (props) => {
  return (
    <div
      className={props.className}
      onClick={props.onClick}
    >
      <h1>{props.title}</h1>
    </div>
  )
}

export default Button