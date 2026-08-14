"use client"

import { getSubjectTheme } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


const TutorsCard = ({ id, name, topic, subject, duration, favorited=false }: TutorCardProps) => {
    const pathname = usePathname();
    const safeSubject = subject || "General";
    const { Icon, bg, accent } = getSubjectTheme(subject);

    const toogleFavorite = () => { }

    return (
        <Link className="group block h-full" href={`/tutors/${id}`}>
            <article className="flex flex-col h-full rounded-4xl border border-border bg-card p-5 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-lg hover:translate-y-0.5">
                <div className="relative">
                    <div className="flex h-16 w-full items-center justify-center rounded-2xl" style={{background: bg}}>

                    </div>
                </div>

            </article>
        </Link>
    );
}

export default TutorsCard;
