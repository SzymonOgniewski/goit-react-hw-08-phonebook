import { Heading, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsThunks';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';

const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);
  return (
    <Flex flexDir="column">
      <Heading
        alignSelf="center"
        textAlign="center"
        p="0 10px"
        borderBottom="1px"
        borderColor="teal.600"
      >
        Contacts
      </Heading>
      <AddContactForm />
      <ContactList />
    </Flex>
  );
};
export default Phonebook;
