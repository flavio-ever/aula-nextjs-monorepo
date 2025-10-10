import { Suspense } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SlowComponent } from "./_components/slow-component";
import { FastComponent } from "./_components/fast-component";
import { DataStream } from "./_components/data-stream";
import { ComponentSkeleton, DataSkeleton } from "./_components/skeletons";

export default function StreamingPage() {
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
        <h1 className="text-3xl font-bold mb-4">Demonstração: Streaming & Suspense</h1>
        <p className="text-muted-foreground mb-6">
          Esta página demonstra como o Next.js 15+ permite streaming de componentes para melhorar a experiência do usuário.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Componente Rápido</CardTitle>
              <CardDescription>
                Carrega imediatamente (sem Suspense)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FastComponent />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Componente Lento</CardTitle>
              <CardDescription>
                Simula 2s de loading com skeleton
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<ComponentSkeleton />}>
                <SlowComponent />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stream de Dados</CardTitle>
            <CardDescription>
              Demonstra streaming progressivo de dados com múltiplos Suspense
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Suspense fallback={<DataSkeleton label="Usuários" />}>
                <DataStream type="users" />
              </Suspense>
              <Suspense fallback={<DataSkeleton label="Produtos" />}>
                <DataStream type="products" />
              </Suspense>
              <Suspense fallback={<DataSkeleton label="Pedidos" />}>
                <DataStream type="orders" />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}