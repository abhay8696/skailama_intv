import React, { useState } from 'react';
import "./Welcome.css";
import logo from "../../assets/mainLogo-white.svg"
import logo2 from "../../assets/logo-purple.svg"
import Login from './Login';
import Register from './Register';

const Welcome = () => {
    const [loginPage, setLoginPage] = useState(true);

    //fuction
    const handleLoginPage = () => setLoginPage(!loginPage)
    return (
        <div className='Welcome'>
            <div className='Welcome-body'>
                <div className='hero'>
                    <img src={logo} className='hero-image'/>
                    <span className='hero-tagline'> Your podcast will no longer be just a hobby.</span>
                    <span className='hero-subtitle'>Supercharge Your Distribution using our AI assistant!</span>
                </div>
                <div className='auth'>
                    <div className='auth-top'>
                        <img className='auth-logo' src={logo2} />
                        <span className='auth-logoName'>
                            <span>Welcome to </span>
                            <span>Ques.AI</span>
                        </span>
                    </div>
                    {
                        loginPage ? <Login switchToRegister={handleLoginPage}/> : <Register switchToLogin={handleLoginPage}/> 
                    }
                </div>
            </div>
        </div>
    );
};
    

export default Welcome;