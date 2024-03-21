"use server";
import { USER_LOGIN } from "@/functions/api";
import apiError from "@/functions/api-error";
import { cookies } from "next/headers";

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  console.log("Aqui na funcao server de login ");
  console.log("username: ", username);
  console.log("password: ", password);
  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const { url } = USER_LOGIN();
    console.log("url: ", url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(await response.json());
    if (!response.ok) throw new Error("Senha ou usuário inválidos.");
    const data = await response.json();
    cookies().set("token", data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
