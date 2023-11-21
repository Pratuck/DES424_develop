import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import WeatherDashboard from "./page/weatherDashboard";
import Login from "./page/Login";
import Registers from "./page/Registers";
import User from "./page/User";
import Statistics from "./page/Staticstic";
import { QueryClient, QueryClientProvider } from 'react-query' 
import PublicElement from "./routes/PublicRoute";
import PrivateElement from "./routes/PrivateRoute";
import { useEffect } from "react";
import { getToken,resetUserSession,setUserSession,getUser } from "./services/AuthService";
import axios from "axios";

const queryClient = new QueryClient()
const verifyPath="https://8mciuqteg9.execute-api.us-east-1.amazonaws.com/v1/login"


export default function App() {
  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }
    const requestConfig = {
      headers: {
        'x-api-key': 'l0lLnJDN2T7Nuet3qHdzC3x0iTtPffwo3GcdavGo'
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
          <Route index element={<WeatherDashboard />} />
          <Route path="login" element={<PublicElement><Login /></PublicElement>} />
          <Route path="registers" element={<PublicElement><Registers /></PublicElement>} />
          <Route path="statistic" element={<Statistics />} />
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

