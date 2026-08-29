"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Sparkles } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { subjects } from "@/constants";
import { createTutor } from "@/actions/tutors.actions";
import { useRouter } from "next/navigation";


const formSchema = z.object({
    name: z.string().min(2, "O nome do professor é obrigatório"),
    subject: z.string().min(2, "O assunto do professor é obrigatório"),
    topic: z.string().min(2, "O tópico do professor é obrigatório"),
    voice: z.string().min(2, "O vídeo do professor é obrigatório"),
    style: z.string().min(2, "O estilo do professor é obrigatório"),
    duration: z.number().min(2, "O tempo de duração do professor é obrigatório"),
})


const TutorForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    })
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const tutor = await createTutor(data);

        if (!tutor?.id) {
            throw new Error("Tutor criado sem ID");
        }

        router.push(`/tutors/${tutor.id}`);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 sm:p-8">
            <FieldGroup className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="space-y-1.5">
                                <FieldLabel htmlFor="tutor-name" className="text-xs font-bold uppercase tracking-wider text-blue-500">
                                    Nome do professor
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="tutor-name"
                                    className="text-blue-400"
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Ex. Nicola Tesla"
                                    autoComplete="off"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                    <Controller
                        name="subject"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid} className="space-y-1.5">
                                <FieldLabel htmlFor="tutor-subject" className="text-xs font-bold uppercase tracking-wider text-blue-400">
                                    Assunto
                                </FieldLabel>
                                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger id="tutor-subject" className="w-full capitalize" aria-invalid={fieldState.invalid}>
                                        <SelectValue className="text-blue-500" placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-blue-500">
                                        {subjects.map((s) => (
                                            <SelectItem key={s.subject} value={s.subject} className="bg-blue-500 capitalize cursor-pointer">{s.subject}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>
                <Controller
                    name="topic"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid || undefined} className="space-y-1.5">
                            <FieldLabel htmlFor="tutor-topic" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Tópicos do professor
                            </FieldLabel>
                            <Textarea
                                {...field}
                                id="tutor-topic"
                                placeholder="O que este professor deve ensinar? (Ex. Cálculo)"
                                className="min-h-22.5 resize-none text-sm text-blue-500 leading-relaxed"
                                aria-invalid={fieldState.invalid}
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
               
                <div className="grid grid-cols-3 gap-3">
                    <Controller
                        name="voice"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined} className="space-y-1.5">
                                <FieldLabel htmlFor="tutor-voice" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    Tonalidade de voz
                                </FieldLabel>
                                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger id="tutor-voice" aria-invalid={fieldState.invalid}>
                                        <SelectValue className={"text-blue-500"} placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-blue-500">
                                        <SelectItem value="Masculino" className="bg-blue-500 cursor-pointer">Masculino</SelectItem>
                                        <SelectItem value="Feminino" className="bg-blue-500 cursor-pointer">Feminino</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Controller
                        name="style"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined} className="space-y-1.5">
                                <FieldLabel htmlFor="tutor-style" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    Style
                                </FieldLabel>
                                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger id="tutor-style" aria-invalid={fieldState.invalid}>
                                        <SelectValue className="text-blue-500" placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-blue-500">
                                        <SelectItem value="Formal" className="cursor-pointer">Formal</SelectItem>
                                        <SelectItem value="Casual" className="cursor-pointer">Casual</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Controller
                        name="duration"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid || undefined} className="space-y-1.5">
                                <FieldLabel htmlFor="tutor-duration" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                    Minutos
                                </FieldLabel>
                                <Input
                                    {...field}
                                    id="tutor-duration"
                                    type="number"
                                    className="text-blue-500"
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>
            </FieldGroup>

            <div className="border-t border-border pt-5">
                <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                >
                    <Sparkles />
                    <span>Crie seu novo professor</span>
                </Button>
            </div>
        </form>

    )
};

export default TutorForm;
