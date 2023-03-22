import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/auth/authThunk';
import { useAuth } from 'redux/auth/authHook/useAuth';
import { selectUserName, selectUserEmail } from 'redux/auth/authSelector';
export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAuth();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const handleSignOut = () => {
    dispatch(signOut());
    navigate('');
  };

  return (
    <>
      <header>
        <div>
          <div>
            <h1>Phonebook</h1>
            <div>
              {isAuthorized ? (
                <>
                  <div>
                    <h2>Hello:{userName} </h2>
                    <span>{userEmail}</span>
                  </div>

                  <button onClick={handleSignOut}>Sign out</button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate('/sign-in')}>Sign in</button>
                  <button onClick={() => navigate('/register')}>
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
