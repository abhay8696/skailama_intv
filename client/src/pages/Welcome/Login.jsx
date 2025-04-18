import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = ({switchToRegister}) => {
    const navigate = useNavigate();
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
    const handleSubmit = async e => {
        e.preventDefault();
        
        try{ 
            let res = await axios.post("https://server-skailama-intv.vercel.app/api/auth/login", formData);
            console.log(res)
            // alert("Login successfull!");
            localStorage.setItem("userData", JSON.stringify(res.data));
            navigate("/home")
        }catch(error){
            let msg = error?.response?.data?.message || "Something went wrong!";
            alert(msg)
        }
    }

    return (
        <>
        <form className='auth-form' onSubmit={handleSubmit}>
            <input onChange={handleChange} name="email" placeholder='Email Address' type='email' required/>
            <input onChange={handleChange} name="password" placeholder='Password' type='password' required/>
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