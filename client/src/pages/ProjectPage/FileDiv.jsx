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

    const YourFiles = () => {
        return(
            <div className='YourFiles'>
                <span className='YourFiles-head'>Your Files</span>
                <table>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Upload Date & Time</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>THE SIDEPOD S2 EPISODE 15</td>
                            <td>25 Oct 23 | 09:04</td>
                            <td className='tbaleButtons'>
                                <button className='viewButton'>View</button>
                                <button className='deleteButton'>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>THE SIDEPOD S2 EPISODE 15</td>
                            <td>25 Oct 23 | 09:04</td>
                            <td className='tbaleButtons'>
                                <button className='viewButton'>View</button>
                                <button className='deleteButton'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className='fileDiv'>
            {/* {selectFile()} */}
            <YourFiles />
        </div>
    );
};

export default FileDiv;