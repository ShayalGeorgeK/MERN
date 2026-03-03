import React from 'react'


// Profile Card
const App = () => {

  const user={
    name:"Shayal",
    age:24
  }
  const hobbies = ["Reading comics","Watching anime"];

  return (
    <div>
      <h2>Name : {user.name}</h2>
      <h2>Age : {user.age} </h2>
      <h2>Adult or Minor : { (user.age >= 18 )?"Adult":"Minor"}</h2>
      <h2>Hobbies :</h2>
      {hobbies.map((note,index)=>(
        <p key={index}>{note}</p>
      ))}
    </div>
  )
}




//Product List
// const App = () => {

//   const productList = ["Laptop","Headset","Keyboard"]

//   const productStock = [2,0,4];

//   return (
//     <div>


//       {productList.map((note,index)=>(
//         <p key={index}>{note} : {(productStock.at(index) > 0) ? "InStock": "OutOfStock"}</p>
//       ))}

      
//     </div>
//   )
// }

export default App