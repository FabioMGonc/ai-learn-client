import { subjects, voices } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
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
    accent: data?.accent || "bg-primary"
  }
}

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = (voices as any)[voice]?.[style] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Tutor",
    firstMessage:
      "Olá, vamos começar a aula. Hoje vamos discutir sobre {{topic}}.",
    transcriber: {
      provider: "soniox",
      model: "stt-rt-v5",
      language: "en",
    },

    voice: {
      provider: "vapi",
      voiceId: "Elliot",
    },
    model: {
      provider: "openai",
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: `Você é um tutor altamente capacitado conduzindo uma sessão de voz em tempo real com um estudante. Seu objetivo é ensinar o estudante sobre o tópico e a matéria informados.

                    Diretrizes do Tutor:
                    Siga o tópico especificado - {{topic}} e a matéria - {{subject}} e ensine o estudante sobre eles.
                    Mantenha o diálogo fluindo naturalmente enquanto conduz a sessão.
                    Periodicamente, confirme se o estudante está acompanhando e entendendo a explicação.
                    Divida o tópico em partes menores e ensine uma parte de cada vez.
                    Mantenha seu estilo de conversa como {{style}}.
                    Mantenha suas respostas breves, como em uma conversa de voz real.
                    Evite caracteres especiais nas suas respostas, pois esta é uma conversa por voz.
                    Responda sempre em português do Brasil.
              `,
        },
      ],
    },
  };
  return vapiAssistant;
};
