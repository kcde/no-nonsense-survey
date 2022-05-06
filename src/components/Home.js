import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import ShawarmaLogo from './ShawarmaLogo'
import { GoogleLoginButton } from 'react-social-login-buttons'

function Home() {
    return (
        <Row className="max-w-md mx-auto">
            <ShawarmaLogo />
            <Row className="text-center mb-4 mt-2">
                <p className="leading-relaxed">
                    Hi, this is a simple, straight forward, no bullshit survey
                    form for a fun side project for those that are in love with{' '}
                    <span className="underline underline-offset-4 decoration-red-400 ">
                        shawarma
                    </span>
                    . Please{' '}
                    <span className="decoration-red-400 underline underline-offset-4">
                        authenticate
                    </span>{' '}
                    with your google account to ge started
                </p>
            </Row>
            <Row className="w-60 mx-auto  ">
                <GoogleLoginButton style={{ fontSize: '16px' }} />
            </Row>
        </Row>
    )
}

export default Home
