"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addTodo } from "../actions";
import { Loader2, Plus } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adicionando...
        </>
      ) : (
        <>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Todo
        </>
      )}
    </Button>
  );
}

export function TodoForm() {
  return (
    <form action={addTodo} className="space-y-4">
      <Input
        name="text"
        placeholder="Digite um novo todo..."
        required
        className="w-full"
      />
      <SubmitButton />
    </form>
  );
}