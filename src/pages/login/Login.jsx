import React, { useState } from 'react'
import { motion } from 'framer-motion';
import "./login.css";

import { useNavigate } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  
  const navigate = useNavigate();

  const[user, setUser] = useState({
    email: "",
    password: ""
   });

   

  const inputChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    }
    )
  }

  const loginHandler = (e) => {
    e.preventDefault();
    if(user.email === "demo@coralmango.com" && user.password === "demo123"){
      localStorage.setItem("isLoggedIn", true);
        navigate('/main');
    } else {
      toast.error('🦄 Invalid Credentials!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    }
    setUser({
      email: "",
      password: ""
    })
  } 

  
  return (
    <div className='login-container'>
        <div className='login-section'>
            <div className='login-text'>
                Login
            </div>
            <form onSubmit={loginHandler}>
                <div className='login-content'>
                <label htmlFor="">Email</label>
                <br />
                <input type='text' placeholder='Enter your email address' name='email' value={user.email} onChange={inputChangeHandler}  />
                </div>
                <div className='login-content'>
                <label htmlFor="" >Password</label>
                <br />
                <input  type='password' placeholder='Enter valid password' name='password' value={user.password} onChange={inputChangeHandler} />
                </div>
                <motion.button whileHover={{scale: 1.1}} className='login-btn' type='submit'>
                login
                </motion.button>
                
            </form>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Login
