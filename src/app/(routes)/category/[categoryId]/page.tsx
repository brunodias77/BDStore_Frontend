import GetCategoryStatic from "@/actions/Static/GetCategoryStatic";
import GetProductsStatic from "@/actions/Static/GetProductsStatic";
import Container from "@/components/Ui/Container";
import ProductCard from "@/components/Ui/ProductCard";
import Billboard from "@/components/website/Billboard";
import Filter from "./components/Filter";
import GetSizesStatic from "@/actions/Static/GetSizesStatic.";
import GetColorsStatic from "@/actions/Static/GetColorsStatic";
import NoResults from "@/components/Ui/NoResults";
import MobileFilters from "./components/MobileFilters";

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
    const category = GetCategoryStatic(params.categoryId);
    const sizes = GetSizesStatic();
    const colors = GetColorsStatic();
    return (
        <div className="bg-white">
            <Container>
                {category && <Billboard data={category.billboard} />}
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                            <Filter valueKey="colorId" name="Colors" data={colors} />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;