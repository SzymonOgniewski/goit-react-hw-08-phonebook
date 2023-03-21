import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div>
          <div>
            <h1>Phonebook</h1>
            <div>
              <button onClick={() => navigate('/sign-in')}>Sign in</button>
              <button onClick={() => navigate('/register')}>Register</button>
              <button onClick={() => navigate('')}>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
