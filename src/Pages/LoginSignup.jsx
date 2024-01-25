import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup__container">
        <h1>Sign Up</h1>
        <div className="loginSignup_fields">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Please enter your email." />
          <input type="password" placeholder="Enter a password" />
        </div>
        <button>Continue</button>
        <div className="loginSignup__login">
          Already have an account? <span>Login here</span>
        </div>
        <div className="loginSignup__agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & private policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
