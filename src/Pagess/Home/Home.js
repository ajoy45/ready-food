import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomeLink from '../../CustomeLink/CustomeLink';
import ChoiseUs from '../ChoiseUs/ChoiseUs';
import Banner from './Banner/Banner';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=' p-4 d-flex justify-content-center custome-link'>
                <CustomeLink  to='breakfast'> Breakfast</CustomeLink>
                <CustomeLink  to='lunch'> Lunch</CustomeLink>
                <CustomeLink  to='dinner'> Dinner</CustomeLink>
                
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className='text-center '>
                <button className='btn btn-primary w-25 mb-5 p-3 mt-5 fs-4'>check Out</button>
            </div>
            <ChoiseUs></ChoiseUs>


        </div>
    );
};

export default Home;