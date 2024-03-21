"use client"

import React from 'react';
import Input from '@/components/form/Input';
import Button from '@/components/form/Button';
import login from "@/actions/login";
import { useFormState, useFormStatus } from 'react-dom';
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

const LoginForm = () => {

    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null,
    });
    return (
        <form action={action}>
            <Input label='Usuario' name='username' type='email' />
            <Input label='Senha' name='password' type='password' />
            <ErrorMessage error={state.error} />
            <FormButton />
        </form>
    );
};

export default LoginForm;