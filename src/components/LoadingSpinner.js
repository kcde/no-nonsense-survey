import React from 'react'
import shawarmaImg from '../assets/shawarma.png'

function LoadingSpinner() {
  return (
    <div className="w-10 animate-spin">
      <img src={shawarmaImg} alt="shawarma" />
    </div>
  )
}

export default LoadingSpinner
