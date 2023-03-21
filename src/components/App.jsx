import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/home/Home';
import { SignIn } from 'pages/signIn/SignIn';
import { Register } from 'pages/register/register';
import { Phonebook } from 'pages/phoneBook/Phonebook';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
};
