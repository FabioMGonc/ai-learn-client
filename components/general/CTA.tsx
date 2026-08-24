
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <section className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-linear-to-r from-blue-100/50 to-blue-200/30 p-8 shadow-xl shadow-blue-500/5">
            {/* Brilhos decorativos */}
            <div className="absolute -right-16 -top-16 z-0 size-56 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />
            <div className="absolute -bottom-16 -left-16 z-0 size-56 rounded-full bg-sky-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-5">
                <Badge
                    variant="outline"
                    className="w-fit border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600"
                >
                    <Sparkles className="mr-1.5 size-3.5" />
                    Crie seu próprio professor
                </Badge>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    Crie um professor de IA{" "}
                    <br />
                    <span className="bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        do seu jeito
                    </span>
                </h2>

                <p className="text-sm font-medium leading-relaxed text-zinc-700">
                    Escolha o nome, assunto, voz e personalidade do seu professor.
                    Depois, aprenda através de conversas naturais e interativas.
                </p>

                <Link href="/tutors/new" className="mt-2">
                    <Button
                        className="w-full rounded-xl bg-linear-to-r from-[#10A0F0] to-[#0040A0] py-5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:opacity-95 hover:shadow-blue-500/40 active:scale-[0.98] sm:py-6"
                    >
                        Criar meu professor
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default CTA;
