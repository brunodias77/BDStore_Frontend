"use client"

import React from 'react';
import Input from '@/components/form/Input';
import { useFormStatus } from 'react-dom';
import Button from '@/components/form/Button';

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled={pending}>Enviando...</Button>
            ) : (
                <Button >Login</Button>
            )}
        </>
    );
}

const RegisterForm = () => {
    return (
        <form>
            <Input label='Primeiro Nome' name='firstName' type='text' />
            <Input label='Ultimo Nome' name='lastname' type='text' />
            <Input label='Email' name='email' type='email' />
            <Input label='Senha' name='password' type='password' />

        </form>
    );
};

export default RegisterForm;