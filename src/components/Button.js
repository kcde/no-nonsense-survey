import React from 'react'

function Button(props) {
  return (
    <button
      {...props}
      className={`block ${
        props.disabled ? 'bg-gray-400 text-gray-300' : 'bg-blue-400 text-white'
      }  w-full rounded-full py-2 uppercase font-bold`}
    >
      {props.children}
    </button>
  )
}

export default Button
