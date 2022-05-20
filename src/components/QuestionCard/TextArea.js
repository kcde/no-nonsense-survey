import React from 'react'

function TextArea({ onChangeHandler, questionId, response }) {
  return (
    <textarea
      className="w-full h-16 bg-orange-100 p-2 text-orange-500 resize-none"
      value={response}
      onChange={(e) => onChangeHandler(questionId, e.target.value)}
    ></textarea>
  )
}

export default TextArea
