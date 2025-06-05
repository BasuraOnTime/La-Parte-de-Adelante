import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (!token || rol !== requiredRole) {
    return <Navigate to="/InicioS" />;
  }

  return children;
};

export default ProtectedRoute;