'use server';

import { cookies } from 'next/headers';

export async function login(username: string, password: string) {
  try {
    const response = await fetch('https://localhost:7269/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    cookies().set({
      name: 'token',
      value: data.accessToken,
      httpOnly: true,
      secure: true,
    })
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}