import { subjects } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { BookOpen } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectTheme = (subject: string) => {
  const safeSubject = subject || "General"
  const data = subjects.find((s) => s.subject.toLowerCase() === safeSubject.toLowerCase());

  return {
    Icon: data?.icon || BookOpen,
    bg: data?.bg || "#F3F4F6",
    accent: data?.accent || "#D1D5DB"
  }
}
