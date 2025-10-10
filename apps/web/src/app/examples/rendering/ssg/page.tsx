import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Clock, Wrench, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function SSGPage() {
  const buildTime = "Build time fixo";
  const data = {
    buildTime,
    buildId: "static-12345",
    info: "Página gerada no build (em dev, simula com dados fixos)",
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="mb-6">
        <Button asChild variant="outline" size="sm">
          <Link href="/examples/rendering">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Static Site Generation (SSG)</h1>
          <Badge variant="secondary">Estático</Badge>
        </div>
        <p className="text-muted-foreground">
          Esta página é pré-renderizada no build time e servida como arquivo estático para máxima performance.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              <CardTitle>Informações do Build</CardTitle>
            </div>
            <CardDescription>
              Dados estáticos gerados no momento do build
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Build Time</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  {data.buildTime}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Build ID</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  {data.buildId}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-2">Informação</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  {data.info}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <CardTitle>Características do SSG</CardTitle>
            </div>
            <CardDescription>
              Vantagens da geração estática
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Performance Máxima</h4>
                  <p className="text-sm text-muted-foreground">
                    Página servida diretamente do CDN sem processamento
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">SEO Excelente</h4>
                  <p className="text-sm text-muted-foreground">
                    HTML completo disponível imediatamente para crawlers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Escalabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Suporta milhões de usuários sem sobrecarga no servidor
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Limitação</h4>
                  <p className="text-sm text-muted-foreground">
                    Dados fixos até próximo build (em produção, use export const dynamic = &#39;force-static&#39;)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';