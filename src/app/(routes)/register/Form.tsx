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
                <Button >Registrar</Button>
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
        <form action={action} className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <Input label='Primeiro Nome' name='firstname' type='text' />
                        <Input label='Ultimo Nome' name='lastname' type='text' />
                        <Input label='Email' name='email' type='email' />
                        <Input label='Senha' name='password' type='password' />
                        <ErrorMessage error={state.error} />
                        <FormButton />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;


