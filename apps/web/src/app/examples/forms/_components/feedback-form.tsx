"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { useState } from "react";

const feedbackSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: FeedbackFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); setRating(0); }, 2000);
  };

  if (submitted) {
    return <p className="text-green-600 font-medium">✓ Obrigado pelo feedback!</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Seu nome"
        />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label>Avaliação</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setRating(value);
                setValue("rating", value, { shouldValidate: true });
              }}
              className={value <= rating ? "text-yellow-500" : "text-gray-300"}
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
        {errors.rating && (
          <p className="text-sm text-red-600 mt-1">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="comment">Comentário (opcional)</Label>
        <textarea
          id="comment"
          {...register("comment")}
          rows={3}
          placeholder="Deixe seu comentário..."
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Enviando..." : "Enviar Feedback"}
      </Button>

      <p className="text-xs text-muted-foreground">
        Demonstra validação customizada (estrelas)
      </p>
    </form>
  );
}
