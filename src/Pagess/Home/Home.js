import React from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import CustomeLink from '../../CustomeLink/CustomeLink';
import Footer from '../../Shared/Footer';
import ChoiseUs from '../ChoiseUs/ChoiseUs';
import Banner from './Banner/Banner';
import './Home.css'
const Home = () => {
    const navigate=useNavigate()
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
                <button onClick={()=>navigate("/checkout")} className='btn btn-primary w-25 mb-5 p-3 mt-5 fs-4'>check Out</button>
            </div>
            <ChoiseUs></ChoiseUs>
            <Footer></Footer>


        </div>
    );
};

export default Home;