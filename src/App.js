import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Weather_Dashboard from "./page/Weather_Dashboard";
import Login from "./page/Login";
import Registers from "./page/Registers";
import User from "./page/User";
import { QueryClient, QueryClientProvider } from 'react-query' 

const queryClient = new QueryClient()


export default function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Weather_Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="registers" element={<Registers />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </QueryClientProvider>
    
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

