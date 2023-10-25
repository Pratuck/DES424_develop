import { Outlet, Link } from "react-router-dom";
import { Layout } from "./Layout.js"
import './Layout.css'


const Login = () => {
    return (
      <div>
        <h1>Login</h1>
        <Link className="link" to="/registers">Registers</Link>
      </div>
    )
      
  };
  
  export default Login;
  