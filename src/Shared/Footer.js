import React from 'react';
import image from '../images/logo/logo2.png'
const Footer = () => {
    return (
        <div className='bg-dark d-flex align-items-center justify-content-around p-4'>
            <div>
                <img width={100} src={image} alt="" />
            </div>
            <div>
                <p className='text-white'>© 2022 Ajoy Academy of Family Physicians | Privacy Policy | Copyright & Permissions</p>
            </div>
            <div>
                <li className='text-white list-unstyled'>Path to improved health</li>
                <li className='text-white list-unstyled'>Doughnuts, pastries, and scones</li>
                <li className='text-white list-unstyled'>White pasta</li>
                <li className='text-white list-unstyled'>Whole-wheat pasta</li>
            </div>
        </div>
    );
};

export default Footer;