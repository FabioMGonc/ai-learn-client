"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "../ui/input-group";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
    name: z.string().min(2, "O nome do professor é obrigatório"),
    subject: z.string().min(2, "O assunto do professor é obrigatório"),
    topic: z.string().min(2, "O tópico do professor é obrigatório"),
    voice: z.string().min(2, "O vídeo do professor é obrigatório"),
    style: z.string().min(2, "O estilo do professor é obrigatório"),
    description: z.string().min(2, "A descrição do professor é obrigatória"),
    duration: z.number().min(2, "O tempo de duração do professor é obrigatório"),
})


const TutorForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            description: "",
            duration: 15,
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <div className="flex">
            <form
                className="space-y-6 p-6 sm:p-8"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className="space-y-2">
                    <Label htmlFor="title">
                        Nome do professor
                    </Label>

                    <Input
                        id="title"
                        {...form.register("name")}
                        placeholder="Nome do professor"
                        aria-invalid={!!form.formState.errors.name}
                    />

                    {form.formState.errors.name && (
                        <p className="text-sm text-destructive">
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">
                        Descrição
                    </Label>

                    <Textarea
                        id="description"
                        {...form.register("description")}
                        placeholder="Descreva o professor..."
                        rows={6}
                        className="resize-none"
                        aria-invalid={!!form.formState.errors.description}
                    />

                    {form.formState.errors.description && (
                        <p className="text-sm text-destructive">
                            {form.formState.errors.description.message}
                        </p>
                    )}
                </div>

                <Button type="submit">
                    Criar professor
                </Button>
            </form>
        </div>
    )
};

export default TutorForm;
