import { Outlet, Link } from "react-router-dom";
import './Layout.css'
const Layout = () => {
  return (
    <div className="body-layout">
      <div className="nav">
        <div className="list">
          
          <Link className="link" to="/">Weather Dashbord</Link>
          <Link className="link" to="/login">Login</Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default Layout;