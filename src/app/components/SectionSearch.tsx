import SearchBar from "./SearchBar"

export default function SectionSearch() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-6 bg-black">
            <div className="text-center text-white text-5xl font-bold font-inter">Descubra seu próximo pedaço de Terra</div>
            <div className="w-max text-center text-white text-2xl font-normal font-inter">Ache todos os ranchos, fazendas, chácaras e terras disponivéis para compra</div>
            <SearchBar/>
        </div>
    )
}