import { Category, Billboard } from "@/types";

// Função para gerar IDs únicos (pode variar de acordo com a sua lógica real)
function generateId(): string {
    return Math.random().toString(36).substr(2, 9);
}

// Função para obter as categorias
export default function getCategory(): Category[] {
    const fictitiousCategories: Category[] = [
        {
            id: generateId(),
            name: "Electronics",
            billboard: {
                id: generateId(),
                label: "Latest Electronics",
                imageUrl: "/images/electronics.jpg",
            },
        },
        {
            id: generateId(),
            name: "Clothing",
            billboard: {
                id: generateId(),
                label: "Trendy Clothing",
                imageUrl: "/images/clothing.jpg",
            },
        },
        {
            id: generateId(),
            name: "Books",
            billboard: {
                id: generateId(),
                label: "Bestselling Books",
                imageUrl: "/images/books.jpg",
            },
        },
        // Adicione mais categorias conforme necessário
    ];

    return fictitiousCategories;
}
