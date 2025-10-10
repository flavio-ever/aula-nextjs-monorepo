import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Clock, RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RefreshButton } from "./_components/refresh-button";

async function getServerData() {
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    timestamp: new Date().toLocaleString("pt-BR"),
    requestId: Math.random().toString(36).substring(7),
    serverInfo: "Dados renderizados no servidor",
    randomNumber: Math.floor(Math.random() * 1000),
  };
}

export default async function SSRPage() {
  const data = await getServerData();

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
          <Server className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Server-Side Rendering (SSR)</h1>
          <Badge variant="secondary">Dinâmico</Badge>
        </div>
        <p className="text-muted-foreground">
          Esta página é renderizada no servidor a cada requisição, garantindo dados sempre atualizados.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <CardTitle>Informações da Renderização</CardTitle>
            </div>
            <CardDescription>
              Dados gerados no servidor a cada requisição
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Timestamp da Renderização</h3>
                <p className="text-sm bg-muted p-2 rounded font-mono">
                  {data.timestamp}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ID da Requisição</h3>
                <p className="text-sm bg-muted p-2 rounded font-mono">
                  {data.requestId}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Número Aleatório</h3>
                <p className="text-sm bg-muted p-2 rounded font-mono">
                  {data.randomNumber}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Origem dos Dados</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  {data.serverInfo}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              <CardTitle>Teste a Renderização</CardTitle>
            </div>
            <CardDescription>
              Recarregue a página para ver novos dados sendo gerados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Como esta página usa SSR, os dados são gerados a cada requisição. 
              Recarregue a página (F5 ou Ctrl+R) para ver novos valores sendo gerados no servidor.
            </p>
            <RefreshButton />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}