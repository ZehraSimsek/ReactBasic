import React from 'react';
import Form from './Component/Form.js';
import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className='container'>
      <h1>CONTACTS LIST APP</h1>
      <Form addContact={setContacts} contact={contacts} />
    </div>
  );
}

export default App;
