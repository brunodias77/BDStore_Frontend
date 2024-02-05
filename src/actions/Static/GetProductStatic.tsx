import { Product } from "@/types";
import GetProducts from "../GetProducts";
import GetProductsStatic from "./GetProductsStatic";

const GetProduct = (id_product: string): Product[] => {
    const products = GetProductsStatic();
    const product = products.filter((product) => product.id === id_product);
    return product;
}

export default GetProduct;