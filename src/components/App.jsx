import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/home/Home';
import { SignIn } from 'pages/SignIn/SignIn';
import { Register } from 'pages/Register/register';
import { Phonebook } from 'pages/Phonebook/Phonebook';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authThunk';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestrictedRoute';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<Register />}
              redirectTo={'/phonebook'}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <RestrictedRoute component={<SignIn />} redirectTo={'/phonebook'} />
          }
        />

        <Route
          path="/phonebook"
          element={
            <ProtectedRoute component={<Phonebook />} redirectTo={'/'} />
          }
        />
      </Route>
    </Routes>
  );
};
