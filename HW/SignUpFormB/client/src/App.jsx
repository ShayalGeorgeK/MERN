import React from 'react'
import LoginSignup from './Components/LoginSignup/LoginSignup.jsx'
import Profile from './Components/Profile/Profile.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/LoginSignup/Login.jsx';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginSignup/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App