import {useState} from "react";
import "../styles/LoginPage.css";
import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";

const LoginPage = () => {
  const [active, setActive] = useState('login')
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <div className="brand">
          <span className="logo">🛒</span>
          <span className="brand-name">FreshCart</span>
        </div>

        <div className="left-content">
          <h1>Freshness delivered to your doorstep</h1>
          <p>
            Join over <strong>10,000+</strong> happy customers getting the
            finest groceries daily.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <h2 style={{margin:"0px"}}>Welcome Back</h2>
        <p style={{margin:"0px"}} className="subtitle">Enter your credentials to access your account</p>

        <div className="auth-tabs">
          <span onClick={() => setActive("login")} className={`tab ${active === "login" ? "active" : ""}`}>Login</span>
          <span onClick={() => setActive("signup")} className={`tab ${active === "signup" ? "active" : ""}`}>Sign Up</span>
        </div>

        {/* <button className="social-btn google">Continue with Google</button>
        <button className="social-btn apple">Continue with Apple</button> */}

        <div className="divider"></div>

        {active=="login" ? <Login></Login> : <Signup></Signup>}

        {/* <p className="terms">
          By signing in, you agree to our <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;