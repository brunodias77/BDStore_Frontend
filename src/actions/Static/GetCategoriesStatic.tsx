import { Category, Billboard } from "@/types";

export default function getCategories(): Category[] {
    const fictitiousCategories: Category[] = [
        {
            id: "1",
            name: "Electronics",
            billboard: {
                id: "1",
                label: "Latest Electronics",
                imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        },
        {
            id: "2",
            name: "Clothing",
            billboard: {
                id: "2",
                label: "Trendy Clothing",
                imageUrl: "/images/clothing.jpg",
            },
        },
        {
            id: "3",
            name: "Books",
            billboard: {
                id: "3",
                label: "Bestselling Books",
                imageUrl: "/images/books.jpg",
            },
        },
        // Adicione mais categorias conforme necessário
    ];

    return fictitiousCategories;
}
