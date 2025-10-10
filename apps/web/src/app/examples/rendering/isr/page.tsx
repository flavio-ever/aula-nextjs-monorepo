import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, Clock, Database, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ISRPage() {
  const now = new Date().toLocaleString("pt-BR");
  const data = {
    lastGenerated: now,
    info: "Esta página revalida a cada 10 segundos (aguarde e recarregue)",
    revalidateTime: "10 segundos",
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
          <RefreshCw className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Incremental Static Regeneration (ISR)</h1>
          <Badge variant="secondary">Híbrido</Badge>
        </div>
        <p className="text-muted-foreground">
          Esta página combina a velocidade do SSG com atualizações automáticas, revalidando a cada 10 segundos.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              <CardTitle>Dados com Revalidação</CardTitle>
            </div>
            <CardDescription>
              Conteúdo estático que se atualiza automaticamente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Timestamp da Geração</h3>
                <p className="text-sm bg-muted p-2 rounded font-mono">
                  {data.lastGenerated}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tempo de Revalidação</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  {data.revalidateTime}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-semibold mb-2">Como Testar</h3>
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
              <CardTitle>Como Funciona o ISR</CardTitle>
            </div>
            <CardDescription>
              Entenda o processo de revalidação incremental
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              ISR combina SSG com revalidação automática. Após 10 segundos da última geração,
              a próxima requisição dispara regeneração em background.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-800">
                <strong>Para testar:</strong> Recarregue esta página várias vezes.
                Após 10 segundos, o timestamp mudará na próxima requisição.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const revalidate = 10;