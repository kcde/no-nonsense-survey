import React, { useEffect, useRef } from 'react'
import Row from 'react-bootstrap/Row'
import shawarmaImg from '../../assets/shawarma.png'

import styles from './logo.module.css'

function ShawarmaLogo() {
  let logoRef = useRef()

  function shake() {
    logoRef.current.classList.remove(styles.shakeLeftRight)

    void logoRef.current.offsetWidth

    logoRef.current.classList.add(styles.shakeLeftRight)
  }

  useEffect(() => {
    console.log(logoRef.current)

    logoRef.current.addEventListener('click', shake, false)
    /* return logoRef.current.removeEventListener('click', shake, false)*/
    //i dont know why this is causing th shake to stop repeating on click
  })
  return (
    <Row
      ref={logoRef}
      className={`flex justify-center lg:animate-bounce ${styles.shakeLeftRight}`}
    >
      <img src={shawarmaImg} alt="shawarma" className="w-24" />
    </Row>
  )
}

export default ShawarmaLogo
