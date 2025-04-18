import React from 'react';
import textLogo from "../../assets/textLogo-purple.png";
import settingsIcon from "../../assets/settings-Icon.png";
import bellIcon from "../../assets/bell-icon.png";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img src={textLogo} className='nav-logo'/>
            <div className='nav-buttons'>
                <img src={settingsIcon} className='nav-button-img'/>
                <img src={bellIcon} className='nav-button-img'/>
            </div>
        </nav>
    );
};

export default Navbar;