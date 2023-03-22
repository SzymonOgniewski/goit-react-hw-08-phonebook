import {
  selectContacts,
  selectFilter,
  selectPendingState,
} from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import { Spinner, Box } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isPending = useSelector(selectPendingState);
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
      {isPending ? (
        <Box textAlign={'center'}>
          <Spinner
            color="red.500"
            size="xl"
            speed="0.35s"
            thickness="6px"
            emptyColor="gray.200"
            align="center"
          />
        </Box>
      ) : (
        <div>
          {list.length === 0 ? (
            <p>Brak kontaktów do wyświetlenia.</p>
          ) : (
            <ul>{list}</ul>
          )}
        </div>
      )}
    </div>
  );
};
