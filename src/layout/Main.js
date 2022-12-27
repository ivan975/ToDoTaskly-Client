import React from 'react';
import { Outlet } from 'react-router-dom';
// import DarkMode from '../shared/DarkMode/DarkMode';
import Navbar from '../shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/* <DarkMode /> */}
        </div>
    );
};

export default Main;