import { Component } from "react";
import ContactsForm from "ContactsForm/ContactsForm";

export class App extends Component {

  state = {
    contacts: [],
   
  };

  createContact =(data)=>{
    console.log(data)
  }

  render() {
    return (
      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101'
      //   }}
      // ></div>
      <ContactsForm createContact={this.createContact}/>
    );
  }
};
