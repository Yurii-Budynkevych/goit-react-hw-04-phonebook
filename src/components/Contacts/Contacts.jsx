import PropTypes from 'prop-types';
import ListItem from './Item/Item';
import './Contacts.css';

const ContactList = ({ arr, onDelete }) => {
  return (
    <ul>
      {arr.map(el => (
        <ListItem
          key={el.id}
          name={el.name}
          value={el.number}
          onDelete={onDelete}
          id={el.id}
        />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
