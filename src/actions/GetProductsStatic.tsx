import { Product } from "@/types";

const GetProductsStatic = (): Product[] => {
    const products: Product[] = [
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
            name: "Smartphone",
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
        // Adicione mais produtos conforme necessário
    ];

    console.log(products);


    return products;
};

export default GetProductsStatic;