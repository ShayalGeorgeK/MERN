import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const LoginSignup = () => {

  const [username, setUsername] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/signup",
        { username,emailid,password }
      );

      alert("Signup successful!");

      console.log(response.data);

      // navigate("/profile", {
      //   state: response.data
      // });
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input 
            type="text" 
            placeholder='User Name'
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}/>
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input 
            type="email" 
            placeholder='Email Id' 
            value={emailid} 
            onChange={(e)=>setEmailid(e.target.value)} />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="submit-container">
        <div className='submit' onClick={handleSubmit} >Sign Up</div>
      </div>
    </div>
  )
}

export default LoginSignup