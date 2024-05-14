import Image from "next/image";


export default function Header() {
    return (
        <div className="w-full h-32 px-[72px] py-8 bg-emerald-600 justify-between items-center inline-flex">
            <div className="justify-center items-center gap-2 flex">
                <Image
                    src="/tree.svg"
                    alt="Logo Tree"
                    width={48}
                    height={48}
                    priority
                />
                <div className="text-white text-[32px] font-bold font-inter">LandCharms</div>
            </div>
            <div className="justify-center items-center gap-8 flex">
                <div className="text-white text-[32px] font-medium font-inter">Compre</div>
                <div className="text-white text-[32px] font-medium font-inter">Venda</div>
                <Image
                    src="/person.svg"
                    alt="user-icon"
                    width={48}
                    height={48}
                    priority
                />
            </div>
        </div>
    );
}