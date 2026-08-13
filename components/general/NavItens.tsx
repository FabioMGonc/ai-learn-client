"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "Tutores", href: "/tutors" },
    { name: "Meu Progresso", href: "/my-progress" },
];
const NavItens = () => {
    const pathname = usePathname();

    return (
        <div className="hidden gap-2 sm:flex sm:gap-6">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600 hover:scale-90 transition-all duration-500 ${
                            isActive
                                ? "text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8"
                                : "text-gray-900 hover:bg-blue-500/10"
                        }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </div>
    );
}

export default NavItens;
