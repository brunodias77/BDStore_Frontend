import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../public/BDStore.png"
import MainNav from "./MainNav.";
import Container from "../Ui/Container";
import GetCategory from "@/actions/GetCategory";

export const revalidate = 0;

const NavBar = async () => {
    const categories = await GetCategory();
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    <Link href="/">
                        <Image src={LogoImg} alt="Picture of the author" height={60} />
                    </Link>
                    <MainNav data={categories} />
                </div>
            </Container>
        </div>
    )
}
export default NavBar;