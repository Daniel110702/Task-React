import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent'; // eslint-disable-line
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {
    const newContact = new Contact('Jhon', 'gilbert', 3102200009, false); 
    const newContact2 = new Contact('Oscar', 'Dominguez', 3014490008, false); 
    const newContact3 = new Contact('Dayana', 'Dominguez', 3014490008, true); 

    const [contacts, setContacts] = useState([newContact, newContact2, newContact3]);

    useEffect(() => {
        console.log('contact state has been modified')
        return () => {
            console.log('ContactList component is going to unmount')
        };
    }, [contacts]);

    function conectTransfor (contact) {
        const index = contacts.indexOf(contact);
        const tempConected = [...contacts];
        tempConected[index].conected = !tempConected[index].conected;
        setContacts(tempConected);
    }

    function removeContact (contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);
    }

    function addContact (contact) {
        const index = contacts.indexOf(contact); // eslint-disable-line
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }

    return (
        <div className='col-12'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Celular</th>
                        <th scope='col'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => {
                        return (
                            <ContactComponent key={index} contact={contact} conect={conectTransfor} remove={removeContact} />
                        );
                    })}
                </tbody>
            </table>
            <ContactForm add={addContact} />
        </div>
    );
}

export default ContactList;
