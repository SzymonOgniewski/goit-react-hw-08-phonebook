import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsThunks';
import { selectContacts } from 'redux/selectors';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
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
