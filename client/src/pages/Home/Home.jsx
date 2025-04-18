import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./Home.css"
import Create from './Create';
import ProjectsGrid from './ProjectsGrid';
import { useNavigate } from 'react-router-dom';
import { getAllProjects } from "../../functions/functions.js"

const Home = () => {
    const navigate = useNavigate();
    const [projectsArray, setProjectsArray] = useState([]);

    useEffect(()=> {
        const userData = localStorage.getItem("userData");
        if(!userData){
            navigate("/");
        }
        getAllProjectsFormDB();
    }, []);

    const getAllProjectsFormDB = async () => {
        try{
            let allProjects = await getAllProjects();
            setProjectsArray(allProjects)
        }catch(error){
            let msg = error?.response?.data?.message || "Something went wrong!";
            alert(msg);
        }
    }

    return (
        <div className='Home'>
            <Navbar />
            {
                projectsArray?.length ? <ProjectsGrid /> : <Create />
            }
        </div>
    );
};

export default Home;