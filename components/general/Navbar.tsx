import Link from "next/link";
import NavItens from "./NavItens";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="absolute top-0 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div>
                <Link href="/" >
                    <div>
                        <Image className="object-contain" src="/logo.png" loading="eager" alt="Logo IA Learn" width={80} height={80} />
                    </div>
                </Link>
                <div className="flex flex-1 items-center justify-center overflow-x-auto px-1 sm:px-4">
                    <NavItens> 
                    </NavItens>
                </div>

                <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-6">
                    <Button className="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider bg-blue-600 text-slate-900 hover:bg-blue-400 sm:px-4 sm:py-2 sm:text-xs cursor-pointer"> Entrar </Button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
