import React, { useState } from 'react';
import axios from 'axios';

const Register = ({switchToLogin}) => {
    const [formData, setFormData] = useState({
        name: "",
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
    const handleSubmit = async e => {
        e.preventDefault();
        
        try{
            let res = await axios.post("https://server-skailama-intv.vercel.app/api/auth/register", formData);
            console.log(res)
        }catch(error){
            console.log(error.message)
        }
    }
    return (
        <>
        <form className='auth-form' onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" placeholder='Name' type='text' required/>
            <input onChange={handleChange} name="email" placeholder='Email Address' type='email' required/>
            <input onChange={handleChange} name="password" placeholder='Password' type='password' required/>
            <button type='submit'>Register</button>
        </form>
        <div className='auth-createAccount'>
            <span>Already have an account?</span>
            <span onClick={switchToLogin}>Login</span>
        </div>
        </>
    );
};

export default Register;