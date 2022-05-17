import React from 'react'

function Options({ options }) {
  return options.map((option, index) => (
    <div className="flex items-center mb-3 " key={index}>
      <div className="w-7 h-7 border-solid border-2  rounded-full border-orange-400 p-1 inline-block mr-2 ">
        <div className="w-full h-full bg-orange-400 rounded-full"></div>
      </div>
      <div>
        <p className="uppercase text-lg text-orange-400">{option}</p>
      </div>
    </div>
  ))
}

export default Options
