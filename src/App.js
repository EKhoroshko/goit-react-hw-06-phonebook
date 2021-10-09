import './App.css';
import FormSubmit from './components/FormSubmit/FormSubmit';
import CreateContactList from './components/PhoneList/PhoneList';
import Filter from './components/Filter/Filter';
import {
  selectContactItem,
  addContact,
  removeContact,
  filterContacts,
  selectFilter,
} from './store/contacts';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const listConcacts = useSelector(selectContactItem);
  const payload = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  const submitContact = contact => {
    if (!checkContact(contact.name)) {
      dispatch(addContact(contact));
    } else {
      alert(`${contact.name} is alredy in contacts`);
    }
  };

  const checkContact = name => {
    return listConcacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const filterContact = () => {
    return listConcacts.filter(({ name }) =>
      name.toLowerCase().includes(payload.toLowerCase()),
    );
  };

  const clearContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <FormSubmit
        title={'Name'}
        phone={'Number'}
        submitContact={submitContact}
      />
      <Filter onChange={handleChange} />
      <CreateContactList
        filterContact={filterContact}
        title={'Contacts'}
        removeContact={clearContact}
      />
    </div>
  );
}

export default App;
