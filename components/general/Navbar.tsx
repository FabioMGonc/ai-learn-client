import Link from "next/link";
import NavItens from "./NavItens";
import Image from "next/image";
import { Button } from "../ui/button";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className="absolute top-0 w-full border-b border-gray-100 bg-white backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
                <Link href="/" className="flex shrink-0 items-center gap-1">
                    <div className="flex shrink-0 items-center justify-center rounded-xl overflow-hidden">
                        <Image className="object-contain" src="/logo.png" loading="eager" alt="Logo IA Learn" width={80} height={80} />
                    </div>
                </Link>
                <div className="flex flex-1 items-center justify-center overflow-x-auto px-1 sm:px-4">
                    <NavItens />
                </div>

                <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-6">
                    <Show when="signed-out">
                        <SignUpButton mode="modal">
                            <Button className="default"> Cadastrar / Entrar </Button>
                        </SignUpButton>
                       
                    </Show>
                        <Show when="signed-in">
                            <UserButton appearance={{elements: {avatarBox: "size-8 sm-size-10"}}}></UserButton>
                        </Show>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
