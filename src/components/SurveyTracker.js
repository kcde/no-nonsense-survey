import React, { useContext } from 'react'
import GlobalContext from '../context'

function SurveyTracker() {
  const { questions, questionNumber } = useContext(GlobalContext)

  return (
    <div className="flex space-x-1 rounded-full overflow-hidden ">
      {questions.map((question) => (
        <div
          key={question.id}
          className={`flex-1 h-[3px] ${
            question.id <= questionNumber ? 'bg-orange-400' : 'bg-orange-200'
          }`}
        ></div>
      ))}
    </div>
  )
}

export default SurveyTracker
