import InfoNavBar from "./InfoNavbar";
import NavBar from "./NavBar";


export default function Header() {
    return (
        <header className="w-full mx-auto top-0 left-0 right-0 bg-opacity-100">
            <InfoNavBar />
            <NavBar />
        </header>
    )
}