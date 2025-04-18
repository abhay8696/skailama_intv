import React from 'react';
import "./Sidebar.css";
import textLogo from "../../assets/textLogo-purple.png"
import plusIcon from "../../assets/plusIcon.png";
import penIcon from "../../assets/penIcon.png";
import widgetIcon from "../../assets/widgetIcon.png";
import settingsIcon from "../../assets/settings-Icon.png"
import userImage from "../../assets/userImage.png";
import daimondIcon from "../../assets/daimondIcon.svg"
import closeArrowIcon from "../../assets/closeArrowIcon.svg"

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <img src={textLogo} className='sidebarLogo' />
            <div className='sidebar-body'>
                <div className='sidebarOption sidebarOption-selected'>
                    <img src={plusIcon} className='sidebarIcon' />
                    <span className='sidebar-text'>Add your Podcast</span>
                </div>
                <div className='sidebarOption'>
                    <img src={penIcon} className='sidebarIcon' />
                    <span className='sidebar-text'>Create & Repurpose</span>
                </div>
                <div className='sidebarOption'>
                    <img src={widgetIcon} className='sidebarIcon' />
                    <span className='sidebar-text'>Podcast Widget</span>
                </div>
                <div className='sidebarOption'>
                    <img src={daimondIcon} className='sidebarIcon' />
                    <span className='sidebar-text'>Upgrade</span>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <div className='sidebar-bottom-div'>
                    <img src={settingsIcon} className='sidebarIcon'/>
                    <span>Help</span>
                </div>
                <div className='breakDiv'></div>
                <div className='userDiv'>
                    <img src={userImage} className='userImage'/>
                    <span className='userDiv-texts'>
                        <span className='userName'>Username</span>
                        <span className='userEmail'>useremal@gmail.com</span>
                    </span>
                </div>
            </div>
            <img src={closeArrowIcon} className='closeSidebar-button'/>
        </div>
    );
};

export default Sidebar;