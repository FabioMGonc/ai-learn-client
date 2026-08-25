import Title from "@/components/general/Title";
import TutorForm from "@/components/general/TutorForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

const NewTutor = () => {
    const canCreate = false;
    return (
        <div className="page min-h-[90vh]  max-w-3xl">
            <div className="card relative overflow-hidden shadow-none pt-12">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-10"></div>
                <Title headingStart="Criar novo" headingEnd="professor" subtext="Crie um novo professor de voz com o seu nome, assunto e voz. Depois, você pode começar a aprender com ele!" />

                <div className="relative w-full mt-6">
                    <div className={!canCreate ? "select-none blur-[5px] pointer-events-none opacity-25" : ""}>
                        <TutorForm />
                    </div>
                    {
                        canCreate && (
                            <div className="absolute inset-0 flex items-center justify-center z-30 bg-background/80 backdrop-blur-[2px] p-6">
                                <div className="w-full max-w-sm card text-center border-border">
                                    <div className="mx-auto mb-4size-14 flex items-center justify-center rounded-2xl bg-amber-500/10 text-blue-300">
                                        <Lock className="size-6 text-zinc-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-base font-bold tracking-tight text-zinc-800">
                                            Seu limite de criaçãofoi atingido
                                        </h2>
                                        <p className="text-xs leading-relaxed text-zinc-700">
                                            Você chegou ao limite de criação de novos professores. Para criar um novo professor, você precisa aumentar seu limite de criação.
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <Link href="/subscription" className="block w-full">
                                            <Button type="button" variant="default" size="lg" className="w-full text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer">
                                                <span className="flex items-center gap-1.5 text-white">Upgrade</span>
                                                <ArrowRight className="size-3.5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
};

export default NewTutor;
