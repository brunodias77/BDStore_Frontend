"use client"

import React from 'react';
import Input from '@/components/form/Input';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/form/Button';
import userRegisterPost from '@/actions/user-register';
import ErrorMessage from '@/helper/Error-message';

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
    const [state, action] = useFormState(userRegisterPost, {
        ok: false,
        error: '',
        data: null,
    });
    return (
        <form action={action}>
            <Input label='Primeiro Nome' name='firstname' type='text' />
            <Input label='Ultimo Nome' name='lastname' type='text' />
            <Input label='Email' name='email' type='email' />
            <Input label='Senha' name='password' type='password' />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
    );
};

export default RegisterForm;