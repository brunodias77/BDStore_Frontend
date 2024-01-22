export default function InfoNavBar() {
    return (
        <div className=" text-white  bg-[#4e4e4e] w-full uppercase text-sm font-bold">
            <div className="container flex items-center justify-between mx-auto">
                <span>Grande oportunidade no liquida total</span>
                <span>Produtos com ate <span className="text-green_600 text-xl ">50% OFF</span></span>
                <button className="bg-green_600 px-5 uppercase rounded">Aproveite</button>
            </div>
        </div>
    )
}