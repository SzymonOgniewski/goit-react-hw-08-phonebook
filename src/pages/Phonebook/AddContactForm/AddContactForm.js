import React from 'react';
import { Input } from './Input/Input';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contacts/contactsThunks';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`There is already contact with name of ${name} on your list`);
      return;
    }
    dispatch(
      addContactThunk({
        name: name,
        number: number,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter Name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputName="name"
          label="Name"
          htmlFor="name"
        />
        <Input
          placeholder="Enter phone number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          inputName="number"
          label="Phone number"
          htmlFor="phone number"
        />
        <button type="submit">ADD CONTACT</button>
      </form>
    </div>
  );
};
