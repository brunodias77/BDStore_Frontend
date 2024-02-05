import Container from "@/components/Ui/Container";
import getBillboardStatic from "@/actions/Static/GetBillboardStatic";
import Billboard from "@/components/website/Billboard";
import GetProductsStatic from "@/actions/Static/GetProductsStatic";
import ProductList from "@/components/website/ProductList";

export const revalidate = 0;
const HomePage = () => {
    const products = GetProductsStatic();
    const billboards = getBillboardStatic();
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    );
};
export default HomePage;