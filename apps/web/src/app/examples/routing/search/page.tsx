import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search } from "lucide-react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const allParams = Object.entries(params);

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/examples/routing">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="h-6 w-6" />
              <CardTitle>Query Parameters</CardTitle>
            </div>
            <Badge>searchParams</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">URL Atual:</p>
              <code className="bg-muted px-3 py-2 rounded block break-all text-sm">
                /examples/routing/search?{new URLSearchParams(params as Record<string, string>).toString() || "(sem parâmetros)"}
              </code>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Parâmetros Detectados</h3>
              <div className="bg-muted p-4 rounded">
                {allParams.length > 0 ? (
                  <div className="space-y-3">
                    {allParams.map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <Badge variant="outline" className="shrink-0">{key}</Badge>
                        <code className="text-sm break-all">
                          {Array.isArray(value) ? value.join(", ") : value}
                        </code>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Nenhum parâmetro na URL. Adicione ?key=value na URL.
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Total de Parâmetros</h3>
              <p className="text-sm bg-muted p-2 rounded">
                {allParams.length}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-6">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Como funciona:</strong> O Next.js passa automaticamente os searchParams para Server Components.
              </p>
              <p className="text-sm text-blue-800">
                Útil para: busca, filtros, paginação, sorting, etc.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Exemplos para testar:</h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/examples/routing/search?q=nextjs&page=1">
                    Busca + Página
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/examples/routing/search?category=tech&sort=asc&limit=10">
                    Filtros Múltiplos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
