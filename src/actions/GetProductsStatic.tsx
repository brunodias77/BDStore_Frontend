import { Product } from "@/types";

const GetProductsStatic = (): Product[] => {
    const products: Product[] = [
        // Objeto 1
        {
            id: "1",
            category: {
                id: "101",
                name: "Electronics",
                billboard: {
                    id: "1001",
                    label: "Best Deals",
                    imageUrl: "electronic-deals.jpg",
                },
            },
            name: "Camiseta Levi's Graphic Set in Neck Azul Manga Curta",
            price: "599.99",
            isFeatured: true,
            size: {
                id: "201",
                name: "Medium",
                value: "M",
            },
            color: {
                id: "301",
                name: "Black",
                value: "#000000",
            },
            images: [
                {
                    id: "10001",
                    url: "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=1403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: "10002",
                    url: "smartphone-image2.jpg",
                },
            ],
        },
        // Objeto 2
        {
            id: "2",
            category: {
                id: "102",
                name: "Clothing",
                billboard: {
                    id: "1002",
                    label: "New Arrivals",
                    imageUrl: "clothing-deals.jpg",
                },
            },
            name: "Calça Jeans Slim Fit",
            price: "129.99",
            isFeatured: false,
            size: {
                id: "202",
                name: "Large",
                value: "L",
            },
            color: {
                id: "302",
                name: "Blue",
                value: "#3498db",
            },
            images: [
                {
                    id: "10003",
                    url: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: "10004",
                    url: "jeans-image2.jpg",
                },
            ],
        },
        // Objeto 3
        {
            id: "3",
            category: {
                id: "103",
                name: "Beauty",
                billboard: {
                    id: "1003",
                    label: "Top Picks",
                    imageUrl: "beauty-deals.jpg",
                },
            },
            name: "Perfume Floral Elegance",
            price: "79.99",
            isFeatured: true,
            size: {
                id: "203",
                name: "Small",
                value: "S",
            },
            color: {
                id: "303",
                name: "Pink",
                value: "#ff77a9",
            },
            images: [
                {
                    id: "10005",
                    url: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: "10006",
                    url: "perfume-image2.jpg",
                },
            ],
        },
        // Objeto 4
        {
            id: "4",
            category: {
                id: "104",
                name: "Home",
                billboard: {
                    id: "1004",
                    label: "Home Essentials",
                    imageUrl: "home-deals.jpg",
                },
            },
            name: "Conjunto de Toalhas de Banho",
            price: "39.99",
            isFeatured: false,
            size: {
                id: "204",
                name: "Extra Large",
                value: "XL",
            },
            color: {
                id: "304",
                name: "White",
                value: "#ffffff",
            },
            images: [
                {
                    id: "10007",
                    url: "https://images.unsplash.com/photo-1639298109207-5a9ccc254481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: "10008",
                    url: "towels-image2.jpg",
                },
            ],
        },
        // Objeto 5
        {
            id: "5",
            category: {
                id: "105",
                name: "Sports",
                billboard: {
                    id: "1005",
                    label: "Fitness Gear",
                    imageUrl: "sports-deals.jpg",
                },
            },
            name: "Tênis de Corrida AirFlex",
            price: "199.99",
            isFeatured: true,
            size: {
                id: "205",
                name: "US 10",
                value: "10",
            },
            color: {
                id: "305",
                name: "Gray",
                value: "#808080",
            },
            images: [
                {
                    id: "10009",
                    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                    id: "10010",
                    url: "shoes-image2.jpg",
                },
            ],
        },
    ];

    console.log(products);



    return products;
};

export default GetProductsStatic;