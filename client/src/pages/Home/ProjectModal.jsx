import React, { useState } from 'react';
import { createProject } from '../../functions/functions';
import { useNavigate } from 'react-router-dom';

const ProjectModal = props => {
    const { closeModal } = props;
    const navigate = useNavigate();
    //states
    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    //functions
    const handleChange = e => {
        setName(e.target.value);
        setError(false);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if(name.length === 0 ) setError(true)
        
        const res = await createProject({name});
        if(res.status === 201){
            alert("New project created successfully.");
            window.location.reload();
        }
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