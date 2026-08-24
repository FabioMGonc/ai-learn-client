"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Title from "../general/Title";

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

    const handleSubjectChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if(value === "all") {
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
        </div>
    );
}

export default TutorFilters;
