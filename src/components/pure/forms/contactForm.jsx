import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const numberRef = useRef(0);

    function addContact (e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            numberRef.current.value,
            false
        );
        add(newContact)
    }

    return (
        <form onSubmit={addContact}>
            <div className='mb-3'>
                <input ref={nameRef} className='form-control' type='text' placeholder='Nombre'/>
            </div>
            <div className='mb-3'>
                <input ref={lastnameRef} className='form-control' type='text' placeholder='Apellido' />
            </div>
            <div className='mb-3'>
                <input ref={numberRef} className='form-control' type='number' placeholder='Telefono'  />
            </div>
            <div>
                <button className='btn btn-primary'>Crear Contacto</button>
            </div>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
