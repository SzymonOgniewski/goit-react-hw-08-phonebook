import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <div>
          <h2>Welcome to your phonebook!</h2>
          <button onClick={() => navigate('/sign-in')}>
            Sign in to add contacts to your own phonebook
          </button>
          <span>Don't You have an account?</span>
          <button onClick={() => navigate('/register')}>Sign up here</button>
        </div>
      </div>
    </main>
  );
};
