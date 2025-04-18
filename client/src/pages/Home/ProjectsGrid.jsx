import React from 'react';
import "./ProjectsGrid.css";
import addIcon from "../../assets/addIcon.png"

const ProjectsGrid = () => {
    return (
        <div className='Projects-Grid'>
            <div className='Projects-Grid-head'>
                <span>Projects</span>
                <button className='createPage-button' onClick={handleClick}>
                    <img src={addIcon} className='createPageButtonIcon'/>
                    Create New Project
                </button>
            </div>
        </div>
    );
};

export default ProjectsGrid;