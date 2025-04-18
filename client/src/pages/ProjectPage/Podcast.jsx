import React, { useState } from 'react';
import "./Podcast.css";
import rssImage from "../../assets/rssImage.png"; 
import youtubeImage from "../../assets/youtubeImage.png"; 
import uploadImage from "../../assets/uploadImage.png"; 
import FileDiv from './FileDiv';
import UploadModal from './UploadModal';


const PodcastType = ({head, image}) => {

    const [modalOn, setModalOn] = useState(false);

    //functions
    const handleModal = () => setModalOn(!modalOn);

    return (
        <div className='PodcastType' onClick={handleModal}>
            <div className='podcastType-text'>
                <span className='podcastType-head'>{head}</span>
                <span className='podcastType-p'>Lorem ipsum dolor sit. 
                Dolor lorem sit.</span>
            </div>
            <img src={image} />
            {modalOn ? <UploadModal closeModal={handleModal} source={head} image={image}/> : null}
        </div>
    )
}



const Podcast = () => {
    return (
        <div className='Podcast'>
            <h1>Add Podcast</h1>
            <div className='podcast-tiles'>
                <PodcastType head="RSS Feed" image={rssImage}/>
                <PodcastType head="Youtube Video" image={youtubeImage}/>
                <PodcastType head="Upload Files" image={uploadImage}/>
            </div>
            <FileDiv />
        </div>
    );
};

export default Podcast;