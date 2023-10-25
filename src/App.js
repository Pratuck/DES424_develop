import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Weather_Dashbord from "./page/Weather_Dashbord";
import Login from "./page/Login";
import Registers from "./page/Registers";
import User from "./page/User";


export default function App() {
  return ( 
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Weather_Dashbord />} />
          <Route path="login" element={<Login />} />
          <Route path="registers" element={<Registers />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

