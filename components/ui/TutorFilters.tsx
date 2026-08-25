"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Title from "../general/Title";
import { Search, X } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import {  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { subjects } from "@/constants";

const TutorFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const subject = searchParams.get("subject") || "all";
    const topic = searchParams.get("topic") || "";
    const [ query, setQuery ] = useState(topic);
    const isFirstRender = useRef(true);

    useEffect(() => {
        setQuery(topic);
    }, [topic]);

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        
        const timer = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if(query) {
                params.set("topic", query);
            } else {
                params.delete("topic");
            }
            router.replace(`/tutors?${params.toString()}`, { scroll: false });
        }, 500);
        return () => clearTimeout(timer);
    }, [query]);

    const handleSubjectChange = (value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());

        if(!value || value === "all") {
            params.delete("subject");
            params.delete("topic");
            setQuery("");
        } else {
           params.set("subject", value);
        }
        router.replace(`/tutors?${params.toString()}`, { scroll: false });
    }

    const clearSearch = () => {
        setQuery("");
        const params = new URLSearchParams(searchParams.toString());
        params.delete("topic");
        router.replace(`/tutors?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col gap-6">
            <Title headingStart="Procure" headingEnd="professores" subtext="Filtre suas buscas para encontrar os melhores professores disponíveis para você"/>
            <div className="flex flex-col gap-4">
                <div className="relative flex items-center">
                    <Search className="absolute left-3 size-4 text-gray-700 pointer-events-none" />
                    <Input className="w-full pl-9 pr-10 bg-background border-border text-zinc-700 shadow-none focus-visible:ring-1 focus-visible:ring-primary/20 transition-all" placeholder="Pesquisar por assunto" value={query} onChange={(e) => setQuery(e.target.value)} />
                    {
                        query && (
                            <Button 
                                type="button"
                                variant="ghost" 
                                className="absolute  right-1 size-7 text-gray-700 hover:text-zinc-700/55 hover:bg-zinc-700/15 cursor-pointer" 
                                onClick={clearSearch}
                            >
                                <X className="size-4 bg-transparent text-gray-700" />

                            </Button>
                        )
                    }
                </div>

                <Select onValueChange={handleSubjectChange} value={subject}>
                    <SelectTrigger className="w-full capitalize bg-zinc-300/90  text-zinc-700">
                        <SelectValue placeholder="Todos os assuntos" />
                    </SelectTrigger>
                    <SelectContent className={"border-border shadow-none"}>
                        <SelectItem value={"Todos Assuntos"} className={"bg-blue-300 text-zinc-700 capitalize cursor-pointer"}>
                            <p>Todos os assuntos</p>
                        </SelectItem>
                        <SelectGroup className="bg-blue-300">
                            {subjects.map((item) => (
                                <SelectItem key={item.subject} value={item.subject} className={"capitalize text-zinc-700 cursor-pointer"}>
                                    {item.subject}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}

export default TutorFilters;
