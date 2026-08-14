import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

    const stats = [
    { icon: BookOpen, value: "6+", label: "Assuntos principais", desc: "Matemática, Ciência, Linguística, e muito mais." },
    { icon: ShieldCheck, value: "Zero", label: "AI-lucinações", desc: "Conteúdo verificado e aulas estruturadas." }
    ];
    const steps = [
    { label: "Entender", desc: "A IA ouve e entende sua pergunta", note: "A intenção, o assunto e o nível são identificados." },
    { label: "Verificar", desc: "Os fatos são conferidos com base no currículo", note: "Respostas alinhadas ao conteúdo e adequadas à idade." },
    { label: "Responder", desc: "Explicação clara e falada em tempo real", note: "Voz natural com perguntas de acompanhamento." },
    ];

const HeroSection = () => {
    return (
            <section className="grid gap-10 lg:grid-cols-12 lg:items-start">    
                {/* Lado esquerdo */}
                <div className="space-y-5 m-3 lg:col-span-7">
                <Badge variant="secondary" className="h-8 gap-3 px-3 text-xs font-bold">
                    <Sparkles className="size-3.5 text-primary" />
                    Plataforma de aprendizagem com a tecnologia da IA.
                </Badge>
                <h1 className="text-4xl  text-zinc-800 font-bold tracking-tight sm:text-5xl lg:[3.5rem] lg:leading-[1.05]">
                    Aprenda qualquer coisa com{" "}
                    <span className="bg-linear-to-r from-[#10A0F0] to-[#0040A0] bg-clip-text text-transparent">Professores de Voz com IA</span>
                </h1>
                <p className="max-w-lg text-base leading-relaxed text-zinc-800">
                    Nosssa plataforma conecta você a tutores de voz inteligentes que orientam seu aprendizado por meio de conversas naturais. Estude no seu próprio ritmo, a qualquer momento e em qualquer lugar.
                </p>

                {/* div para os botões */}
                <div className="flex flex-wrap gap-5">
                    <Link href="/tutors">
                    <Button className="rounded-full p-6 sm:p-6 text-base font-semibold shadow-lg shadow-primary/20">
                        Conheça Tutores<ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    </Link>

                    <Link href="/tutors/new">
                    <Button className="bg-popover hover:bg-popover/80 rounded-full p-6 sm:p-6 text-base font-semibold shadow-lg shadow-primary/20">
                        Crie o seu
                    </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                    {stats.map(({ icon: Icon, value, label, desc }) => {
                        return (
                        <div key={label} className="stat-card shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-500 ease-in-out">
                            <div className="mb-6 mt-6 items-center justify-center rounded-lg">
                            <Icon className="ml-4 text-primary" />
                            <p className="text-lg font-bold text-zinc-800">{value}</p>
                            <p className="text-xs text-zinc-600">{label}</p>
                            <p className="text-xs text-zinc-600">{desc}</p>
                            </div>
                        </div>
                        );
                    })}
                </div>
                </div>
                
                {/* Lado direito */}
                <div className="lg:col-span-5 rounded-4xl lg:mt-16 shadow-lg shadow-primary/20">
                <div className="card space-y-5 py-8 ">
                    <div className="">
                    <Badge variant="outline" className="mb-2 text-blue-600 text-[10px] font-bold uppercase tracking-wide shadow">
                        <Sparkles className="mr-1 size-3" />
                        Como Funciona?
                    </Badge>
                    <h2 className="text-xl  text-zinc-700 font-bold tracking-tight sm:text-5xl lg:[3.5rem] lg:leading-[1.05]">
                        Fale. Aprenda. {" "}
                        <span className="bg-linear-to-r from-[#10A0F0] to-[#0040A0] bg-clip-text text-transparent">Melhore.</span>
                    </h2>
                    </div>

                    <div className=" rounded-lg border border-muted-foreground bg-muted-foreground/20 p-2 font-mono text-sm">
                    <span className="font-bold text-zinc-700">Estudante:~$</span>{" "}
                    <span className="text-zinc-500">&quot;Explique a física quântica&quot;</span>
                    </div>
                    <div className="space-y-4 border-l-2 border-border pl-5"> 
                    {steps.map(({label, desc, note}, i) => {
                        return (
                        <div key={i} className="relative">
                            <span className={`absolute -left-6.25 top-1.5 size-2 rounded-full ring-4 ring-background ${ i === 0 ? "bg-primary" : "bg-muted-foreground"}`}
                            />
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${ i === 0 ? "text-primary" : "text-muted-foreground"}`}>{label}</p>
                            <p className="text-zinc-700 mt-0.5 text-sm font-medium">{desc}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{note}</p>
                        </div>
                        )
                    })}
                    </div>
                </div>
                </div>
            </section>
    );
}

export default HeroSection;
