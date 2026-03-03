import React, { useState } from 'react'


// Toggle - ON/OFF
// const App = () => {

//   const [tog,setTog] = useState(true);
//   function toggling() {
//     console.log("toggled");
//     setTog(!tog);
//   } 

//   return (
//     <div>
//       <p>Status: {tog?"ON":"OFF"} </p>
//       <button onClick={toggling} >Toggle</button>
//     </div>
//   )
// }


//Change Name
const App = () => {

  const [name,setName] = useState("Sarah");
  function changeName() {
    (name==="Sarah")? setName("John") : setName("Sarah");
    console.log("Name Changed");
  }

  return (
    <div>
      {name} <br />
      <button onClick={changeName} >ChangeName</button>
    </div>
  )

}


export default App