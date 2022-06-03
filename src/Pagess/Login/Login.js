import React, { useRef } from 'react';
import './Login.css';
import image from '../../images/logo/logo2.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
     const emailRef=useRef('');
     const passwordRef=useRef('');
     const navigate=useNavigate();
     const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handelSingIn=event=>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password =passwordRef.current.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email,password);
        navigate('/')
    }
    return (
        <div className='mx-auto w-25 text-center'>
            <img width={300} className="mb-3" src={image} alt="" />
            <form onSubmit={handelSingIn}>
                <input ref={emailRef} className='' type="email" name="email" id="" placeholder='Email' />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='password' />
                <input  className='w-50 p-2 bg-primary border-0 text-white' type="submit" value="Login" />
            </form>
            <p className='p-2 fs-5' ><Link className='text-decoration-none ' to="/singup">new to ready-food?Go to resister!!!</Link></p>

        </div>
    );
};

export default Login;