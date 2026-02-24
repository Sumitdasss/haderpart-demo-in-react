import React from 'react'

const Button = ({btn,className}) => {
  return (
    <div>
        <button className={`bg-amber-500 ${className}`}>{btn}</button>
    </div>
  )
}

export default Button