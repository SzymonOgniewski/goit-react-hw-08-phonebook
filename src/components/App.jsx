import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refreshUser } from 'redux/auth/authThunk';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectIsRefreshing } from 'redux/auth/authSelector';
import { Box, Spinner } from '@chakra-ui/react';

const Home = lazy(() => import('pages/home/Home'));
const Register = lazy(() => import('pages/Registration/Registration'));
const SignIn = lazy(() => import('pages/Login/Login'));
const Phonebook = lazy(() => import('pages/ContactBook/ContactBook'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box textAlign={'center'}>
      <Spinner
        color="teal.500"
        size="xl"
        speed="0.35s"
        thickness="6px"
        emptyColor="gray.200"
        align="center"
      />
    </Box>
  ) : (
    <Suspense
      fallback={
        <Box textAlign={'center'}>
          <Spinner
            color="teal.500"
            size="xl"
            speed="0.35s"
            thickness="6px"
            emptyColor="gray.200"
            align="center"
          />
        </Box>
      }
    >
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
              <RestrictedRoute
                component={<SignIn />}
                redirectTo={'/phonebook'}
              />
            }
          />

          <Route
            path="/phonebook"
            element={
              <ProtectedRoute component={<Phonebook />} redirectTo={'/'} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
