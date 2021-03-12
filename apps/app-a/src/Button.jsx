import React from 'react'

const Button = ({ children }) => {
  const handleOnClick = () => {
    console.warn('Log from app-a');
  }

  return (
    <React.Fragment>
      <button onClick={() => handleOnClick()}>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button