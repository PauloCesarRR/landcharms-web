import Image from "next/image";


export default function Footer() {
    return (
        <div className="w-full h-16 px-16 py-8 bg-emerald-600 justify-center gap-4 items-center inline-flex">
            <Image
                src="/tree.svg"
                alt="Logo Tree"
                width={32}
                height={32}
                priority
            />
            <div className="text-white text-lg font-semibold font-inter">LandCharms</div>
           
        </div>
    );
}