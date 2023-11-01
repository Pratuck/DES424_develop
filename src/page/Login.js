import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errMsg,setErrMsg]=useState("")

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className="centered-component login-container">
      <h1 className="login-header">Login</h1>
      <div className="input-group">
        <input type="text" id="userInput" name="userInput" className="input-field" placeholder="Username"/>
      </div>
      <div className="input-group password-input">
        <input
          type={passwordVisible ? "text" : "password"}
          id="passInput"
          name="passInput"
          className="input-field"
          placeholder="Password"
        />
        <div className="input-button">
          <input type="checkbox" onClick={togglePasswordVisibility} className="password-checkbox" />
          <span>Show Password</span>
        </div>
        <h5 className="errmsg">{errMsg}</h5>
      </div>
      <div className="input-group">
        <button className="login-button" type="submit" >Login</button>
      </div>
      <div>
        <button className="login-button">
        <Link className="link" to="/registers">
          Create Account
        </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
