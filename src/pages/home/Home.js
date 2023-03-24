import { useNavigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/authHook/useAuth';
import { Flex, Heading, Button } from '@chakra-ui/react';

const Home = () => {
  const isAuthorized = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {!isAuthorized && (
        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign="center"
          gap="10px"
          alignItems="center"
        >
          <Heading fontSize="24px">Welcome to your phonebook!</Heading>
          <Button
            onClick={() => navigate('/sign-in')}
            colorScheme="teal"
            variant="outline"
            whiteSpace="normal"
          >
            Sign in to add contacts to your own phonebook
          </Button>
          <span>Don't You have an account?</span>
          <Button
            onClick={() => navigate('/register')}
            colorScheme="teal"
            variant="outline"
            whiteSpace="normal"
          >
            Sign up here
          </Button>
        </Flex>
      )}
      {isAuthorized && (
        <button onClick={() => navigate('/phonebook')}>
          Check your phonebook
        </button>
      )}
    </>
  );
};
export default Home;
