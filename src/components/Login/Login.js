import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { signup, login, logout, useAuth } from "../../firebase/config";
import "./Register-Login.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
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
        <div className="fields">
          <input ref={emailRef} className="inputField" placeholder="Admin ID" />
        </div>

        <div className="fields">
          <input
            ref={passwordRef}
            className="inputField"
            placeholder="Password"
          />
        </div>
        <div className="fields btn-div">
          <div>
            <button
              disabled={loading || currentUser}
              className="btn"
              onClick={handleLogin}
            >
              Log in{" "}
            </button>
          </div>
          <div>
            <button
              disabled={loading || !currentUser}
              className="logout-btn"
              onClick={handleLogout}
            >
              Log out{" "}
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

      <button disabled={loading || currentUser} onClick={handleSignup}>
          Sign Up
        </button>
      <button disabled={loading || currentUser} onClick={handleLogin}>
        Log In
      </button>
      <button disabled={loading || !currentUser} onClick={handleLogout}>
        Log Out
      </button>

      <div style = {{ position:"relative", float:"right", marginLeft: "auto" , marginRight: 0}}>
        {currentUser && (
          <Link to="/update-gallery">
         <button> <i class="fas fa-arrow-right"></i>  Update Gallery </button>
          </Link>
        )}
      </div>
    </>
  );
}
