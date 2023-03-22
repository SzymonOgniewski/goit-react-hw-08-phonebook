import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/contactsThunks';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(contact.id));
  };
  return (
    <>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </>
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
