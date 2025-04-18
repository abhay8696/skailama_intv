import React, { useState } from 'react';
import closeImage from "../../assets/closeImage.png";
import "./UploadModal.css"

const UploadModal = (props) => {
    const { closeModal, source, image } = props;
    //states
    const [formData, setFormData] = useState({
        fileName: "",
        transcriptText: ""
    });

    //functions
    const handleChange = e => {
        const {value, name} = e.target;

        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
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
                        <input id='name' name="fileName" value={formData.fileName} onChange={handleChange} required/>
                    </div>
                    <div className='UploadModalForm-lableInput'>
                        <label htmlFor='transcript'>Transcript</label>
                        <input id='transcript' name="transcriptText" value={formData.ranscriptText} onChange={handleChange} required/>
                    </div>
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadModal;