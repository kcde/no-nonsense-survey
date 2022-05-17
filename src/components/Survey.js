import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context'
import { logout } from '../firebase/auth'
import QuestionCard from './QuestionCard'
import Button from './Button'
import SurveyTracker from './SurveyTracker'

function Survey() {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
  const {
    credentials,
    setLoggedIn,
    questions,
    questionNumber,
    setQuestionNumber,
  } = useContext(GlobalContext)

  const resetDisabled = () => {
    setIsQuestionAnswered(true)
  }
  const nextHandler = () => {
    setQuestionNumber((prevState) => prevState + 1)
    resetDisabled()
  }

  const submitHandler = () => {
    console.log('submit')
  }

  const buttonHandler = () => {
    if (questionNumber >= questions.length) {
      return submitHandler()
    }
    return nextHandler()
  }

  return (
    <div>
      <div className="   flex justify-end mb-4 p-1">
        <div>
          <img
            className="w-8 h-8 rounded-full"
            src={credentials && credentials.photoURL}
            alt={credentials && credentials.displayName}
          />
        </div>
      </div>
      <div className="mb-1">
        <SurveyTracker />
      </div>
      {questions.map(
        (question) =>
          question.id === questionNumber && (
            <QuestionCard
              key={question.id}
              question={question}
              show={questionNumber === question.id}
            />
          )
      )}
      <div className="mt-4">
        <Button onClick={() => buttonHandler()} disabled={isQuestionAnswered}>
          {questionNumber >= questions.length ? 'submit' : 'next'}
        </Button>
      </div>
      <button
        onClick={() => {
          logout().then(() => {
            setLoggedIn(false)
          })
        }}
      >
        logout
      </button>
    </div>
  )
}

export default Survey
