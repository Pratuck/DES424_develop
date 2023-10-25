import { Outlet } from "react-router-dom";
import { Layout } from "./Layout.js";
import './Layout.css'


const Main = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
};

export default Main;