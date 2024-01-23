import Link from "next/link";
import Image from "next/image";
import LogoImg from "../../../public/BDStore.png"
import { UserIcon } from "../Icons/user-icon";
import { HeartIcon } from "../Icons/heart-icon";
import { CartIcon } from "../Icons/cart-icon";
import { SearchIcon } from "../Icons/search-icon";

const NavBar = () => {
    return (
        <div className="px-36 flex items-center justify-between">
            <div className="bg-[#f3f5f6] rounded-lg	py-2 px-4 flex gap-1 items-center justify-between ">
                <input
                    type="text"
                    className="bg-[#f3f5f6] outline-none	text-[#737380]"
                    placeholder="Procurando por algo especifico?"
                />
                <SearchIcon />
            </div>
            <div>
                <Link href="/">
                    <Image src={LogoImg} alt="Picture of the author" height={60} />
                </Link>
            </div>
            <div className="flex gap-5">
                <UserIcon />
                <HeartIcon />
                <CartIcon />
            </div>
        </div>
    )
}
export default NavBar;