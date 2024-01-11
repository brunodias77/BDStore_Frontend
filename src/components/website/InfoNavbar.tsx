export default function InfoNavBar() {
    return (
        <div className="h-6	bg-[#4E4E4E] px-36 py-1 flex items-center justify-between">
            <span className="text-sm text-white	font-semibold	">
                GRANDE OPORTUNIDADE NO LIQUIDA TOTAL
            </span>
            <span className="text-sm text-white	font-semibold	">
                PRODUTOS COM ATE{" "}
                <div className="inline	text-lg	text-[#07ac4f]">50% OFF</div>
            </span>
            <button className="rounded-sm	bg-[#07ac4f] px-5 text-sm font-bold	text-white">
                APROVEITE
            </button>
        </div>
    )
}