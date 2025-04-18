import React, { useEffect, useState } from 'react';
import "./Podcast.css";
import rssImage from "../../assets/rssImage.png"; 
import youtubeImage from "../../assets/youtubeImage.png"; 
import uploadImage from "../../assets/uploadImage.png"; 
import FileDiv from './FileDiv';
import UploadModal from './UploadModal';


const PodcastType = ({head, image, projectId}) => {

    const [uploadModalOn, setUploadModalOn] = useState(false);

    //functions
    const handleUploadModal = () => {
        setUploadModalOn(!uploadModalOn);
    }

    return (
        <>
        <div className='PodcastType' onClick={handleUploadModal}>
            <div className='podcastType-text'>
                <span className='podcastType-head'>{head}</span>
                <span className='podcastType-p'>Lorem ipsum dolor sit. 
                Dolor lorem sit.</span>
            </div>
            <img src={image} />
        </div>
        {uploadModalOn ? <UploadModal projectId={projectId} closeModal={handleUploadModal} source={head} image={image}/> : null}
        </>
    )
}



const Podcast = ({fileArray, projectId, handleTranscript}) => {
    return (
        <div className='Podcast'>
            <h1>Add Podcast</h1>
            <div className='podcast-tiles'>
                <PodcastType projectId={projectId} head="RSS Feed" image={rssImage}/>
                <PodcastType projectId={projectId} head="Youtube Video" image={youtubeImage}/>
                <PodcastType projectId={projectId} head="Upload Files" image={uploadImage}/>
            </div>
            <FileDiv handleTranscript={handleTranscript} fileArray={fileArray}/>
        </div>
    );
};

export default Podcast;