import React, { useState } from 'react';
import "./ProjectsGrid.css";
import addIcon from "../../assets/addIcon.png"
import ProjectModal from './ProjectModal';
import { formatDate, generateShortCode } from '../../functions/functions';

const ProjectsGrid = ({projectsArray}) => {

    //states
    const [modalOn, setModalOn] = useState(false);

    //functions
    const handleModal = () => setModalOn(!modalOn);
    const projectTile = (name, fileCount, lastUpdated) => {
        return(
            <div className='projectTile'>
                <span className='tileIcon'>{generateShortCode(name)}</span>
                <span className='tileTexts'>
                    <span className='tileName'>{name}</span>
                    <span className='tile-fileCount'>{fileCount} files</span>
                    <span className='tile-timeStamp'>Last edited: {formatDate(lastUpdated)}</span>
                </span>
            </div>
        )
    }
    const displayTiles = () => {
        if(projectsArray?.length){
            return projectsArray.map(tile => {
                const {name, lastUpdated, fileCount} = tile;
                return projectTile(name, fileCount, lastUpdated)
            })
        }
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
                    { displayTiles()}
                </div>
                {modalOn ? <ProjectModal closeModal={handleModal} /> : null}
            </div>
        </div>
    );
};

export default ProjectsGrid;