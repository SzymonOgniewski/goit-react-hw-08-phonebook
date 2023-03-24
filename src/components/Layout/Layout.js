import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/auth/authThunk';
import { useAuth } from 'redux/auth/authHook/useAuth';
import { selectUserName, selectUserEmail } from 'redux/auth/authSelector';
import { Flex, Box, Button, Text, Heading } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
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
      <Box
        as="header"
        p="15px 25px 10px 25px"
        borderBottom="2px"
        borderColor="teal.500"
        boxShadow="md"
      >
        <Flex justifyContent="space-between" alignContent="center">
          <Button
            background="transparent"
            outline="none"
            _hover="none"
            _active="none"
            _focus="none"
            onClick={() => navigate('/')}
          >
            <Flex
              color="teal.400"
              _hover={{ color: 'teal.600' }}
              transition="all 0.3s ease"
              alignItems="center"
              gap="10px"
              fontSize="26px"
            >
              <PhoneIcon w="36px" h="36px" />
              <Text>Phonebook</Text>
            </Flex>
          </Button>
          <Flex gap="10px">
            {isAuthorized ? (
              <>
                <Flex flexDir="column" textAlign="center">
                  <Heading as="span" fontSize="16px">
                    Hello {userName}{' '}
                  </Heading>
                  <span>{userEmail}</span>
                </Flex>

                <Button onClick={handleSignOut} colorScheme="teal">
                  Sign out
                </Button>
              </>
            ) : (
              <Flex gap={15}>
                <Button
                  onClick={() => navigate('/sign-in')}
                  colorScheme="teal"
                  variant="outline"
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  colorScheme="teal"
                >
                  Register
                </Button>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Box>
      <Box as="main" p={'15px 25px 10px 25px'}>
        <Outlet />
      </Box>
    </>
  );
};
