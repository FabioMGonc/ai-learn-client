"use client"
import { useEffect, useState } from "react";

interface TutorProps extends Pick<Tutor, "id" | "name" | "topic" | "subject" | "duration"> {
    tutorId: string;
    userName: string;
    userImage: string;
    style: string;
    voice: string;
}


const TutorComponent = ({ tutorId, userName, userImage, topic, subject, name, style, voice }: TutorProps) => {
    
    const [ isConected, setIsConnected ] = useState(false);
    const[ isLoading, setIsLoading ] = useState(false);
    const [ isMuted, setIsMuted ] = useState(false);
    const [ messafes, setMessages ] = useState<{role: string, content: string}[]>([]);

    useEffect(() => {
    }, [tutorId]);

    const handleToggleMuted = () => {

    };
    const handleConection = () => {

    };
    
    const handleSendMessage = () => {  
    };

    return (
        <div className="space-y-4 max-w-4xl p-4"></div>
    )
};

export default TutorComponent;
