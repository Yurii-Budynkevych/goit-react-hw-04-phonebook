import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import './Form.css';

const init = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <>
      <Formik initialValues={init} onSubmit={onSubmit}>
        <Form autoComplete="off">
          <label>
            Name{' '}
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number{' '}
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className="btn" type="sumbit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
