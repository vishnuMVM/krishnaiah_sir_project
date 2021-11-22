import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, login, logout, useAuth } from "../../firebase/config";
import "./Register-Login.css";

export default function AdminLogin() { const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
    await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
    // alert("Error!");
    // }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <>
      <div className="login">
        <div className="fields" >
          <input style={ !currentUser ? { pointerEvents: "auto"} : {pointerEvents: 'none'} } ref={emailRef} className="inputField" placeholder="Admin ID"  type ="email"/>
        </div>

        <div className="fields" >
          <input 
          style={ !currentUser ? { pointerEvents: "auto"} : {pointerEvents: 'none'} }
            ref={passwordRef}
            className="inputField"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="fields btn-div">
          <div style={ !currentUser ? { display:'block'} : {display : 'none'} }>
            <button
              disabled={loading || currentUser}
              className="btn"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
          <div style={ currentUser ? { display:'block'} : {display : 'none'} }>
            <button
              disabled={loading || !currentUser}
              className="logout-btn"
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
          {/* <div>
            <button
              disabled={loading || currentUser}
              className="btn"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </div>

      <div style = {{ position:"relative", float:"right", marginLeft: "auto" , marginRight: 0,padding:"20px"}}>
        {currentUser && (
          <Link to="/update-gallery">
         <button className = "btn"> <i class="fas fa-arrow-right"></i>  Update Gallery </button>
          </Link>
        )}
      </div>
    </>
  );
}
