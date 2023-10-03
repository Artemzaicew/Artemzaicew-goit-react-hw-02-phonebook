import { Component } from "react";
import ContactsForm from "ContactsForm/ContactsForm";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import ContactList from "./ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  handleSubmitApp = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  createContact =(contact)=>{
    const newContact={
      ...contact,
      id:nanoid()
    };
    console.log(newContact)
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm  createContact={this.createContact}
        onSubmit={this.handleSubmitApp}/>
        <Filter/>
        <ContactList/>
      </div>
    );
  }
};
