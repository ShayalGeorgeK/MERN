import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import user_icon from '../assets/person.png'
import password_icon from '../assets/password.png'

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/login",
        { username, password }
      );

      navigate("/profile", {
        state: res.data
      });

    } catch (error) {
      alert("Invalid username or password");
      console.log(error);
    }
  };

  return (
    <div className='container'>
          <div className="header">
            <div className="text">LogIN</div>
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
              <img src={password_icon} alt="" />
              <input 
                type="password" 
                placeholder='Password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="submit-container">
            <div className='submit' onClick={handleLogin} >LogIN</div>
          </div>
        </div>
  );
}

export default Login;