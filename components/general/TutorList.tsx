import { Inbox } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table";


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
                            <TableRow>
                                {columns.map(({label, className}) => (
                                    <TableHead key={label} className={`text[11px] font-semibold uppercase tracking-wider text-zinc-700 ${className}`} />
                                ))}
                            </TableRow>
                        </TableHeader>
                    </Table>

                </div>
            )
            }
        </div>
    );
}

export default TutorList;
