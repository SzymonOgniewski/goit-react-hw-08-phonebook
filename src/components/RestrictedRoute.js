import { useAuth } from 'redux/auth/authHook/useAuth';
import { Navigate } from 'react-router-dom';
export const RestrictedRoute = ({ component, redirectTo = '/phonebook' }) => {
  const isAuthorized = useAuth();
  return !isAuthorized ? component : <Navigate to={redirectTo} />;
};
