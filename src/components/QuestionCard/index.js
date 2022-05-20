import React, { useContext } from 'react'
import GlobalContext from '../../context'
import Options from './Options'
import TextArea from './TextArea'

function QuestionCard({ show, question, setQuestionNumber }) {
  const { setUserResponse, userResponse } = useContext(GlobalContext)

  const onChangeHandler = (id, value) => {
    setUserResponse((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }
  return (
    <div className="bg-slate-100 rounded-2xl p-6 shadow-xl ">
      <div className="flex items-center">
        <p className="text-2xl font-bold text-gray-300">Q{question.id}</p>
      </div>
      <div>
        <p className="text-orange-400 font-bold text-lg mb-4 ">
          {question.question}
        </p>
      </div>
      {question.options ? (
        <Options
          options={question.options}
          questionId={question.id}
          onChangeHandler={onChangeHandler}
          response={userResponse[question.id]}
        />
      ) : (
        <TextArea />
      )}
    </div>
  )
}

export default QuestionCard
