'use server';
import { cookies } from 'next/headers';
import { USER_LOGIN } from "@/functions/api";

export async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  console.log(`Aqui no componente login ${username} ${password} `);
  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const { url } = USER_LOGIN();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    console.log(response);
    if (!response.ok) throw new Error("Senha ou usuário inválidos.");
    const data = await response.json();
    console.log(data);
    cookies().set({
      name: 'token',
      value: data.accessToken,
      httpOnly: true,
      secure: true,
    })
    return { data: null, ok: true, error: "" };
  } catch (err) {
    console.log(err);
    return { data: null, ok: false, error: "Nao foi possivel fazer o login" };

  }
}