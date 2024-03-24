import { Product } from "@/types";
import ProductCard from "@/components/product/Product-Card";
import NoResults from "../ui/No-Results";

interface ProductListProps {
    title: string;
    items: Product[] | null;
}

const ProductList: React.FC<ProductListProps> = ({
    title, items
}) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-2xl text-black_700">{title}</h3>
            {items && items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items && items.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;