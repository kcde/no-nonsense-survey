import React, { useContext, useState } from 'react'
import { addUser } from '../firebase/database'
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
    userResponse,
    setFormSubmitted,
  } = useContext(GlobalContext)

  const resetDisabled = () => {
    setIsQuestionAnswered(false)
  }

  const nextHandler = () => {
    setQuestionNumber((prevState) => prevState + 1)
    resetDisabled()
  }

  const submitHandler = () => {
    addUser(credentials).then(() => {
      setFormSubmitted(true)
      console.log(userResponse)
    })
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
              setIsQuestionAnswered={setIsQuestionAnswered}
            />
          )
      )}

      <div className="mt-4">
        <Button onClick={() => buttonHandler()} disabled={!isQuestionAnswered}>
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
