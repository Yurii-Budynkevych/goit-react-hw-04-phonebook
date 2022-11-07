import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
