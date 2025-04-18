import React, { useState } from 'react';

const Login = ({switchToRegister}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    //functions
    const handleChange = e => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        console.log(formData)
    }

    return (
        <>
        <form className='auth-form'>
            <input placeholder='Email Address' type='email' required/>
            <input placeholder='Password' type='password' required/>
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
            <span onClick={switchToRegister}>Create Account</span>
        </div>
        </>
    );
};

export default Login;