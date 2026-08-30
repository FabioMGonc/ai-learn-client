"use client"
import { getSubjectTheme } from "@/lib/utils";
import Image from "next/image";
import { Icon, Loader2, MessageSquare, Mic, MicOff, Phone, PhoneOff, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface TutorProps extends Pick<Tutor, "id" | "name" | "topic" | "subject" | "duration"> {
    tutorId: string;
    userName: string;
    userImage: string;
    style: string;
    voice: string;
}

const TutorComponent = ({ tutorId, subject, topic, name, userName, userImage, style, voice }: TutorProps) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([])

    const { Icon, accent: { "bg-primary": bgPrimary, } } = getSubjectTheme(subject)

    useEffect(() => {
        const handleStart = async () => {
        }
        const handleEnd = () => {
        }

        const handleMessage = (msg: any) => {
        }
    }, [tutorId])

    const handleToggleMute = () => {
    }

    const handleConnection = () => {
    }

    return (
        <div className="space-y-6 max-w-4xl p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border bg-card text-card-foreground">
                <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl flex items-center justify-center shadow-sm opacity-80 bg-background/50">
                        <Icon className="size-6 text-zinc-800" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-zinc-800 tracking-tight">{name}</h2>
                        <p className="text-sm text-zinc-700 capitalize">{subject} • {topic}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-zinc-300 px-4 py-2 rounded-xl border">
                    {
                        userImage ? (
                            <Image src={userImage} alt={userName} width={32} height={32} className="rounded-lg object-cover" />
                        ) : (
                            <div className="size-8 rounded-lg bg-gray-200 flex items-center justify-center">
                                <User className="size-4 text-gray-500" />
                            </div>
                        )
                    }
                    <span className="text-md font-medium text-zinc-800">{userName}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Button
                    onClick={handleToggleMute}
                    disabled={isConnected}
                    variant="outline"
                    size="lg"
                    className="rounded-xl bg-blue-300 text-black">
                    {
                        isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />
                    }{isMuted ? "Ativar" : "Silenciar"}
                </Button>
                <Button
                    className="rounded-xl"
                    variant={isConnected ? "destructive" : "default"}
                    size="lg"
                    onClick={handleConnection}
                    disabled={isLoading}>
                    {
                        isLoading ? <Loader2 className="size-4 animate-spin" /> : isConnected ? <PhoneOff className="size-4" /> : <Phone className="size-4" />
                    }
                    {
                        isLoading ? "Connecting..." : isConnected ? "Encerrar" : "Conectar"
                    }
                </Button>
            </div>
            <div className="p-6 rounded-2xl border bg-card/60">
                <div className="flex items-center gap-2 border-b pb-3 mb-4 text-zinc-700">
                    <MessageSquare className="size-6" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Transcrição ao vivo</h3>
                </div>
                <div className="space-y-3 max-h-60 overflow-y-auto text-zinc-700 pr-1 no-scrollbar">
                    {
                        messages.length === 0 ? (
                            <p>Comece a conversar e verá as mensagens aqui.</p>
                        ) : (
                            messages.map((msg, idx) => {
                                const isTutor = msg.role === "assistant"
                                return (
                                    <div key={idx} className={`max-w[85%] rounded-xl p-3 text-sm border ${isTutor ? "bg-muted text-zinc-100/95 border-border" : "bg-primary text-white border-transparent"}`}>
                                        <span>
                                            { 
                                                isTutor ? name.split(" ")[0] : userName
                                            };
                                        </span>
                                        <p className="loading-relaxed">{msg.content}</p>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default TutorComponent;
