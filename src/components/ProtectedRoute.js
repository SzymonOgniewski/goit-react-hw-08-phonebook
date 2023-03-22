import { useAuth } from 'redux/auth/authHook/useAuth';
import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ component, redirectTo = '/' }) => {
  const isAuthorized = useAuth();
  return isAuthorized ? component : <Navigate to={redirectTo} />;
};
