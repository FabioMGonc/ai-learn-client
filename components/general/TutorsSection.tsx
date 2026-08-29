
import Title from "./Title";
import TutorsCard from "./TutorsCard";
import { getTutors } from "@/actions/tutors.actions";

const TutorsSection = async () => {
    const tutors = await getTutors({ limit: 3 });
    return (
        <section className="space-y-6">
            <Title headingStart="Professores" headingEnd="populares" subtext="Aprenda com os melhores e melhores tutores de voz. Conheça os professores que você adora e que estão sempre em busca de novos conhecimentos." hasAction="Ver Todos" linkTo="/tutors" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {
                    tutors.map((tutor, index) => {
                        return (
                            <div key={tutor.id} >
                                <TutorsCard {...tutor} index = {index} />
                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
}

export default TutorsSection;
