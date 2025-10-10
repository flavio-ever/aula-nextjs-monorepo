import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Route, Layers, ArrowLeft, Search } from "lucide-react";

export default function RoutingPage() {
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
        <h1 className="text-3xl font-bold mb-4">Demonstração: Sistema de Rotas</h1>
        <p className="text-muted-foreground mb-6">
          Explore diferentes padrões de roteamento do Next.js 15+ App Router.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Route className="h-5 w-5" />
              <CardTitle>Rotas Dinâmicas</CardTitle>
            </div>
            <CardDescription>
              Usando [id] para parâmetros de rota
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Dynamic</Badge>
                <Badge variant="outline">Params</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Rotas com parâmetros dinâmicos como /product/[id]
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/dynamic/1">
                    Ver Produto #1
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/dynamic/42">
                    Ver Produto #42
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/dynamic/xyz">
                    Ver Produto #xyz
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <CardTitle>Catch-all Routes</CardTitle>
            </div>
            <CardDescription>
              Usando [...slug] para múltiplos segmentos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Catch-all</Badge>
                <Badge variant="outline">Flexible</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Captura qualquer número de segmentos de URL
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/catch-all/docs">
                    /docs
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/catch-all/docs/api">
                    /docs/api
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/catch-all/docs/api/users/create">
                    /docs/api/users/create
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              <CardTitle>Query Parameters</CardTitle>
            </div>
            <CardDescription>
              Usando searchParams para query strings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Search</Badge>
                <Badge variant="outline">Params</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Leitura e manipulação de query strings
              </p>
              <div className="space-y-2">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/search?q=nextjs">
                    ?q=nextjs
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/search?q=react&filter=tutorial">
                    ?q=react&filter=tutorial
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/examples/routing/search?page=2&sort=desc">
                    ?page=2&sort=desc
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
