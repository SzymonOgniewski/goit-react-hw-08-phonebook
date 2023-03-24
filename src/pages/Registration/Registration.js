import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name: name, email: email, password: password }));
    form.reset();
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
            <FormLabel>Name:</FormLabel>
            <Input
              focusBorderColor="teal.500"
              w="250px"
              type="text"
              name="name"
              autoComplete="off"
              required
            />
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <FormLabel>E-mail:</FormLabel>
            <Input
              focusBorderColor="teal.500"
              w="250px"
              type="email"
              name="email"
              autoComplete="off"
              required
            />
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <FormLabel>Password:</FormLabel>
            <Input
              focusBorderColor="teal.500"
              w="250px"
              type="password"
              name="password"
              autoComplete="off"
              required
            />
          </Flex>

          <Button type="submit" colorScheme="teal" variant="outline">
            Sign up
          </Button>
        </Flex>
      </form>
    </>
  );
};
export default Register;
