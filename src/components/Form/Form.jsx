import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import css from "./Form.module.css"

class ContactForm extends Component {
  state = {
  name: '',
  number: ''
}

nameInputId = nanoid(); 
numberInputId = nanoid();    
   
    
handleChange = evt => {
  const { name, value } = evt.currentTarget;
  this.setState({
  [name]: value,
  });
};
 
handleSubmit = evt => {
  evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    }    
    
reset = () => {
this.setState({name:'', number:'' });
}    
    
render() {
    return (
    <div >
        <form className={css.formTitle} onSubmit={this.handleSubmit}>
        
        <label htmlFor={this.nameInputId}>
          Name
          <input
          type="text"
          name="name"
          onChange={this.handleChange}
          id={this.nameInputId}
          value={this.state.name}  
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
              />
        </label>
        
        
        <label htmlFor={this.numberInputId}>
          Phone
          <input
          type="tel"
          name="number"
          onChange={this.handleChange}
          id={this.numberInputId}
          value={this.state.number}  
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
          </label>
          
          <button className={css.formButton} type="submit">Add contact</button>
        </form>
     </div>
    );
  }
}

export default ContactForm;


ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired
};
