"use server"
import supabaseClient from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";


export const createTutor = async (tutorData: CreateTutorDto) => {
    const { userId: author } = await auth()
    const supabase = supabaseClient();
    
    if (!author) throw new Error("Usuário não autenticado!");

    const { data, error } = await supabase.from("tutors").insert({...tutorData, author}).select();

    if (error || !data) throw new Error(error?.message || "Erro ao criar o tutor");

    return data[0];
}

export const getTutors = async ({ limit = 10, page = 1, subject, topic }: GetTutorsParams) => {
    const { userId } = await auth()
    const supabase = supabaseClient();
    
    if (!userId) throw new Error("Usuario nao autenticado!");


    let query = supabase.from("tutors").select();

    if (subject && topic) {
        query = query.ilike("subject", `%${subject}`).or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if (subject) {
        query = query.ilike("subject", `%${subject}%`)
    } else if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: tutors, error} = await query;

    if (error) throw new Error(error.message);

    if (tutors && tutors.length > 0) {
        const { data: favorites } = await supabase.from("favorites").select("tutor_id").eq("user_id", userId).in("tutor_id", tutors.map(tutor => tutor.id));

        const favoriteIds = new Set(favorites?.map(favorite => favorite.tutor_id) || []);

        return tutors.map(tutor => {
            return {
                ...tutor,
                favorite: favoriteIds.has(tutor.id)
            }
        })
    }
    return tutors?.map((tutor): Tutor => ({...tutor, favorite: false})) || [];
}


