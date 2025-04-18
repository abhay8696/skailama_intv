import React, { useState } from 'react';
import "./ProjectsGrid.css";
import addIcon from "../../assets/addIcon.png"
import ProjectModal from './ProjectModal';

const ProjectsGrid = () => {

    //states
    const [modalOn, setModalOn] = useState(false);

    //functions
    const handleModal = () => setModalOn(!modalOn);
    const projectTile = () => {
        return(
            <div className='projectTile'>
                <span className='tileIcon'>SP</span>
                <span className='tileTexts'>
                    <span className='tileName'>sample project</span>
                    <span className='tile-fileCount'>4 files</span>
                    <span className='tile-timeStamp'>Last edited: a week ago</span>
                </span>
            </div>
        )
    }
    return (
        <div className='Projects-Grid'>
            <div className='Projects-Grid-wrapper'>
                <div className='Projects-Grid-head'>
                    <span>Projects</span>
                    <button className='createPage-button' onClick={handleModal}>
                        <img src={addIcon} className='createPageButtonIcon'/>
                        Create New Project
                    </button>
                </div>
                <div className='tilesGrid'>
                    {projectTile()}
                </div>
                {modalOn ? <ProjectModal closeModal={handleModal} /> : null}
            </div>
        </div>
    );
};

export default ProjectsGrid;