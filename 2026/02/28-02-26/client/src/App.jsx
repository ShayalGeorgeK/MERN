// import { useEffect, useState } from 'react'


// function App() {
//   const [post, setPost] = useState(null);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res=>res.json()
//     .then(data=>setPost(data)));
//   },[]);

//   return (
//     <>
//       <h1>Post</h1>
//       {post && <p> {post.title} </p>}
//     </>
//   )
// }

// export default App









// import { useEffect, useState } from 'react'

// function App() {
//   const [post, setPost] = useState(null);

//   useEffect(() => {

//     async function getPost(){
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );

//       console.log(response);
      
//       const data = await response.json();
//       setPost(data);
//     }
//     getPost();

//   },[]);

//   return (
//     <>
//       <h1>Post</h1>
//       {post && <p> {post.title} </p>}
//     </>
//   )
// }

// export default App










// import {useState } from 'react'

// function App() {
//   const [posts, setPosts] = useState([]);

//     async function getPosts(){
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/"
//       );

//       console.log(response);
      
//       const data = await response.json();
//       setPosts(data.slice(0,5));
//     }
  

//   return (
//     <>
//       <h1>Post</h1>
//       <button onClick={getPosts} >Load Posts</button>
      
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}> {post.title} </li>
//         ))}
//       </ul>

//     </>
//   )
// }

// export default App





// axios , try catch block

import { useEffect, useState } from 'react'
import axios from "axios";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {

    async function getPost(){

      try {
        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      console.log(response);

      setPost(response.data);
      } catch (error) {
        console.log(error);
        
      }
      
      
    }
    getPost();

  },[]);

  return (
    <>
      <h1>Post</h1>
      {post && <p> {post.title} </p>}
    </>
  )
}

export default App