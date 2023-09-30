
import './ContactList.css';

const ContactList = ({ contacts, deleteContact }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);
    deleteContact(e.target.name);
  };

  return (
    <div className="conteinerContactList">
      <ul className="contactList">
        {contacts.map(contact => (
          <li key={`${contact.name}_${contact.number}`} className="contactInfo">
            <p className="contactName">{contact.name}: </p>
            <p className="contactPhone"> {contact.number}</p>
            <button
              className="btnContact"
              name={contact.id}
              onClick={handleSubmit}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;