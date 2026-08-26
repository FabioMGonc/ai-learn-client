import { ArrowRight, Clock, Inbox } from "lucide-react";
import { getSubjectTheme } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "../ui/badge";


const TutorList = ({tutors=[]}: TutorsListProps) => {
    const hasTutor = tutors.length > 0;
    
    const columns = [
        { label: "Assunto", className: "w-16"},
        { label: "Nome", className: ""},
        { label: "Campo", className: "hidden sm:table-cell"},
        { label: "Tópico", className: "hidden md:table-cell" },
        { label: "Tempo", className: "text-right" }
    ]

    return (
        <div>
            {!hasTutor ?(
                <div className="flex flex-col items-center justify-center py-10 text-center">
                    <Inbox className="mb-3 size-10 text-zinc-700" />
                    <p className="text-sm text-zinc-700/70">Nenhum dado disponível</p>
                </div>
            ) : ( 
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                {columns.map(({label, className}) => (
                                    <TableHead key={label} className={`text-[20px] font-semibold uppercase tracking-wider text-zinc-700 ${className}`} >
                                        <span>{label}</span>
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                tutors.map(({id, subject, name, topic, duration}, index) => {
                                    const safeSubject = subject || "General";
                                    const { Icon, accent } = getSubjectTheme(safeSubject);
                                    return (
                                        <TableRow key={`${id}-${index}`} className="group/row border-border transition-colors hover:bg-[#a6d8f3]">
                                            <TableCell className="py-4 ">
                                                <div className="flex size-9 items-center justify-center rounded-lg transition-transform group-hover/row:scale-105" style={{background: accent}}>
                                                    <Icon className="size-5 text-white" />
                                                </div>
                                            </TableCell>
                                            <TableCell className="max-w-40 truncate py-4 text-sm font-medium text-zinc-700">
                                                <Link href={`/tutors/${id}`} className="inline-flex items-center gap-1.5 text-sm transition-colors text-primary/75">
                                                    <span>{name}</span>
                                                    <ArrowRight className="size-3.5 -translate-x-1 text-primary/50 opacity-0 transition-all group-hover/row:translate-x-0 group-hover/row:opacity-100" />
                                                </Link>
                                            </TableCell>
                                            <TableCell className="hidden py-4 sm:table-cell">   
                                                <Badge variant="secondary" className="text-[14px] font-medium">
                                                    {
                                                        safeSubject.charAt(0).toUpperCase() + safeSubject.slice(1)
                                                    }
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden max-w-60 truncate py-4 text-sm text-zinc-700 md:table-cell">
                                                <span>{topic}</span>
                                            </TableCell>
                                            <TableCell className="align-middle text-right">
                                                <div className="flex items-center justify-end gap-1 text-xs font-medium text-zinc-700">
                                                    <Clock className="size-3.5" />
                                                    <span>{duration} minutos</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default TutorList;
