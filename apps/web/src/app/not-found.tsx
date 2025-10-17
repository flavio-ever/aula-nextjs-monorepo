import { Button } from "@/components/ui/button";
import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <FileQuestion className="relative w-32 h-32 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-3xl font-semibold text-foreground">
            Página Não Encontrada
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para
            outro endereço.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar para Início
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/examples">
              <Search className="w-5 h-5 mr-2" />
              Ver Exemplos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
