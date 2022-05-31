import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='text-center banner-container'>
            <h1>Best Food waiting for your belly</h1>
            <div className='form-container'>
                <input className='p-2 border-0 w-25' type="text" name="" id="" placeholder='search food' />
                <button className="p-2 px-3" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Banner;