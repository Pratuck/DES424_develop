import { Navigate, Route } from 'react-router-dom';
import { getToken } from '../services/AuthService';

const PrivateElement = ({ children }) => {
    return getToken() ? children : <Navigate to="/login" />;
  };

export default PrivateElement