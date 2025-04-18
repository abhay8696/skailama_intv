import React from 'react';
import Navbar from './Navbar';
import "./Home.css"
import Create from './Create';

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <Create />
        </div>
    );
};

export default Home;