import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Server, Zap, RefreshCw, Globe, ArrowLeft } from "lucide-react";

export default function RenderingPage() {
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
        <h1 className="text-3xl font-bold mb-4">Demonstração: Estratégias de Rendering</h1>
        <p className="text-muted-foreground mb-6">
          Esta página demonstra diferentes estratégias de renderização do Next.js 15+: SSG, SSR, ISR e Client-side.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              <CardTitle>Server-Side Rendering (SSR)</CardTitle>
            </div>
            <CardDescription>
              Renderizado no servidor a cada requisição
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary">Dinâmico</Badge>
                <Badge variant="outline">SEO Friendly</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Ideal para páginas que precisam de dados sempre atualizados e SEO.
              </p>
              <Button asChild className="w-full">
                <Link href="/examples/rendering/ssr">
                  Ver Exemplo SSR
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <CardTitle>Static Site Generation (SSG)</CardTitle>
            </div>
            <CardDescription>
              Pré-renderizado no build time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary">Estático</Badge>
                <Badge variant="outline">Ultra Rápido</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Perfeito para conteúdo que não muda frequentemente.
              </p>
              <Button asChild className="w-full">
                <Link href="/examples/rendering/ssg">
                  Ver Exemplo SSG
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              <CardTitle>Incremental Static Regeneration (ISR)</CardTitle>
            </div>
            <CardDescription>
              Estático com revalidação automática
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary">Híbrido</Badge>
                <Badge variant="outline">Revalidação</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Combina velocidade de SSG com atualizações periódicas.
              </p>
              <Button asChild className="w-full">
                <Link href="/examples/rendering/isr">
                  Ver Exemplo ISR
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <CardTitle>Client-Side Rendering (CSR)</CardTitle>
            </div>
            <CardDescription>
              Renderizado no cliente via JavaScript
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant="secondary">Cliente</Badge>
                <Badge variant="outline">Interativo</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Ideal para dashboards e aplicações altamente interativas.
              </p>
              <Button asChild className="w-full">
                <Link href="/examples/rendering/csr">
                  Ver Exemplo CSR
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}