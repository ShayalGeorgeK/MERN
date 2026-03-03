// import { useEffect, useState } from "react"
// import Home from "./home/Home"

// function App(){

//   const [song,setSong]=useState([
//     {name:"hello"},
//     {name:"helloooo"},
//     {name:"welcome"}
//   ])

//   const [search,setSearch]=useState([""])

//   const [data,setData]=useState([])

//   const addsong=()=>{
//     setSong([...song,{name:search}])
//   }

//   // console.log(event);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((result)=>setData(result))
//   },[])

//   useEffect(()=>{
//     console.log("song effect is running");
    
//   },[song])

//   useEffect(()=>{
//     console.log("age effect is running");
    
//   })
  

//   // const[demo,setDemo]=useState("hello");
//   // const[num,SetNum]=useState(0)
//   return(
//     <div>

//       {/* <h1>{demo}</h1>
//       <button onClick={()=>setDemo("welcome")}>Change Me</button>
//       <h3>{num}</h3>
//       <button onClick={()=>SetNum(num+1)}>+</button>
//       <button onClick={()=>SetNum(num-1)}>-</button> */}

      


//       {
//         song.map((value)=>{
//           return <h1>{value.name}</h1>
//         })
//       }


//       <input type="text" onChange={(event)=>setSearch(event.target.value)} />

//       <button onClick={()=>addsong()}>Add Song</button>

//       {data.map((user) => (
//         <p>{user.name}</p>
//       ))}


//       <Home data={song}/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import About from './components/about/About'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App