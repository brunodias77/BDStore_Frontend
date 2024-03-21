"use client";
import { useState } from 'react';
import ArrowRigth from '@/components/Icons/arrow-right';
import OpenPadlock from '@/components/Icons/open-padlock';
import Input from "@/components/Ui/Input";
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/actions/login';
import Button from '@/components/Ui/Button';
import IconButton from '@/components/Ui/IconButton';
import ErrorMessage from '@/helpers/error-message';

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button className=" w-full text-center bg-green_600 p-3" disabled={pending}>Enviando...</Button>
            ) : (
                <Button className=" w-full text-center bg-green_600 p-3">Login</Button>
            )}
        </>
    );
}

const RegisterForm = () => {
    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null,
    });
    console.log(state);

    return (
        <form action={action} className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="px-5 py-7">
                        <Input label='Usuario' name='username' type='text' />
                        <Input label='Senha' name='password' type='password' />
                        <ErrorMessage error={state.error} />
                        <FormButton />
                        {/* <button
                            type="button"
                            className="transition duration-200 bg-green_300 hover:bg-green_600 focus:bg-green_600 focus:shadow-sm focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            onClick={handleSubmit}
                        >
                            <span className="inline-block mr-2">Login</span>
                            <ArrowRigth />
                        </button> */}
                    </div>
                    <div className="py-5 flex flex-col">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <OpenPadlock />
                            <span className="inline-block ml-1">
                                Esqueceu a senha ?
                            </span>
                        </button>
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <span className="inline-block ml-1">Não tem cadastro? cadastre-se</span>
                        </button>
                    </div>
                </div>
            </div>
        </ form>
    )
}

export default RegisterForm
