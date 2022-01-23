import React, { useState } from 'react'
import Register from './Register';
import RegisterSuccess from './RegisterSuccess';

function RegisterForm() {
    const[fornIsSubmitted, setFornIsSubmitted] = useState(false);

    const submitForm = () => {
        setFornIsSubmitted(true);
    };
    return (
        <div>
            { !fornIsSubmitted ? <Register submitForm={submitForm}/> : <RegisterSuccess/> }
        </div>
    );
};

export default RegisterForm;
