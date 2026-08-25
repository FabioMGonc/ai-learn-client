import { Atom, Calculator, Code2, Landmark, Languages, TrendingUp, type LucideIcon, } from "lucide-react";

// Subjects Background palette for cards and avatars
export const subjects = [
    { subject: "matemática", icon: Calculator, bg: "#FFF4E6", accent: "#E8913A" },
    { subject: "economia", icon: TrendingUp, bg: "#E8F4FD", accent: "#4A90D9" },
    { subject: "línguas", icon: Languages, bg: "#E6F9EE", accent: "#36B37E" },
    { subject: "história", icon: Landmark, bg: "#FDE8EE", accent: "#D94F7B" },
    { subject: "programação", icon: Code2, bg: "#F0E8FD", accent: "#8B5FD9" },
    { subject: "ciências", icon: Atom, bg: "#E6F5F5", accent: "#2AABB3" },
];

export const voices = {
    male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
    female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "EXAVITQu4vr4xnSDxMaL" },
};

export const dummyTutors: Tutor[] = [
    {
        id: "dummy-1",
        name: "Algebraic Ada",
        subject: "matemática" as any,
        topic: "Algebra & Cálculos",
        duration: 15,
        voice: "2BJW5coyhAzSr8STdHbE",
        style: "Patient & step-by-step problem solving",
        author: "demo",
        created_at: "2025-01-15T10:00:00Z",
    },
    {
        id: "dummy-2",
        name: "Fiscal Finn",
        subject: "economia" as any,
        topic: "Microeconomia e Noções Básicas de Mercado",
        duration: 20,
        voice: "EXAVITQu4vr4xnSDxMaL",
        style: "Analytical & conversational",
        author: "demo",
        created_at: "2025-02-10T10:00:00Z",
    },
    {
        id: "dummy-3",
        name: "CodeCraft Kai",
        subject: "programação" as any,
        topic: "JavaScript e seus fundamentos",
        duration: 25,
        voice: "2BJW5coyhAzSr8STdHbE",
        style: "Hands-on with code examples",
        author: "demo",
        created_at: "2025-03-05T10:00:00Z",
    },
    {
        id: "dummy-4",
        name: "Chronicle Cleo",
        subject: "história" as any,
        topic: "História Mundial — Da Antiguidade aos Dias Atuais",
        duration: 18,
        voice: "ZIlrSGI4jZqobxRKprJz",
        style: "Story-telling & chronological",
        author: "demo",
        created_at: "2025-04-20T10:00:00Z",
    },
    {
        id: "dummy-5",
        name: "Neuro Nova",
        subject: "ciências" as any,
        topic: "Física e Ciência no Dia a Dia",
        duration: 20,
        voice: "c6SfcYrb2t09NHXiT80T",
        style: "Curious & experiment-driven",
        author: "demo",
        created_at: "2025-05-12T10:00:00Z",
    },
    {
        id: "dummy-6",
        name: "Lingua Léa",
        subject: "línguas" as any,
        topic: "Conversação e Gramática em Inglês",
        duration: 15,
        voice: "EXAVITQu4vr4xnSDxMaL",
        style: "Friendly & immersive dialogue",
        author: "demo",
        created_at: "2025-06-01T10:00:00Z",
    },
];

export const RECENT_SESSIONS: Tutor[] = [
    dummyTutors[0],
    dummyTutors[1],
    dummyTutors[2],
];

export const USER_SESSIONS: Tutor[] = [
];

export const USER_TUTORS: Tutor[] = [
    dummyTutors[0],
    dummyTutors[1],
    dummyTutors[2],
    dummyTutors[3],
    dummyTutors[4],
    dummyTutors[5],
];

export const FAVORITE_TUTORS: Tutor[] = [
    dummyTutors[4],
    dummyTutors[5],
];