import React from 'react';
import "./Welcome.css";
import logo from "../../assets/mainLogo-white.svg"
import logo2 from "../../assets/logo-purple.svg"

const Welcome = () => {
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
                    <form className='auth-form'>
                        <input placeholder='Email Address' type='email' />
                        <input placeholder='Password' type='password' />
                        <div className='auth-forgot-remember'>
                            <span>
                                <input type='checkbox' htmlFor="rememberme" />
                                <label>Remember me</label>
                            </span>
                            <span className='forgot-passowrd'>
                                Forgot Password?
                            </span>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                    <div className='auth-createAccount'>
                        <span>Don't have an account?</span>
                        <span>Create Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
    

export default Welcome;