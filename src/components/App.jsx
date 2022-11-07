import { useState, useEffect } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './Form/Form';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');
  // ////////////////////////////////////////////////////////////////////////
  const submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    if (contacts.some(obj => obj.name === values.name)) {
      resetForm();
      return window.alert(`${values.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, values]);
    resetForm();
  };

  const deleteHandler = contactID => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactID)
    );
  };

  const filterHandler = e => {
    setFilter(e.target.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={submitHandler} />

      <h2 className="subtitle">Contacts</h2>
      <Filter value={filter} onFilter={filterHandler} />
      <ContactList arr={visibleContacts} onDelete={deleteHandler} />
    </>
  );
};
