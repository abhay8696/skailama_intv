import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = ({switchToLogin}) => {
    const navigate = useNavigate();
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
            if(res.status === 201){
                alert("Registeration and Login successfull!");
                localStorage.setItem("userData", JSON.stringify(res.data));
                navigate("/home");
            }
        }catch(error){
            let msg = error?.response?.data?.message || "Something went wrong!";
            alert(msg)
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