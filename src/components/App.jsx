import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import './App.css';


const App = () => {
  const [contacts, setContacts] = useState([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                                            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                                            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                                            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
  const [filter, setFilter] = useState('');
  
  /*після першого рендеру запускається цей метод і в ньому
  ми зчитуємо список номерів з localStorage*/
  useEffect(() => {
     const contacts = localStorage.getItem('contacts');
     if (contacts) setContacts( JSON.parse(contacts));    
  }, [])


  /*після поновленн state або props запускається цей метод в ньому ми 
  записуємо поновлений список номерів в localStorage*/
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])


  //ф-ція приймає обьект (дані  нового введеного користувача)
  //і якщо користувача з таким номером телефону енмає, то додоється в state
  const createContact = data => {
    //перевіряємо чи є такий користувач з таким номером телефона
    const isThereSuchUser = contacts.some(
      ({ name, number }) => name === data.name && number === data.number
    );

    if (isThereSuchUser) {
      Notiflix.Notify.info(`${data.name} is slready in contact`);
      return;
    }

    setContacts([...contacts, data]);
  };

  //ф-ція отримує id контакта, який потрібно видалити і 
  //перемальовує state без цього контакта
  const deleteContact = data => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== data);
    })
  }

  //в компоненті Filter відстежується те, що введено у фільтрі і відправляється у цю
  //ф-цію і те, що введено додається в state у поле filter
  const changeFilter = value => {
    setFilter(value)
  }

  //ф-ція вертає цілий масив, якщо в полі filter нічого немає і -
  //відфільтрований масив по полю filter 
  //для поравняння усі слова приведені в нижній регістр а у номерів тел. приблані знаки тире
  const filteredContacts = () => {
    if (filter === '') {
      return contacts;
    }
    else {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes((filter).toLowerCase()) ||
          number.split('-').join('').includes(filter)
      );
    }    
  }


 
    return (
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm createContact={createContact} />
        <h2 className="title">Contacts</h2>
        <Filter changeFilter={changeFilter} />
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </div>
    );
}

export default App;
