import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsThunk } from 'redux/contacts/contactsThunks';
import { selectContacts } from 'redux/selectors';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';

export const Phonebook = () => {
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
          {contacts.length === 0 ? (
            <div>There are no contacts in your phonebook, add some!</div>
          ) : (
            <ContactList />
          )}
        </div>
      </div>
    </main>
  );
};
