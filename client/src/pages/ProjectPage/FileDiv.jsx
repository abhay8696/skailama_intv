import React, { useState } from 'react';
import cloudImage from "../../assets/cloudImage.png"
import UploadModal from './UploadModal';
import uploadImage from "../../assets/uploadImage.png"; 
import "./FileDiv.css"
import { deletePodcast, formatDate, getPodcastById } from '../../functions/functions';



const FileDiv = ({fileArray, handleTranscript}) => {

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

    const YourFiles = ({fileArray}) => {
        console.log(fileArray)
        const displayFiles = () => {
            let count = 1;
            return fileArray.map(item => {
                const { name, transcript, createdAt, updatedAt, projectId, _id} = item;
                return(
                    <tr>
                        <td>{count++}</td>
                        <td>{name}</td>
                        <td>{formatDate(createdAt)}</td>
                        <td className='tbaleButtons'>
                            <button className='viewButton' onClick={() => viewPodCast(_id)}>View</button>
                            <button className='deleteButton' onClick={()=> deleteFile(_id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        } 
        return(
            <div className='YourFiles'>
                <span className='YourFiles-head'>Your Files</span>
                <table>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Upload Date</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayFiles()}
                    </tbody>
                </table>
            </div>
        )
    }

    const viewPodCast = async id => {
        let data = await getPodcastById(id);
        handleTranscript(data);
    } 

    const deleteFile = async id => {
        let res = await deletePodcast(id);
        alert(res);
        window.location.reload();
    }


    return (
        
        <div className='fileDiv'>
            {fileArray?.length ? <YourFiles fileArray={fileArray}/> : selectFile()}
        </div>
    );
};

export default FileDiv;