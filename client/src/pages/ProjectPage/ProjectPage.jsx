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
    const [transcirptData, setTranscirptData] = useState(null);
    
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
    const handleTranscript = data => setTranscirptData(data);
    const closeTranscript = data => setTranscirptData(null);

    return (
        <div className='ProjectPage'>
            <Sidebar />
            <div className='ProjectPage-body'>
                <ProjectNavbar projectName={projectData.name}/>
                {/* <Transcript /> */}
                {
                    transcirptData ?
                    <Transcript transcirptData={transcirptData} closeTranscript={closeTranscript}/>
                    :
                    <Podcast fileArray={fileArray} projectId={projectId} handleTranscript={handleTranscript}/>
                }
            </div>
        </div>
    );
};

export default ProjectPage;