import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <header className="p-2 bg-teal-400 text-black">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img className='w-11 mr-2' src={logo} alt="" />
                        <p className='text-xl font-bold'>ToDoTaskly</p>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <Link to="/addTask" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Add Task</Link>
                        </li>
                        <li className="flex">
                            <Link to="/myTask" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">My Task</Link>
                        </li>
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Completed Task</Link>
                        </li>
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Sign Up</Link>
                        </li>
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Sign In</Link>
                        </li>
                        <li className="flex">
                            <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Log Out</Link>
                        </li>
                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;