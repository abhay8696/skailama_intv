import React from 'react';
import Navbar from './Navbar';
import "./Home.css"
import Create from './Create';
import ProjectsGrid from './ProjectsGrid';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            {/* <Create /> */}
            <ProjectsGrid />
        </div>
    );
};

export default Home;