import Card from "./components/Card"
import React from "react";
import "./index.css";
import contacts from './contacts';

function App() {
  return (
    <div className="container">
      <h1>My contacts</h1>
      {contacts.map(contact => (
        <Card key={contact.email} name={contact.firstName} image={contact.image} phone={contact.phone} email={contact.email} />
      ))}
    </div>
  );
}

export default App;
