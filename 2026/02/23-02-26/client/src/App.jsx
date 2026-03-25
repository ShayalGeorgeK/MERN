import React, { useState } from 'react'
import { Routes,Route,Link,BrowserRouter,useParams, Outlet } from 'react-router-dom'

function Home() {
  console.log("Home component rendered");
  return <h1>Home Page</h1>
  
}
function About(){
  console.log("About component rendered");
  return <h1>About Page</h1>
}
function Dashboard({isAuth}){
  return <h1> {isAuth?"Dashboard":"(Protected)"} </h1>
}
function Login({onLogin,isAuth}){
  return(
    <div>
      <br />
      <button onClick={onLogin}>{isAuth?"Logout":"Login"}</button>
    </div>
  )
}

function App() {

  const [ isAuth, setIsAuth]=useState(false);

  return (
    <>

      {/* Links */}
      <div className='home' >
        <Link to="/" >Home</Link>
        <br />
        <Link to="/about" >About</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/login" >Login</Link>
      </div>
      <hr />

      {/* Routes container */}
      <Routes>
        {/* Route definition */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={
          <div>
            <p>{isAuth?"Login Succesfully":"Click on button to Login"}</p>
            <Login onLogin={()=>{setIsAuth(!isAuth);}} isAuth={isAuth}/>
          </div>
        } />
        <Route path='/dashboard' element={<Dashboard isAuth={isAuth}/>} />
      </Routes>
    </>
  )
}






// function User(){
//   const{ id } = useParams();

//   console.log("User ID:",id);

//   return <h1>User ID is {id}</h1>
  
// }
// function App(){
//   return(
//     <div>
//       <h2>Users</h2>

//       <Link to="/user/1" >User 1</Link>
//       <br />
//       <Link to="/user/2" >User 2</Link>
//       <br />
//       <Link to="/user/3" >User 3</Link>

//       <Routes>
//         <Route path="/user/:id" element={<User/>} />
//       </Routes>

//     </div>
//   )
// }






// function Dashboard(){
//   return(
//     <div>
//       <h1>Dashboard</h1>
//       <Link to="profile">Profile</Link>
//       <br />
//       <Link to="settings">Settings</Link>

//       {/* Child routes render here */}
//       <Outlet/>
//     </div>
//   )
// }

// function Profile(){
//   return <h2>Profile Section</h2>
// }

// function Settings(){
//   return <h2>Settings Section</h2>
// }
// function App (){
//   return(
//     <div>

//       <Link to='dashboard' >Dashboard</Link>

//       <Routes>
//         <Route path='dashboard' element={<Dashboard/>} >
//           <Route path='profile' element={<Profile/>} />
//           <Route path='settings' element={<Settings/>} />
//         </Route>
//       </Routes>
//     </div>
    
//   )
// }

export default App
