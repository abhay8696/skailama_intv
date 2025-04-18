import React, { useState } from 'react';
import cloudImage from "../../assets/cloudImage.png"
import UploadModal from './UploadModal';
import uploadImage from "../../assets/uploadImage.png"; 
import "./FileDiv.css"



const FileDiv = () => {

    const [modalOn, setModalOn] = useState(false);

    //functions
    const handleModal = () => setModalOn(!modalOn);

    const selectFile = () => {
        return (
            <div className='SelectFile'>
                <img src={cloudImage} />
                <p>Select a file or drag and drop here {"("}Podcast Media or Transcription Text{")"}</p>
                <span>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </span>
                <button onClick={handleModal}> onclSelect File</button>
                {modalOn ? <UploadModal closeModal={handleModal}  source={"local file"} image={uploadImage}/> : null}
            </div>
        )
    }
    return (
        <div className='fileDiv'>
            {selectFile()}
        </div>
    );
};

export default FileDiv;