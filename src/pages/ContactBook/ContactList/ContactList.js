import {
  selectContacts,
  selectFilter,
  selectPendingState,
} from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Contact } from './Contact/Contact';
import { Filter } from './Filter/Filter';
import {
  Spinner,
  Box,
  Flex,
  ListItem,
  UnorderedList,
  Text,
} from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isPending = useSelector(selectPendingState);
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const list = filteredList.map(contact => (
    <ListItem key={contact.id}>
      <Contact contact={contact} />
    </ListItem>
  ));

  return (
    <>
      <Filter />
      {isPending ? (
        <Box textAlign={'center'}>
          <Spinner
            color="teal.500"
            size="xl"
            speed="0.35s"
            thickness="6px"
            emptyColor="gray.200"
            align="center"
          />
        </Box>
      ) : (
        <>
          {list.length === 0 ? (
            <Text as="p" textAlign="center" fontSize="24px" color="teal.400">
              There are no contacts on your list, add some!
            </Text>
          ) : (
            <UnorderedList>
              <Flex
                flexDir="column"
                justifyContent="center"
                gap="10px"
                alignItems="center"
              >
                {list}
              </Flex>
            </UnorderedList>
          )}
        </>
      )}
    </>
  );
};
