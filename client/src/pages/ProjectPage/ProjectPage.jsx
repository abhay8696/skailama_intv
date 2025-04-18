import React, { useEffect } from 'react';
import "./ProjectPage.css"; 
import Sidebar from './Sidebar';
import ProjectNavbar from './ProjectNavbar';
import Podcast from './Podcast';
import Transcript from './Transcript';
import { useNavigate } from 'react-router-dom';

const ProjectPage = () => {
    const navigate = useNavigate();
    
    useEffect(()=> {
        const userData = localStorage.getItem("userData");
        if(!userData){
            navigate("/");
        }
    }, [])


    return (
        <div className='ProjectPage'>
            <Sidebar />
            <div className='ProjectPage-body'>
                <ProjectNavbar />
                <Podcast />
                {/* <Transcript /> */}
            </div>
        </div>
    );
};

export default ProjectPage;