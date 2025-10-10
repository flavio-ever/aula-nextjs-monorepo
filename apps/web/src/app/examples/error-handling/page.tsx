import { Suspense } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SlowDataComponent } from "./_components/slow-data-component";
import { ErrorComponent } from "./_components/error-component";
import { MultipleLoadingStates } from "./_components/multiple-loading-states";
import { LoadingSkeleton } from "./_components/fallbacks";
import { ErrorBoundaryWrapper } from "./_components/error-boundary-wrapper";

export default function ErrorHandlingPage() {
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
        <h1 className="text-3xl font-bold mb-4">Demonstração: Loading UI & Error Boundaries</h1>
        <p className="text-muted-foreground mb-6">
          Esta página demonstra diferentes estratégias de loading states, error boundaries e fallbacks do Next.js 15+.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loading com Suspense</CardTitle>
            <CardDescription>
              Componente com delay de 3 segundos mostrando skeleton
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<LoadingSkeleton />}>
              <SlowDataComponent />
            </Suspense>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Error Boundary</CardTitle>
            <CardDescription>
              Componente que gera erro para demonstrar tratamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorBoundaryWrapper>
              <ErrorComponent />
            </ErrorBoundaryWrapper>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Múltiplos Estados de Loading</CardTitle>
            <CardDescription>
              Demonstra diferentes loading states em cascata
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MultipleLoadingStates />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}