import React, { useState } from 'react';
import "./Singup.css"
import image from '../../../src/images/logo/logo2.png';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Singup() {
    const[agree,setAgree]=useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const succesfulResister=()=>{
       toast("Please verify your Email")
    }

    const handelResister = async (event) => {
        event.preventDefault();
        const name=event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log(email,password,confirmPassword)
        if (password === confirmPassword) {

            await createUserWithEmailAndPassword(email, password)
        }
        else {
            alert("password not match");
        }
        await updateProfile({ displayName:name });
        navigate('/');

    }
    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        console.log(user)
    }
    return (
        <>
    
        <div className='form-container text-center'>
            <img src={image} alt="" />
            <form onSubmit={handelResister}>
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="password" name="confirmPassword" id="" placeholder='Congirm Password' required />

                <input onClick={succesfulResister} disabled={!agree} className={!agree?"form-resister":"form-resister-active"}  type="submit" value=" Resister" />
                <ToastContainer />
            </form>
            <div className='mt-3'>
                    <input onClick={()=>setAgree(!agree)} className='' type="checkbox" name="" id="" />
                    <span  className={agree?"text-primary":"text-danger"} htmlFor="terms"> Terms and condition</span>

             </div>

            <p className='p-2 fs-4' onClick={navigateToLogin}><Link className='text-decoration-none ' to='/login'>Already Resister? Go to Singin..</Link></p>

        </div>
        </>
    );
}

export default Singup;