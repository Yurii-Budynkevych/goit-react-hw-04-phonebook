import PropTypes from 'prop-types';
import './Item.css';

const ListItem = ({ name, value, onDelete, id }) => {
  return (
    <li>
      {name}: {value}
      <button type="button" onClick={() => onDelete(id)} className="btn">
        Delete
      </button>
    </li>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
