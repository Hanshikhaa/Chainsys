import React, { useState } from 'react';
function MyForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

//counter

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}export default App;

 //Show / Hide Text

import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <p>This text is visible</p>}
    </div>
  );
}

export default App;

 //Input Box (Two-way binding)

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;

// // // // //Page load

import{useEffect} from "react";
function App(){
  useEffect(()=>{
    console.log("Loaded");
  },[]);
  return <h2>Verify console</h2>;
}
export default App;

// // // // Simple Form Submit

import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    alert(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;


// // // Simple Calculator

import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={() => setResult(Number(num1) + Number(num2))}>
        Add
      </button>

      <button onClick={() => setResult(num1 - num2)}>
        Subtract
      </button>

      <button onClick={() => setResult(num1 * num2)}>
        Multiply
      </button>

      <button onClick={() => setResult(num1 / num2)}>
        Divide
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;

// //Odd Even Checker

import {useState}from "react";
function App(){
  const[num,setNum]=useState("");
  const[result,setResult]=useState("");
  return(
    <div>
      <input
      type="number"
      onChange={(e)=>setNum(e.target.value)}
        />
        <button onClick={()=>setResult(num%2===0?"Even":"Odd")}>
          check
        </button>
        <h3>{result} </h3>
    </div>
  );
}
export default App;

//Text Mirror

import{useState}from "react";
function App(){
  const[text,setText]=useState("");
  return(
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Anything"
      />
      <h3>{text}</h3>
    </div>
  );
}
export default App;

//Count reset

import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
//Bg Colour Change

import{useState} from "react";
function App(){
  const[color,setColor]=useState("white");
  return(
    <div style={{background:color,height:"300vh",width:"100%"}}>
      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("blue")}>Blue</button>
      <button onClick={()=>setColor("green")}>Green</button>
    </div>
  );
}
export default App;

//Admin Login

import {useState}from"react";
function App(){
  const[user ,setUser]=useState("");
  return(
    <div>
      <input
      placeholder="Username"
      onChange={(e)=>setUser(e.target.value)}
      />
      <h3>
        {user==="admin"?"Welcome Admin":"Not Admin"}
        </h3>
    </div>
  );
}
export default App;

//Login sign-up toggle

import{useState} from "react";
function App(){
  const[isLogin,setIsLogin]=useState(true);
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  //const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
   if (username === "" || password === "") {
      setMessage("All fields are required");
      return;
    }

    if (isLogin) {
      setMessage("Login Successful");
    } else {
      setMessage("Sign Up Successful");
    }
};
return(
  <div style={{width:"300px",margin:"50px auto"}}>
    <h2>{isLogin?"Login":"Sign Up"}</h2>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Username"
      onChange={(e)=>setUsername(e.target.value)}
      />
      <br/><br/>
      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />
      <br/><br/>
      <button type="submit">
        {isLogin?"Login":"Sign Up"}
      </button>
    </form>
    <p>{message}</p>
    <button onClick={()=>setIsLogin(!isLogin)}>
      {isLogin?"Create Account":"Have An Account already? "}
    </button>
  </div>
);
}
export default App;


//Fruit List Displaying 

function App() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
export default App;
