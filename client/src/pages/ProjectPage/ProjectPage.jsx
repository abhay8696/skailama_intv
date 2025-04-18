import React, { useEffect, useState } from 'react';
import "./ProjectPage.css"; 
import Sidebar from './Sidebar';
import ProjectNavbar from './ProjectNavbar';
import Podcast from './Podcast';
import Transcript from './Transcript';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../../functions/functions';

const ProjectPage = () => {
    const navigate = useNavigate();
    const { id:projectId } = useParams();

    const [projectData, setProjectData] = useState({});
    const [fileArray, setFileArray] = useState([]);
    
    useEffect(()=> {
        const userData = localStorage.getItem("userData");
        if(!userData){
            navigate("/");
        }
        getAllFiles();
    }, [])

    //functions
    const getAllFiles = async () => {
        // console.log(projectId)
        let project = await getProjectById(projectId);
        setProjectData(project);
        setFileArray(project.podcasts);
    } 


    return (
        <div className='ProjectPage'>
            <Sidebar />
            <div className='ProjectPage-body'>
                <ProjectNavbar projectName={projectData.name}/>
                <Podcast fileArray={fileArray} projectId={projectId}/>
                {/* <Transcript /> */}
            </div>
        </div>
    );
};

export default ProjectPage;