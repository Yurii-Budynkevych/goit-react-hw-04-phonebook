import React from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './Form/Form';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';

const LS_KEY = 'contacts';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount = () => {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  };

  submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    if (this.state.contacts.some(obj => obj.name === values.name)) {
      resetForm();
      return window.alert(`${values.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
    resetForm();
  };

  deleteHandler = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  filterHandler = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.submitHandler} />

        <h2 className="subtitle">Contacts</h2>
        <Filter value={filter} onFilter={this.filterHandler} />
        <ContactList arr={visibleContacts} onDelete={this.deleteHandler} />
      </>
    );
  }
}
