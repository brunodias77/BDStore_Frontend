import InfoNavBar from "./InfoNavbar";
import NavBar from "./NavBar";
import { login } from "@/actions/login";


export default async function Header() {
    const user = await login("bruno@teste.com", "Teste@123");
    return (
        <header className="w-full mx-auto top-0 left-0 right-0 bg-opacity-100">
            <InfoNavBar />
            <NavBar />
        </header>
    )
}