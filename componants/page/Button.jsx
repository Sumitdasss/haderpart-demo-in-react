import React from 'react'

const Button = ({btn,className}) => {
  return (
    <div>
        <button className={` ${className}`}>{btn}</button>
    </div>
  )
}

export default Button