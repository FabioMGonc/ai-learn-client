"use client"

import { getSubjectTheme } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowRight, Clock3, Heart } from "lucide-react";
import { Badge } from "../ui/badge";


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
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{background: accent}}>
                            <Icon className="size-5 text-white" />
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={toogleFavorite} className="absolute right-2 top-2 size-7 rounded-full bg-card">
                        <Heart className={`size-4 ${favorited ? "text-white fill-current" : "text-muted-foreground"}`} />
                    </Button>
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                    <Badge variant="default" className="mb-2 w-fit text-[10px] font-semibold uppercase tracking-wider bg-linear-to-r from-[#10A0F0] to-[#0040A0] ">
                        {safeSubject}
                    </Badge>
                    <h3 className="line-clamp-1 text-base font-semibold  text-zinc-700">{name}</h3>
                    <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600">{topic}</p>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3">
                    <div className="flex items-center gap-1.5 text-xs font-mediumtext-zinc-700">
                        <Clock3 className="size-3.5 text-zinc-700" />
                        <span className="text-zinc-600">{duration} minutos</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-zinc-700 transition-transform duration-300 group-hover:translate-x-0.5">
                        <span className="text-zinc-600">Começar agora</span>
                        <ArrowRight className="size-3.5" />

                    </div>
                </div>
            </article>
        </Link>
    );
}

export default TutorsCard;
