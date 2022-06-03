import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from '../images/logo/logo2.png';
import cartimg from '../images/logo/Path 1.png';

const Header = () => {
    
    return (
        <div className='d-flex justify-content-between align-items-center p-2 sticky-top bg-white'>
            <div >
                
                <img  className='ps-4' width={150} src={logo} alt="" />
            </div>
            <div className='navbar pe-4'>
                <img className='pe-3' src={cartimg} alt="" />
                <Link className='pe-3 text-decoration-none'  to='/login'>Login</Link>
                <button className='bg-danger'><Link className='text-decoration-none text-white ' to='/singup'>Singup</Link></button>
            </div>
        </div>
    );
};

export default Header;