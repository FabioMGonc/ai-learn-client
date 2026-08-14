import { Atom, Calculator, Code2, Landmark, Languages, TrendingUp, type LucideIcon, } from "lucide-react";

// Subjects Background palette for cards and avatars
export const subjects = [
    { subject: "maths", icon: Calculator, bg: "#FFF4E6", accent: "#E8913A" },
    { subject: "economics", icon: TrendingUp, bg: "#E8F4FD", accent: "#4A90D9" },
    { subject: "language", icon: Languages, bg: "#E6F9EE", accent: "#36B37E" },
    { subject: "history", icon: Landmark, bg: "#FDE8EE", accent: "#D94F7B" },
    { subject: "coding", icon: Code2, bg: "#F0E8FD", accent: "#8B5FD9" },
    { subject: "science", icon: Atom, bg: "#E6F5F5", accent: "#2AABB3" },
];

export const voices = {
    male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
    female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "EXAVITQu4vr4xnSDxMaL" },
};

export const dummyTutors: Tutor[] = [
    {
        id: "dummy-1",
        name: "Algebraic Ada",
        subject: "maths" as any,
        topic: "Algebra & Pre-Calculus",
        duration: 15,
        voice: "2BJW5coyhAzSr8STdHbE",
        style: "Patient & step-by-step problem solving",
        author: "demo",
        created_at: "2025-01-15T10:00:00Z",
    },
    {
        id: "dummy-2",
        name: "Fiscal Finn",
        subject: "economics" as any,
        topic: "Micro-Economics & Market Basics",
        duration: 20,
        voice: "EXAVITQu4vr4xnSDxMaL",
        style: "Analytical & conversational",
        author: "demo",
        created_at: "2025-02-10T10:00:00Z",
    },
    {
        id: "dummy-3",
        name: "CodeCraft Kai",
        subject: "coding" as any,
        topic: "JavaScript Fundamentals",
        duration: 25,
        voice: "2BJW5coyhAzSr8STdHbE",
        style: "Hands-on with code examples",
        author: "demo",
        created_at: "2025-03-05T10:00:00Z",
    },
    {
        id: "dummy-4",
        name: "Chronicle Cleo",
        subject: "history" as any,
        topic: "World History — Ancient to Modern",
        duration: 18,
        voice: "ZIlrSGI4jZqobxRKprJz",
        style: "Story-telling & chronological",
        author: "demo",
        created_at: "2025-04-20T10:00:00Z",
    },
    {
        id: "dummy-5",
        name: "Neuro Nova",
        subject: "science" as any,
        topic: "Physics & Everyday Science",
        duration: 20,
        voice: "c6SfcYrb2t09NHXiT80T",
        style: "Curious & experiment-driven",
        author: "demo",
        created_at: "2025-05-12T10:00:00Z",
    },
    {
        id: "dummy-6",
        name: "Lingua Léa",
        subject: "language" as any,
        topic: "English Conversation & Grammar",
        duration: 15,
        voice: "EXAVITQu4vr4xnSDxMaL",
        style: "Friendly & immersive dialogue",
        author: "demo",
        created_at: "2025-06-01T10:00:00Z",
    },
];