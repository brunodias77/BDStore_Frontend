"use server";
import { PRODUCTS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";

export interface Product {
  name: string;
  description: string;
  active: boolean;
  value: number;
  dateAdded: Date;
  image: string;
  stock: number;
  id: string;
  domainEvents: any[] | null; // You can adjust the type as per your requirements
}

export default async function productsGet() {
  try {
    const { url } = PRODUCTS_GET();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error("Erro ao pegar os produtos.");
    const data = (await response.json()) as Product[];
    return { data, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
