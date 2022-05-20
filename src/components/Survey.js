import React, { useContext, useEffect, useState } from 'react'
import { addUser, getUser } from '../firebase/database'
import GlobalContext from '../context'
import { logout } from '../firebase/auth'
import QuestionCard from './QuestionCard'
import Button from './Button'
import SurveyTracker from './SurveyTracker'

function Survey() {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

  const {
    setLoggedIn,
    questions,
    questionNumber,
    setQuestionNumber,
    formSubmitted,
    userResponse,
    setFormSubmitted,
  } = useContext(GlobalContext)

  const resetDisabled = () => {
    setIsQuestionAnswered(true)
  }

  const nextHandler = () => {
    setQuestionNumber((prevState) => prevState + 1)
    resetDisabled()
  }

  const submitHandler = () => {
    setFormSubmitted(true)
    console.log(userResponse)
  }

  const buttonHandler = () => {
    if (questionNumber >= questions.length) {
      return submitHandler()
    }
    return nextHandler()
  }

  return (
    <div>
      <div className="mb-1">
        <SurveyTracker />
      </div>
      {questions.map(
        (question) =>
          question.id === questionNumber && (
            <QuestionCard
              value={userResponse[question.id]}
              key={question.id}
              question={question}
              show={questionNumber === question.id}
            />
          )
      )}

      <div className="mt-4">
        <Button onClick={() => buttonHandler()} disabled={false}>
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
