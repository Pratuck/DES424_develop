import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import WeatherDashboard from "./page/weatherDashboard";
import Login from "./page/Login";
import Registers from "./page/Registers";
import User from "./page/User";
import { QueryClient, QueryClientProvider } from 'react-query' 
import PublicElement from "./routes/PublicRoute";
import PrivateElement from "./routes/PrivateRoute";
import { useEffect } from "react";
import { getToken,resetUserSession,setUserSession,getUser } from "./services/AuthService";
import axios from "axios";

const queryClient = new QueryClient()
const verifyPath="https://2e90icdje8.execute-api.us-east-1.amazonaws.com/v1/verify"


export default function App() {
  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }
    const requestConfig = {
      headers: {
        'x-api-key': 's9Uopm0uTA1ZxdciS5ug16LFli4c8C951epDtZlC'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }
    axios.post(verifyPath, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
    }).catch(() => {
      resetUserSession();
    })
  }, []);


  return ( 
    <QueryClientProvider client={queryClient}>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<WeatherDashboard/>} />
          <Route path="login" element={<PublicElement><Login /></PublicElement>} />
          <Route path="registers" element={<PublicElement><Registers /></PublicElement>} />
          <Route path="user" element={<PrivateElement><User/></PrivateElement>} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </QueryClientProvider>
    
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

