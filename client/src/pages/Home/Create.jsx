import React from 'react';
import "./Home.css"
import meeting from "../../assets/meeting.png";
import addIcon from "../../assets/addIcon.png"

const Create = () => {
    return (
        <div className='createPage'>
            <div className='createPage-wrapper'>
                <h1 className='createPage-head'>Create a New Project</h1>
                <img src={meeting} className='createPage-image'/>
                <p className='createPage-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                <button className='createPage-button'>
                    <img src={addIcon} className='createPageButtonIcon'/>
                    Create New Project
                </button>
            </div>
        </div>
    );
};

export default Create;