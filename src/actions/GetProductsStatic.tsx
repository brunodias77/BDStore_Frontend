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
                    url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081542150",
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