import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { id } = await params;

  const product = {
    id,
    name: `Produto ${id}`,
    price: Math.floor(Math.random() * 1000) + 100,
    description: `Descrição do produto ${id}`,
    category: "Eletrônicos",
  };

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
              <Package className="h-6 w-6" />
              <CardTitle>{product.name}</CardTitle>
            </div>
            <Badge>Dynamic Route</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Parâmetro da Rota:</p>
              <code className="bg-muted px-3 py-2 rounded block">
                /examples/routing/dynamic/{id}
              </code>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-1">ID do Produto</h3>
                <p className="text-sm bg-muted p-2 rounded">{product.id}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Preço</h3>
                <p className="text-sm bg-muted p-2 rounded">
                  R$ {product.price.toLocaleString("pt-BR")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Categoria</h3>
                <p className="text-sm bg-muted p-2 rounded">{product.category}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Descrição</h3>
                <p className="text-sm bg-muted p-2 rounded">{product.description}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4 mt-6">
              <p className="text-sm text-blue-800">
                <strong>Como funciona:</strong> O parâmetro <code>[id]</code> na estrutura de pastas captura qualquer valor da URL.
                Experimente mudar o ID na URL para ver diferentes produtos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
