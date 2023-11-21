import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { setUserSession } from "../services/AuthService";


const loginPath="https://8mciuqteg9.execute-api.us-east-1.amazonaws.com/v1/login"

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
  
    const submitHandler = (event) => {
      event.preventDefault();
      if (username.trim() === '' || password.trim() === '') {
        setErrorMessage('Both username and password are required');
        return;
      }
      setErrorMessage(null);
      const requestConfig = {
        headers: {
          'x-api-key': 'l0lLnJDN2T7Nuet3qHdzC3x0iTtPffwo3GcdavGo'
        }
      }
      const requestBody = {
        username: username,
        password: password
      }
  
      axios.post(loginPath, requestBody, requestConfig).then((response) => {
        setUserSession(response.data.user, response.data.token);
        navigate('/user')
      }).catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('you cannot login right now, we will fix it soon ;)');
        }
      })
    }

  return (
    <div className="centered-component login-container">
      <form onSubmit={submitHandler}>
      <h1 className="login-header">Login</h1>
      <div className="input-group">
        <input type="text" id="userInput" name="userInput" value={username} onChange={event=>{setUsername(event.target.value)}} className="input-field" placeholder="Username"/>
      </div>
      <div className="input-group password-input">
        <input type="password" id="passInput" name="passInput" value={password} onChange={event=>{setPassword(event.target.value)}}  className="input-field" placeholder="Password"/>
      </div>
      {errorMessage&&<h5 className="errmsg">{errorMessage}</h5>}
      <div className="input-group">
        <input className="login-button" type="submit" value="Login"></input>
      </div>
      </form>

      <div>
        <a href = "/registers" ><button className="link login-button">
          Create Account
        </button></a>
      </div>
    </div>
  );
};

export default Login;
