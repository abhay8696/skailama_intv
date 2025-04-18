import React, { useState } from 'react';

const ProjectModal = props => {
    const { closeModal } = props;
    //states
    const [projectName, setProjectName] = useState("");
    const [error, setError] = useState(false);

    //functions
    const handleChange = e => {
        setProjectName(e.target.value);
        setError(false);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(projectName.length === 0 ) setError(true)
    }
    return (
        <div className='projectModal-wrapper'>
            <form className='projectModal' onSubmit={handleSubmit}>
                <span className='projectModal-head'>Create Project</span>
                <span className='projectModal-subtext'>Enter Project Name</span>
                <input placeholder='Type here' onChange={handleChange}/>
                {error ? <span className='createProjectError'>Project name cannot be empty</span> : null}
                <span className='projectModal-bottom'>
                    <span className='projectModal-cancel' onClick={closeModal}>Cancel</span>
                    <button className='projectModal-buton'>Create</button>
                </span>
            </form>
        </div>
    )
};

export default ProjectModal;