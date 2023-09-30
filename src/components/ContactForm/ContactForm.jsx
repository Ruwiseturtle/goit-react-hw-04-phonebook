import { useEffect, useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  //при натисненні на кнопку add contact викликається ф-ція з app, яка додає новий контакт
  //і в ту ф-цію відправляється обьект з даними нового користувача
  const handleSubmit = e => {
    e.preventDefault();
    createContact({
      id: `${name}_${number}`,
      name: name,
      number: number,
    });
    setName('');
    setNumber('');    
  };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          <p className="textLabel">Name</p>
          <input
            className="inputName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>

        <label>
          <p className="textLabel">Number</p>
          <input
            className="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button className="btnAdContact" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
