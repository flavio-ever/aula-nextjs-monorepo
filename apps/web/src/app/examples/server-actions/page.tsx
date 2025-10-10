import { Suspense } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { TodoForm } from "./_components/todo-form";
import { TodoList } from "./_components/todo-list";

export default function ServerActionsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/examples">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Demonstração: Server Actions</h1>
        <p className="text-muted-foreground mb-6">
          Esta página demonstra o uso de Server Actions do Next.js 15+ para manipulação de dados sem necessidade de API routes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Todo</CardTitle>
            <CardDescription>
              Formulário usando Server Actions para adicionar itens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TodoForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Todos</CardTitle>
            <CardDescription>
              Lista atualizada automaticamente via Server Actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div className="animate-pulse">Carregando...</div>}>
              <TodoList />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}