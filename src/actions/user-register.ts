"use server";

import { USER_REGISTER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export default async function userRegisterPost(state: {}, formData: FormData) {
  const firstname = formData.get("firstname") as string | null;
  const lastname = formData.get("lastname") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;
  console.log(
    "Aqui na action server userRegisterPost",
    firstname,
    lastname,
    email,
    password
  );

  try {
    if (!firstname || !lastname || !email || !password)
      throw new Error("Preencha os dados.");
    if (password.length < 6)
      throw new Error("A senha deve ter mais de 6 dígitos.");
    const { url } = USER_REGISTER_POST();
    console.log(url);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });
    if (!response.ok) throw new Error("Email ou usuário já cadastrado.");
    const { ok } = await login({ ok: true, error: "" }, formData);
    if (!ok) throw new Error("Error ao logar.");
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
