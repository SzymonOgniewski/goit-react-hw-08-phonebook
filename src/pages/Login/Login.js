import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authThunk';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/authHook/useAuth';
import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(signIn({ email: email, password: password }));
    if (isAuthorized) {
      navigate('/phonebook');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex
          flexDir="column"
          justifyContent="center"
          gap="10px"
          alignItems="center"
        >
          <Flex flexDir="column" alignItems="center">
            <FormLabel>E-mail:</FormLabel>
            <Input
              type="email"
              name="email"
              focusBorderColor="teal.500"
              autoComplete="off"
              w="250px"
              required
            />
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <FormLabel>Password:</FormLabel>
            <Input
              focusBorderColor="teal.500"
              type="password"
              name="password"
              autoComplete="off"
              w="250px"
              required
            />
          </Flex>
          <Button type="submit" colorScheme="teal" variant="outline">
            Sign in
          </Button>
        </Flex>
      </form>
    </>
  );
};
export default SignIn;
