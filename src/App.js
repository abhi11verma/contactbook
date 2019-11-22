import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from "./contactForm";
import ContactList from "./contactList";

function App() {
  return (
    <div className="App">
      <h2 className="App-title">Contact Book</h2>
      <ContactForm/>
      <div className="contact-list-container">
          <ContactList/>
      </div>
    </div>
  );
}

export default App;
