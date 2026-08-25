import { dummyTutors } from "@/constants";
import { Compass, Inbox, Plus, Waves } from "lucide-react";
import { Suspense } from "react";
import TutorFilters from "../../components/ui/TutorFilters";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TutorsCard from "@/components/general/TutorsCard";

const TutorsPage = async ({searchParams}: PageProps ) => {
    const filters = await searchParams;
    const tutors = dummyTutors.filter((tutor) => {
        if (filters.subject && filters.subject !== "Todos ") {
            if (tutor.subject !== filters.subject) {
                return false;
            }
        }
        if (filters.topic) {
            const query = filters.topic.toLowerCase();
            const matchName = tutor.name.toLowerCase().includes(query);
            const matchTopic = tutor.topic.toLowerCase().includes(query);

            if (!matchName && !matchTopic) {
                return false;
            }
        }
        return true;
    });

    const hasTutors = tutors.length > 0;

    return (
        <section className="page mt-12 grid min-h-[90vh] gap-12 lg:grid-cols-[380px_1fr] lg:items-start lg:gap-16">
            
            {/* Lado esquerdo */}
            <div className="space-y-8 lg:sticky lg:top-6">
                <div className="card p-6 space-y-4 bg-card border border-gray-100/80 shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100/80 pb-2">
                        <Compass className="size-3.5 text-primary" />
                        <p>Busca de professores</p>
                    </div>
                    <Suspense
                        fallback={<div className="space-y-4">
                            <div className="input h-10 animate-pulse rounded bg-gray-100">
                            </div>
                            <div className="input h-10 w-40 animate-pulse rounded bg-gray-100">
                            </div>
                        </div>}>
                        <TutorFilters />
                    </Suspense>
                    <Link href="/tutors/new" className="flex items-center justify-center gap-2">
                        <Button className="w-full mt-2">
                            <Plus className="size-4" />
                            <p className="text-sm font-medium text-white">Crie um novo professor</p>
                        </Button>
                    </Link>
                </div>
                <div className="hidden lg:flex items-center gap-3 text-xs text-gray-400 font-medium bg-gray-50/80 p-3 rounded-xl border border-gray-100/50">
                    <Waves className="size-4 text-primary animate-pulse" />
                    <span>Execução do sistema ativa. Limpar pipelines do modelo</span>
                </div>
            </div>
            {/* Lado direito */}

            <div>
                {
                    !hasTutors ? (<div className="card py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto border border-dashed border-gray-200 bg-transparent shadow-none">
                        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-secondary text-zinc-800">
                            <Inbox className="size-5 text-white" />
                        </div>
                        <h3 className="text-base font-semibold text-gray-800">Nenhum professor encontrado</h3>
                        <p className="mt-4 text-sm text-gray-500">Não encontramos nenhum professor com os dados informados. Troque as palavras-chave ou crie e customize um novo professor.</p>
                    </div>) : (<div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {
                                tutors.map((tutor, index) => {
                                    return (
                                        <TutorsCard key={tutor.id} {...tutor} index={index} />
                                    )
                                })
                            }
                        </div>
                    </div>)
                }

            </div>
            <div></div>
        </section>
    );
};

export default TutorsPage;
