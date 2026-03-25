import React, { useState } from 'react'

//18-02-26--Props
// function UserCard(props) {
//   return (
//     <div style={{border: "1px solid black",padding:"10px",margin:"10px"}}>
//       <h2>{props.name}</h2>
//       <p>{props.role}</p>
//     </div>
//   ) 
// }
// const App = () => {
//   return (
//     <div style={{display:"flex"}}>
//       <h1>Team Members</h1>
//       <UserCard name="John" role="Frontend Dev" />
//       <UserCard name="Sara" role="Backend Dev" />
//       <UserCard name="David" role="UI Designer" />
//     </div>
//   )
// }


//19-02-26 --
// const App = () => {
//   function greet(name) {
//     console.log("Hello "+ name);   
//   }
//   return (
//     <div>
//       <button onClick={ ()=> greet("Ash")}>
//         Greet
//       </button>
//     </div>
//   )
// }


//19-02-26--events in react
const App = () => {

  const [text,setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        value={text}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  )
}


export default App