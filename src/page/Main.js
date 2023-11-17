import { Outlet } from "react-router-dom";
import { Layout } from "./Layout.js";
import axios from "axios";


const Main = () => {
  return (

    <Layout>
      <Outlet />
    </Layout>

  )
};

export default Main;