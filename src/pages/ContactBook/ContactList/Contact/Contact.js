import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsThunks';
import PropTypes from 'prop-types';
import { Box, Button, Flex } from '@chakra-ui/react';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(contact.id));
  };
  return (
    <Flex
      border="1px"
      borderColor="teal.600"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="10px"
      p="5px 10px 5px 10px"
      _hover={{ borde: '1px', borderColor: 'teal.50' }}
      w="350px"
    >
      <Box>
        {contact.name}: {contact.number}
      </Box>
      <Button
        type="button"
        onClick={handleDeleteContact}
        colorScheme="teal"
        borderRadius="15px"
        p="3px 7px 3px 7px"
        fontSize="12px"
        h="auto"
      >
        Delete
      </Button>
    </Flex>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    createdAt: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
