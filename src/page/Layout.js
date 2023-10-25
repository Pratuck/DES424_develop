import { Link } from "react-router-dom";
import './Layout.css'

function Header() {
  return (
    <div className="nav">
      <div className="list">      
        <Link className="link" to="/">Weather Dashbord</Link>
        <Link className="link" to="/login">Login</Link>
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