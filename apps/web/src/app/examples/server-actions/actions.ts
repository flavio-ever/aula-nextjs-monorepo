"use server";

import { revalidatePath } from "next/cache";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Simulação de armazenamento em memória
let todos: Todo[] = [
  {
    id: "1",
    text: "Explorar Server Actions",
    completed: true,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    text: "Testar revalidação de cache",
    completed: false,
    createdAt: new Date("2024-01-02"),
  },
];

export async function addTodo(formData: FormData) {
  const text = formData.get("text") as string;

  if (!text || text.trim().length === 0) {
    throw new Error("Texto do todo é obrigatório");
  }

  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newTodo: Todo = {
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
    createdAt: new Date(),
  };

  todos.unshift(newTodo);

  // Revalida a página para atualizar a lista
  revalidatePath("/examples/server-actions");
}

export async function toggleTodo(id: string) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    revalidatePath("/examples/server-actions");
  }
}

export async function deleteTodo(id: string) {
  todos = todos.filter((t) => t.id !== id);
  revalidatePath("/examples/server-actions");
}

export async function getTodos(): Promise<Todo[]> {
  // Simula delay de busca
  await new Promise((resolve) => setTimeout(resolve, 300));
  return todos
    .slice()
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
