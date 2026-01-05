// Passing a Simple Message

import Parent from "./Parent";

function App() {
  return <Parent message="Welcome to React" />;
}import Child from "./Child";

function Parent({ message }) {
  return <Child message={message} />;
}
import GrandChild from "./GrandChild";

function Child({ message }) {
  return <GrandChild message={message} />;
}
function GrandChild({ message }) {
  return <h2>{message}</h2>;
}

export default App;

//User Details

import Parent from "./Parent";

function App() {
  const user = {
    name: "Hanshi",
    role: "Developer"
  };

  return <Parent user={user} />;
}
import Child from "./Child";

function Parent({ user }) {
  return <Child user={user} />;
}
import GrandChild from "./GrandChild";

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default App;

//Button Click

import Parent from "./Parent";

function App() {
  return <Parent />;
}

import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <Child count={count} setCount={setCount} />
    </>
  );
}

import GrandChild from "./GrandChild";

function Child({ count, setCount }) {
  return <GrandChild count={count} setCount={setCount} />;
}

function GrandChild({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
  );
}

export default App;

//Theme

import Parent from "./Parent";

function App() {
  return <Parent />;
}

import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [dark, setDark] = useState(false);

  return <Child dark={dark} setDark={setDark} />;
}

import GrandChild from "./GrandChild";

function Child({ dark, setDark }) {
  return <GrandChild dark={dark} setDark={setDark} />;
}

function GrandChild({ dark, setDark }) {
  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh"
    }}>
      <button onClick={() => setDark(!dark)}>
        Click
      </button>
    </div>
  );
}

export default App;

// CONTEXT API//
import { createContext, useContext, useState } from "react";


const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Hanshi");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Parent />
    </UserContext.Provider>
  );
}


function Parent() {
  return <Child />;
}


function Child() {
  return <GrandChild />;
}


function GrandChild() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Hello {user}</h2>
      <button onClick={() => setUser("React Learner")}>
        Change Name
      </button>
    </div>
  );
}

export default App;

// theme //

import { createContext,useContext,useState } from "react";

const ThemeContext=createContext();

function App(){
  const [dark,setDark]=useState(false);

  return (
    <ThemeContext.Provider value={{dark,setDark }}>
      <Parent />
    </ThemeContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div style={{
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "100vh"
    }}>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;

//Login /Logout
import { createContext,useContext,useState} from "react";
const AuthContext=createContext();

function App(){
  const [isLogin,setIsLogin]=useState(false);
  return(
    <AuthContext.Provider value={{isLogin,setIsLogin}}>
      <Parent />
    </AuthContext.Provider>
  );
}

function Parent(){
  return <Child />;
}

function Child(){
  return <GrandChild />;
}

function GrandChild(){
  const {isLogin,setIsLogin}=useContext(AuthContext);

  return(
    <div>
      <h2>{isLogin ? "Welcome User" : "Please Login"}</h2>
      <button onClick={()=>setIsLogin(true)}>Login</button>
      <button onClick={()=>setIsLogin(false)}>Logout</button>
    </div>
  );
}

export default App;

