import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
    return (
        <form>
            <p>
                <Input type="text" id="email" label="Email" required />
            </p>
            <p>
                <Input type="password" id="senha" label="Senha" />
            </p>
            <Button />
        </form>
    )
}

export default Form;