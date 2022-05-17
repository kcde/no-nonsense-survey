import React from 'react'
import Options from './Options'

function QuestionCard({ show, question, setQuestionNumber }) {
  return (
    <div className="bg-slate-100 rounded-2xl p-6 ">
      <div className="flex items-center">
        <p className="text-2xl font-bold text-gray-300">Q{question.id}</p>
      </div>
      <div>
        <p className="text-orange-400 font-bold text-lg mb-4 ">
          {question.question}
        </p>
      </div>
      <Options options={question.options} />
    </div>
  )
}

export default QuestionCard
