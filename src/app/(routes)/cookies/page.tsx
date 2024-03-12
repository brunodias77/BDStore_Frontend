"use client"
import { setCookie } from '@/actions/set-cookie';
import React from 'react';

const CookiesPage = () => {
    const [valor, setValor] = React.useState('');
    async function handleClick() {
        const response = await setCookie('segredo', '123456');
        setValor(response.value);
    }

    return (
        <main>
            <h1>Home: {valor}</h1>
            <button onClick={handleClick} className='bg-green-400 p-2 m-2 rounded'>Definir Cookie</button>
        </main>
    );
};

export default CookiesPage;