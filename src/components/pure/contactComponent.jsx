import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, conect, remove }) => {

    function contactConectIcon () {
        if(contact.conected) {
            return (
                <i onClick={() => conect(contact)} className='bi-toggle-on fs-3' style={ {color: 'green', cursor: 'pointer'} } />
            );
        } else {
            return (
                <i onClick={() => conect(contact)} className='bi-toggle-off fs-3' style={ {color: 'gray', cursor: 'pointer'} } />
            );
        }
    }

    return (
        <tr>
            <td> { contact.name} </td>
            <td> { contact.lastname } </td>
            <td> {contact.number} </td>
            <td> {contactConectIcon()} </td>
            <td><i onClick={() => remove(contact)}  className='bi-trash fs-3' style={ { color: 'tomato', cursor: 'pointer' } }></i></td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    conect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
