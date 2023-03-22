import React from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';

export const Phonebook = () => {
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
