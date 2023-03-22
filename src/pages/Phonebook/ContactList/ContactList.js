import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const list = filteredList.map(contact => (
    <li key={contact.id}>
      <Contact contact={contact} />
    </li>
  ));

  return (
    <div>
      <Filter />
      <ul>{list}</ul>
    </div>
  );
};
