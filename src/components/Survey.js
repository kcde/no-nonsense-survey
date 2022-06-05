import React, { useContext, useState, useEffect } from 'react'
import { addUser, addUserResponse } from '../firebase/database'
import GlobalContext from '../context'
import { logout } from '../firebase/auth'
import QuestionCard from './QuestionCard'
import Button from './Button'
import SurveyTracker from './SurveyTracker'
import CTA from './CTA'

function Survey() {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)

  const {
    credentials,
    setLoggedIn,
    questions,
    questionNumber,
    setQuestionNumber,
    userResponse,
    setUserResponse,
    setFormSubmitted,
    userLikesShawarma,
    setUserLikesShawarma,
  } = useContext(GlobalContext)

  useEffect(() => {
    return () => {
      setUserLikesShawarma(true)
      setQuestionNumber(1)
    }
  }, [])

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
      addUserResponse(credentials.uid, userResponse).then(() => {
        setUserResponse({})
        setQuestionNumber(1)
      })
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
      {userLikesShawarma ? (
        <div>
          {' '}
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
            <Button
              onClick={() => buttonHandler()}
              disabled={!isQuestionAnswered}
            >
              {questionNumber >= questions.length ? 'submit' : 'next'}
            </Button>
          </div>
        </div>
      ) : (
        <CTA />
      )}

      {/* <button
        onClick={() => {
          logout().then(() => {
            setLoggedIn(false)
          })
        }}
      >
        logout
      </button> */}
    </div>
  )
}

export default Survey
