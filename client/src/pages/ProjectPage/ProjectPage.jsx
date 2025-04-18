import React from 'react';
import "./ProjectPage.css"; 
import Sidebar from './Sidebar';
import ProjectNavbar from './ProjectNavbar';
import Podcast from './Podcast';

const ProjectPage = () => {
    return (
        <div className='ProjectPage'>
            <Sidebar />
            <div className='ProjectPage-body'>
                <ProjectNavbar />
                <Podcast />
            </div>
        </div>
    );
};

export default ProjectPage;