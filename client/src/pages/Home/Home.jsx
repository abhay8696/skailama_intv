import React, { useEffect } from 'react';
import Navbar from './Navbar';
import "./Home.css"
import Create from './Create';
import ProjectsGrid from './ProjectsGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        const userData = localStorage.getItem("userData");
        if(!userData){
            navigate("/");
        }
    }, [])
    return (
        <div className='Home'>
            <Navbar />
            <Create />
            {/* <ProjectsGrid /> */}
        </div>
    );
};

export default Home;