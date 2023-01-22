/**
 * componente que va a contener un formulario para autenticacion
 * de usuarios.
 */

import React, { useState } from 'react';

const LoginForm = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ];

    const [data, setData] = useState(initialData); // eslint-disable-line

    return (
        <div>

        </div>
    );
};

export default LoginForm;
