import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/authHook/useAuth';

export const Home = () => {
  const isAuthorized = useAuth();
  const navigate = useNavigate();
  return (
    <main>
      <div>
        {!isAuthorized && (
          <div>
            <h2>Welcome to your phonebook!</h2>
            <button onClick={() => navigate('/sign-in')}>
              Sign in to add contacts to your own phonebook
            </button>
            <span>Don't You have an account?</span>
            <button onClick={() => navigate('/register')}>Sign up here</button>
          </div>
        )}
        {isAuthorized && (
          <button onClick={() => navigate('/phonebook')}>
            Check your phonebook
          </button>
        )}
      </div>
    </main>
  );
};
