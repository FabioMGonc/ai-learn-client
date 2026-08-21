import Title from "./Title";
import TutorList from "./TutorList";
import { dummyTutors, RECENT_SESSIONS } from "@/constants";

const RecentSection = () => {
    const tutors = dummyTutors.slice(3);
    const recentSeason = RECENT_SESSIONS;
    
    return (
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card lg:col-span-8">
                <Title headingStart="Sessões" headingEnd="recentes" subtext="Algumas de suas ultimas conversas. Pronto para continuar aprendendo?" />
                <div className="mt-6">
                    <TutorList />
                </div>

            </div>
        </section>
    );
}

export default RecentSection;
