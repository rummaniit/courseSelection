import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='nav' >
            <NavLink to='/home' className='navlink'>Home</NavLink>
            <NavLink to='/about' className='navlink'>About</NavLink>
            <NavLink to='/services' className='navlink'>Services</NavLink>
        </div>
    );
};

export default Navigation;