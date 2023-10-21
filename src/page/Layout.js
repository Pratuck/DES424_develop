import { Link ,useNavigate} from "react-router-dom";
import './Layout.css'
import { getToken,resetUserSession } from "../services/AuthService";

function Header() {
  const navigate=useNavigate()
  const logoutHandler=()=>{
    resetUserSession()
    navigate("/login")
  }
  return (
    <div className="nav">
      <div className="list">      
        <a href = "/"><button className="link">Weather Dashbord</button></a>
        <a href = "/user"><button className="link">Token</button></a>
        {!getToken() &&
        <a href = "/login"><button className="link">Login</button></a>
        }
        {
          getToken()&&<a href = "/login"><button className="link" onClick={logoutHandler}>Logout</button></a>
        }
      </div>
    </div>
  )
}

export function Layout({children}){
  return (
    <div className="body">
    <Header />

    <div className = "content-layout">
      {children}
    </div>

    </div>
  )
}