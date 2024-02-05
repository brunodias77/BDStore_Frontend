import GetProductsStatic from "@/actions/Static/GetProductsStatic";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    params,
    searchParams
}) => {
    const products = GetProductsStatic({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });
    return (
        <div>
            Category
        </div>
    )
}

export default CategoryPage;