import { getTutorById } from "@/actions/tutors.actions";
import TutorComponent from "@/components/general/TutorComponent";
import { getSubjectTheme } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { ChevronLeft, Clock, Headset, Sparkle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface TutorSessionprops {
    params: Promise<{ id: string }>;
}

const TutorDetails = async ({ params }: TutorSessionprops) => {
    const { id } = await params;

    const tutor = await getTutorById(id);
    if (!tutor?.name) redirect("/tutors");
    const { name, subject, topic, duration } = tutor;

    const user = await currentUser();
    if (!user) redirect("/sign-in");

    return (
        <div className="page mt-20 min-h-[90vh]  max-w-6xl space-y-6">
            <nav className="flex items-center justify-between px-1">
                <Link href="/tutors" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-gray-700 transition-colors">
                    <ChevronLeft className="size-4" />
                    <p>Voltar</p>
                </Link>
                <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500 border-solid border-[1px] border-blue-500/20 text-white">
                    <p>Módulo de {subject}</p>
                </span>
            </nav>
            <div className="relative rounded-2xl border border-gray-200 bg-gray-200 shadow-md overflow-hidden pt-1">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between border-b border-gray-50 bg-gray-50/50 p-6 sm:px-8">
                    <div className="absolute top-0 left-0 right-0 h-0.75 bg-primary"/>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <Headset className="size-6 text-primary" />
                                <h1 className="text-xl font-bold tracking-tight text-zinc-800">{name}</h1>
                            </div>
                            <p className="text-sm font-medium text-gray-500">
                                {topic}
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 5 sm:pl-0 pl-7">
                            <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                <Sparkle className="size-4 text-white/90 animate-pulse" />
                                <span>Aprendizado ao vivo</span>
                            </div>
                            <div className="flex items-center gap-1.5 rounded-full border border-gray-200/50 bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-700">
                                <Clock className="size-4 text-primary" />
                                <span>{duration} minutos</span>
                            </div>
                        </div>
                </header>
                <section className="p-6 sm:p-8 bg-card">
                    <TutorComponent 
                    {...tutor} 
                    tutorId={id} 
                    userName={user.firstName || user.username || "Estudante"}
                    userImage={user.imageUrl || ""}
                    />
                </section>
            </div>
        </div>
    )
};

export default TutorDetails;
