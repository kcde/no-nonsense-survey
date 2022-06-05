import React, { useState, useEffect } from 'react'
import GlobalContext from './'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/auth'
import surveyQuestions from '../questions'

function GlobalState({ children }) {
  const login = JSON.parse(localStorage.getItem('survey-login'))
  const [userLikesShawarma, setUserLikesShawarma] = useState(true)
  const [isLoggedIn, setLoggedIn] = useState(login || false)
  const [credentials, setCredentials] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userResponse, setUserResponse] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  })

  function reset() {
    setQuestionNumber(1)
    setCredentials(null)
    setUserResponse({})
  }
  const userLikesShawarmaResponse = userResponse['1']
  useEffect(() => {
    if (userLikesShawarmaResponse === 'no' && questionNumber > 1) {
      setUserLikesShawarma(false)
      return
    }
  }, [userLikesShawarmaResponse, questionNumber])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        setCredentials(user)
        localStorage.setItem('survey-login', true)
      } else {
        setLoggedIn(false)
        setCredentials(null)
        localStorage.setItem('survey-login', false)
      }
    })

    return unsubscribe()
  }, [isLoggedIn, credentials])

  //add provider
  return (
    <GlobalContext.Provider
      value={{
        testing: 'ee ddey work',
        isLoggedIn,
        setLoggedIn,
        credentials,
        setCredentials,
        questions: surveyQuestions,
        questionNumber,
        setQuestionNumber,
        formSubmitted,
        setFormSubmitted,
        userResponse,
        setUserResponse,
        userLikesShawarma,
        setUserLikesShawarma,
        reset,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
