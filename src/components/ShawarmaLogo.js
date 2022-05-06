import React from 'react'
import Row from 'react-bootstrap/Row'
import shawarmaImg from '../assets/shawarma.png'

function ShawarmaLogo() {
    return (
        <Row className=" flex justify-center animate-bounce">
            <img src={shawarmaImg} alt="shawarma" className="w-24" />
        </Row>
    )
}

export default ShawarmaLogo
