 import { Routes, Route } from "react-router-dom";

import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/about" element={<h2>About Page</h2>} />
    </Routes>
  );
}

export default App;

// Navigation With Link

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
      </Routes>
    </>
  );
}

export default App;

//button navigation

import {Routes,Route,Link,useNavigate}from "react-router-dom";

function Home(){
  const navigate=useNavigate();
  return(
    <>
    <h2>Home Page</h2>
    <button onClick={()=>navigate("/about")}>
      Go to About Page
      </button>
    </>   
  );
}

function App(){
  return(
    <>
    <Link to="/">Home</Link>|{""}
    <Link to="/about">About</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<h2>About Page</h2>}/>
    </Routes>
    </>
  );
}
export default App;


//Go back

function About(){
  const navigate=useNavigate();
  return(
    <>
    <h2>About Page</h2>
    <button onClick={()=>navigate(-1)}>
      Go Back
      </button>
    </>   
  );
}export default About;

//Login and Home page

import {Routes,Route,useNavigate}from "react-router-dom";
function Login(){
  const navigate=useNavigate();
  return (
    <>
    <h2>Login Page</h2>
    <button onClick={()=>navigate("/home")}>
      Login
    </button>
    </>
  );
  
}
function Home(){
  return<h2>Home Page</h2>
}
function App(){
  return(
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/home"element={<Home/>}/>
    </Routes>
  );
} export default App;

//Login Home and About page
import { Routes, Route, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/home")}>
        Login
      </button>
    </>
  );
}

function Home() {
  const navigate=useNavigate();
  return (
    <>
      <h2>Home Page</h2>
      <button onClick={()=>navigate("/about")}>
        Home to About
      </button>
    </>
  )
}
function About() {
  const navigate=useNavigate();
  return (
    <>
      <h2>About Page</h2>
      <button onClick={()=>navigate(-2)}>
        Back to Login
      </button>
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

//Go Back and Forward
import {useNavigate}from "react-router-dom";
 function About(){
  const navigate=useNavigate();
  return(
    <>
    <h2>About page</h2>
    <button onClick={()=>navigate(-1)}>Back</button>
    <button onClick={()=>navigate(1)}>Forward</button>
    </>
  );
 }
export default About;

//Simple Menu

import{Routes,Route,Link}from "react-router-dom";
function Home(){
  return(
    <>
    <Link to="/">Home</Link>|{" "}
    <Link to="/about">About</Link>|{" "}
    <Link to="/contact">Contact</Link>
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/about" element={<h2>About Page</h2>} />
      <Route path="/contact" element={<h2>Contact Page</h2>} />
    </Routes>
    </>

  );
}
export default Home;

// User Profile Page 

import{Routes,Route,Link,useParams}from "react-router-dom";
function Profile(){
  const {username}=useParams();
  return <h2>Welcome,{username}!</h2>;
}
function App(){
  return(
    <>
    <Link to="/profile/John">John's Profile</Link>|{" "}
    <Link to="/profile/Jane">Jane's Profile</Link>
    <Routes>
      <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
    </>
  );
}
export default App;

//URL Parameter

import { Routes, Route, useParams } from "react-router-dom";

function User() {
  const { name } = useParams();
  return <h2>Hello {name}</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/user/:name" element={<User />} />
    </Routes>
  );
}

export default App;


//404 Page Not Found

import { Routes, Route } from "react-router-dom";

function App(){
  return(
    <Routes>
      <Route path="/"element={<h2>Home</h2>}/>
      <Route path="*"element={<h2>Error Found</h2>}/>
    </Routes>
  );
}
export default App;

//Conditional Navigation

import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const isLoggedIn = true;

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return <h2>Login Page</h2>;
}
export default Login();

