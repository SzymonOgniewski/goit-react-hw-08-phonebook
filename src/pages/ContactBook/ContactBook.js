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
    <main>
      <div>
        <div>
          <h2>Contacts</h2>
          <AddContactForm />
          <ContactList />
        </div>
      </div>
    </main>
  );
};
export default Phonebook;
