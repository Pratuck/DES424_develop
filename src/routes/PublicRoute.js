import { Navigate, Route } from 'react-router-dom';
import { getToken } from '../services/AuthService';

const PublicElement = ({ children }) => {
    return !getToken() ? children : <Navigate to="/user" />;
  };

export default PublicElement