import React from 'react'
import loginImg from "../../Assets/login.png";


const Header = ({name}) => {
    return (
        <div className="header">
            <div className="hello-name">
            <h1>Hello {name}</h1>
            </div>
            <img src={loginImg} alt="header"/>
        </div>
    )
}

export default Header
