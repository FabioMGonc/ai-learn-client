import { getRecentSessions, getTutors } from "@/actions/tutors.actions";
import Title from "./Title";
import TutorList from "./TutorList";

const RecentSection = async () => {
    const tutors = await getTutors({ limit: 3 });
    // const recentSessions = await getRecentSessions();
    
    return (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card lg:col-span-8">
                <Title headingStart="Sessões" headingEnd="recentes" subtext="Algumas de suas ultimas conversas. Pronto para continuar aprendendo?" />
                <div className="mt-6"> 
                    <TutorList tutors={tutors}/>
                </div>

            </div>
        </section>
    );
}

export default RecentSection;
