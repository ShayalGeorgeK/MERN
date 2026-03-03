import React from "react";
import "./App.css"; // move styles into App.css (provided below)

function App() {

  // const age = 20;

  // const numbers= [1,2,3];

  // const isLoggdIn = true;

  // const isAdmin = true;

  const user = {
    name : "shayal",
    role : "admin"
  };

  const notifications = ["order placed","payment recieved"];


  return (
    <>
      {/* Header */}
      {/* <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#">
            <span className="logo"></span>
            <span>ATLASSIAN</span>
          </a>

          <nav className="nav-links">
            <a href="#">Products</a>
            <a href="#">For teams</a>
            <a href="#">Support</a>
          </nav>

          <div className="nav-cta">
            <a className="btn-outline" href="#">Try free</a>
            <a className="btn-primary" href="#">Buy now</a>
          </div>
        </div>
      </header> */}

      {/* Hero */}
      {/* <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow">Move work</div>
            <h1>Move work<br />forward</h1>
            <p className="lead">
              Atlassian helps teams work smarter and faster, together.
            </p>
            <a className="cta" href="#">Learn more</a>
          </div>

          <div className="hero-right">
            <div className="illustration">
              <div
                className="img-wrap"
                style={{
                  backgroundImage: "url()" // replace path
                }}
              ></div>
            </div>

            <div className="shape-top"></div>
            <div className="shape-small"></div>
          </div>
        </div>
      </section> */}



      {/* <h1>{age>=20?"adult":"minor"}</h1> */}


      {/* <h2>Numbers:</h2>

      {numbers.map((num)=>(
        <p key={num}>{num}</p>
      ))} */}

      {/* <h2>
        {isLoggdIn?"welcome user":"please login"}
      </h2>

      {isAdmin&& <h2>Admin Panel</h2> } */}

      <h1>Welcome {user.name}</h1>

      <h2>
        {user.role==="admin"?"Admin Dashboard":"User Dashboard"}
      </h2>

      {user.role==="admin"&& <p>You have full access</p> }

      {notifications.map((note,index)=>( 
        <p key={index}>{note}</p>  
      ))}

    </>
  );
}

export default App;
