"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactSchema = z.object({
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensagem deve ter pelo menos 5 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 2000);
  };

  if (submitted) {
    return <p className="text-green-600 font-medium">✓ Mensagem enviada!</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Mensagem</Label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          placeholder="Sua mensagem..."
          className="w-full px-3 py-2 border rounded-md"
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Validação: React Hook Form + Zod
      </p>
    </form>
  );
}