import Container from "@/components/Ui/Container";
import getBillboardStatic from "@/actions/GetBillboardStatic";
import Billboard from "@/components/Billboard";

export const revalidate = 0;
const HomePage = () => {
    const billboards = getBillboardStatic();
    console.log(billboards)
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboards} />
            </div>
        </Container>
    );
};
export default HomePage;