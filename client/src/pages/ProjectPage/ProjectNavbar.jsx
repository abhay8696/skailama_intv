import React from 'react';
import "./ProjectNavbar.css";
import homeIcon from "../../assets/homeIcon.svg";
import bellIcon2 from "../../assets/bellIcon2.svg";
import logoutIcon from "../../assets/logoutIcon.svg";

const ProjectNavbar = ({projectName}) => {
    return (
        <div className='ProjectNavbar'>
            <div className='ProjectNavbar-texts'>
                <span className='ProjectNavbar-texts-homeTab'>
                    <img src={homeIcon} />
                    <span>Home Page</span>
                </span>
                <span>/</span>
                <span>{projectName}</span>         
                <span>/</span>
                <span id='addYourPodcast'>Add your podcast</span>
            </div>
            <div className='ProjectNavbar-icons'>
                <span>
                    <img src={bellIcon2} />
                </span>
                <span>
                    <img src={logoutIcon} />
                </span>
            </div>
        </div>
    );
};

export default ProjectNavbar;