import React, { useState } from "react";
import "./Layout.css";
import "./Login.css"


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className="centered-component">
            <div>
                <h1>Login</h1>

                <div className="input-container">
                    <h3>USERNAME:</h3>
                    <input type="text" id="userInput" name="userInput" />
                </div>
                <div className="input-container">
                    <h3 >PASSWORD: </h3>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        id="passInput"
                        name="passInput"
                    />
                    <input type="checkbox" onClick={togglePasswordVisibility} />
                    <p>Show password</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
