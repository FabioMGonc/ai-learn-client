import Title from "@/components/general/Title";
import TutorList from "@/components/general/TutorList";
import { dummyTutors, FAVORITE_TUTORS, RECENT_SESSIONS, USER_SESSIONS } from "@/constants";
import { currentUser } from "@clerk/nextjs/server";
import { BookOpen, GraduationCap, Heart, Icon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";


const MyProgress = async () => {
    const user = await currentUser();
    if (!user) redirect("/sign-in");

    const tutors = dummyTutors;
    const sessions = USER_SESSIONS;
    const favorites = FAVORITE_TUTORS;
    const recentSessions = RECENT_SESSIONS;

    const stats = [
        { label: "Sessões", value: sessions.length, icon: BookOpen },
        { label: "Professores", value: tutors.length, icon: GraduationCap },
        { label: "Favoritos", value: favorites.length, icon: Heart },
    ];

     const sections = [
        {
            key: "Favoritos",
            data: favorites,
            headingStart: "Professores",
            headingEnd: "favoritos",
            subtext: `${favorites.length} professor ${favorites.length === 1 ? "" : "s"} que voce salvou para aprender mais tarde.`,
        },
        {
            key: "Recentes",
            data: sessions,
            headingStart: "Sessões",
            headingEnd: "Recentes",
            subtext: "Suas sessões recentes de aprendizado.",
        },
        {
            key: "Professores",
            data: tutors,
            headingStart: "Meus",
            headingEnd: "Professores",
            subtext: `${tutors.length} professores ${tutors.length === 1 ? "" : "s"} que você criou, prontos ao seu lado onde quer que esteja aprendendo.`,
        },
    ];
    
    return (
        <main className="page min-h-[90vh] grid gap-12 lg:grid-cols-[400px_1fr] lg:items-start lg:gap-16">
            <aside className="min-w-0 space-y-4 lg:sticky lg:top-6">
                {/* Lado esquerdo */}
                <div className="card flex flex-col items-center text-center">
                    <div className="mx-auto mb-4 size-20 rounded-full bg-linear-to-br from-[#10A0F0] to-[#0040A0] p-0.75">
                        <Image className="size-full rounded-full border-2 border-background object-cover" loading="eager" src={user.imageUrl} alt={user.firstName || "User"} width={80} height={80} />
                    </div>
                    <h1 className="text-black">{user.firstName} {user.lastName}</h1>
                    <p className=" text-black">
                        Email: {user.emailAddresses?.[0]?.emailAddress ?? "Sem email"}
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-1 sm:gap-3">
                    {stats.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="stat-card text-center px-2 py-4 sm:p-6 lg:px-3 lg:py-6">
                            <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="size-8 text-primary" />
                            </div>
                            <p className="text-xl font-bold">{value}</p>
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-00">{label}</p>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Lado direito */}
            <section className="min-w-0 mt-2.5 space-y-10">
                {
                    sections.map(({ key, data, headingStart, headingEnd, subtext }) => (
                        <div key={key} className="card">
                            <Title headingStart={headingStart} headingEnd={headingEnd} subtext={subtext} />
                            <div className="mt-6">
                                <TutorList tutors={data} />
                            </div>
                        </div>)
                    )
                }
            </section>
        </main>
    );
}

export default MyProgress;
