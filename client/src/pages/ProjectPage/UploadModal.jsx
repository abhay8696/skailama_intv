import React, { useState } from 'react';
import closeImage from "../../assets/closeImage.png";
import "./UploadModal.css"
import { useParams } from 'react-router-dom';
import { createNewPodcast } from '../../functions/functions';

const UploadModal = (props) => {
    const { closeModal, source, image, projectId } = props;
    const { id } = useParams();
    //states
    const [formData, setFormData] = useState({
        name: "",
        transcript: ""
    });

    //functions
    const handleChange = e => {
        const {value, name} = e.target;

        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = async e => {
        e.preventDefault();
        let response = await createNewPodcast({
            projectId, ...formData
        });
        alert(response.data.message)
        window.location.reload();
    }

    return (
        <div className='UploadModal-wrapper'>
            <div className='UploadModal'>
                <span className='UploadModalHead'>
                    <div className='UploadModalHead-text'>
                        <img src={image} />
                        <span className='UploadModalHead-text'>
                            Upload from {source}
                        </span>
                    </div>
                    <img src={closeImage} className='closeUploadModalIcon' onClick={closeModal}/>
                </span>
                <form className='UploadModalForm' onSubmit={handleSubmit}>
                    <div className='UploadModalForm-lableInput'>
                        <label htmlFor='name'>Name</label>
                        <input id='name' name="name" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className='UploadModalForm-lableInput'>
                        <label htmlFor='transcript'>Transcript</label>
                        <input id='transcript' name="transcript" value={formData.ranscriptText} onChange={handleChange} required/>
                    </div>
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadModal;