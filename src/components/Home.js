import React, { useContext } from 'react'
import GlobalContext from '../context'
import ShawarmaLogo from '../components/ShawarmaLogo'
import Row from 'react-bootstrap/Row'
import { useNavigate, useLocation } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { signIn } from '../firebase/auth'

function Home() {
  const { setLoggedIn } = useContext(GlobalContext)
  let navigate = useNavigate()
  let location = useLocation()
  const from = location.state ? location.state.from.pathname : '/survey'

  /* .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //const credential = GoogleAuthProvider.credentialFromResult(result)
            //const token = credential.accessToken
            // The signed-in user info.
            //const user = result.user
            // ...
            //console.log(user.displayName) // send user's name to global state $$contextAPi
          })
          .catch((error) => {
              // Handle Errors here.
              // const errorCode = error.code
              //const errorMessage = error.message
              console.log(error)
  
              // The email of the user's account used.
              //const email = error.email
  
              // ...
          })
          */

  function singInAndNavigate() {
    signIn()
      .then((result) => {
        setLoggedIn(true)
        navigate(from)
      })
      .catch((err) => {
        console.log('couldnt sign in')

        setLoggedIn(false)
      })
  }

  return (
    <Row className="">
      <Row className="text-center mb-4 mt-2 ">
        <ShawarmaLogo />

        <p className="leading-relaxed">
          Hi, this is a simple, straight forward, survey form for a fun side
          project for those that love{' '}
          <span className="underline underline-offset-4 decoration-red-400 ">
            shawarma
          </span>
          . Please{' '}
          <span className="decoration-red-400 underline underline-offset-4">
            authenticate
          </span>{' '}
          with your google account to ge started.
        </p>

        <p className="text-[8px] text-red-600 rotate-90 absolute right-0  translate-y-1/2 origin-top-right">
          Kindly disregard is shawarma is not tyour thing
        </p>
      </Row>
      <Row className="w-60 mx-auto  ">
        <GoogleLoginButton
          style={{ fontSize: '13px' }}
          onClick={singInAndNavigate}
        />
      </Row>
    </Row>
  )
}

export default Home
