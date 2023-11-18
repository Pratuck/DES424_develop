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
        <Link className="link" to="/">Weather Dashbord</Link>
        <Link className="link" to="/user">Token</Link>
        {!getToken() &&
        <Link className="link" to="/login">Login</Link>
        }
        {
          getToken()&&<Link className="link" to="login" onClick={logoutHandler}>Logout</Link>
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