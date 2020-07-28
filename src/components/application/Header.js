import React from 'react'
import loginImg from "../../Assets/login.png";


const Header = ({name}) => {
    return (
        <div className="header">
            {name}
            <img src={loginImg} alt="header"/>
        </div>
    )
}

export default Header
