import React, { useState } from 'react';
import "./Home.css"
import meeting from "../../assets/meeting.png";
import addIcon from "../../assets/addIcon.png"

const Create = () => {

    //states
    const [modalOn, setModalOn] = useState(true);
    const [projectName, setProjectName] = useState("");
    const [error, setError] = useState(false);

    //functions
    const handleClick = () => setModalOn(!modalOn);
    const handleChange = e => {
        setProjectName(e.target.value);
        setError(false);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(projectName.length === 0 ) setError(true)
    }

    const displayModal = () => {
        return (
            <div className='projectModal-wrapper'>
                <form className='projectModal' onSubmit={handleSubmit}>
                    <span className='projectModal-head'>Create Project</span>
                    <span className='projectModal-subtext'>Enter Project Name</span>
                    <input placeholder='Type here' onChange={handleChange}/>
                    {error ? <span className='createProjectError'>Project name cannot be empty</span> : null}
                    <span className='projectModal-bottom'>
                        <span className='projectModal-cancel' onClick={handleClick}>Cancel</span>
                        <button className='projectModal-buton'>Create</button>
                    </span>
                </form>
            </div>
        )
    }
    return (
        <div className='createPage'>
            <div className='createPage-wrapper'>
                <h1 className='createPage-head'>Create a New Project</h1>
                <img src={meeting} className='createPage-image'/>
                <p className='createPage-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                <button className='createPage-button' onClick={handleClick}>
                    <img src={addIcon} className='createPageButtonIcon'/>
                    Create New Project
                </button>
                {modalOn ? displayModal() : null}
            </div>
        </div>
    );
};

export default Create;