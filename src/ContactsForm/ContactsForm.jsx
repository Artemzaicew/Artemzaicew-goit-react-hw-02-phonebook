import { Component } from "react";
import css from "./ContactsForm.module.css"
import PropTypes from 'prop-types';

class ContactsForm extends Component {
    state = {
        name: '',
        number: '',
      };

      handleChange=({target})=>{
        this.setState({
            [target.name]: target.value,
        })
      };

      handleSubmit=(e)=>{
        e.preventDefault()
        this.props.createContact({
            name:this.state.name,
            number:this.state.number,
        })
      }

    render() {
        return(
          <form className={css.contactsForm} onSubmit={this.handleSubmit}>
                <label> Name
                <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
      value={this.state.name}
    />
                </label>
                <label> Number
                <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={this.handleChange}
      value={this.state.number}
    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;