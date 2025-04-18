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
        console.log("use effect")
        const userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData){
            navigate("/");
        }
        getAllProjectsFormDB();
    }, []);


    const getAllProjectsFormDB = async () => {
        try{
            let res = await getAllProjects();
            setProjectsArray([...res.projects])
        }catch(error){
            let msg = error?.response?.data?.message || "Something went wrong!";
            // alert(msg);
        }
    }

    return (
        <div className='Home'>
            <Navbar />
            {
                projectsArray?.length ? <ProjectsGrid projectsArray={projectsArray}/> : <Create />
            }
        </div>
    );
};

export default Home;