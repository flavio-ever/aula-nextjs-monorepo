import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;

  const breadcrumbs = slug || [];
  const fullPath = breadcrumbs.join(" / ");

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
              <FileText className="h-6 w-6" />
              <CardTitle>Catch-all Route</CardTitle>
            </div>
            <Badge>Dynamic</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">URL Completa:</p>
              <code className="bg-muted px-3 py-2 rounded block break-all">
                /examples/routing/catch-all/{breadcrumbs.join("/")}
              </code>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Segmentos Capturados</h3>
              <div className="bg-muted p-4 rounded">
                {breadcrumbs.length > 0 ? (
                  <ol className="space-y-2">
                    {breadcrumbs.map((segment, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Badge variant="outline">{index}</Badge>
                        <code className="text-sm">{segment}</code>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Nenhum segmento na URL
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Breadcrumb</h3>
              <p className="text-sm bg-muted p-2 rounded">
                {fullPath || "Home"}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Total de Segmentos</h3>
              <p className="text-sm bg-muted p-2 rounded">
                {breadcrumbs.length}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-6">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Como funciona:</strong> O padrão <code>[...slug]</code> captura todos os segmentos da URL após o prefixo.
              </p>
              <p className="text-sm text-blue-800">
                Útil para: documentação, breadcrumbs, sistemas de arquivos, wikis, etc.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
