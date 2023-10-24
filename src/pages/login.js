import React, { useState } from "react";
import "./login.css";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className="main-login">
            <h1>Login</h1>
            <div className="input-container">
                <h3>Username:</h3>
                <input type="text" id="userInput" name="userInput" />
            </div>
            <div className="input-container">
                <h3>Password:</h3>
                <input
                    type={passwordVisible ? "text" : "password"}
                    id="passInput"
                    name="passInput"
                />
                <input type="checkbox" onClick={togglePasswordVisibility}/>
                <p>show password</p>
            </div>
        </div>
    );
};

export default Login;