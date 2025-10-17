import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowRight,
  Code2,
  FormInput,
  RefreshCw,
  Server,
  Zap,
} from "lucide-react";
import Link from "next/link";

const examples = [
  {
    title: "Server Actions",
    description:
      "Demonstra Server Actions para mutação de dados sem API routes",
    icon: Server,
    href: "/examples/server-actions",
    badge: "Server-First",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    features: ["Todo interativo", "Revalidação automática", "useFormStatus"],
  },
  {
    title: "Streaming & Suspense",
    description: "Carregamento progressivo com Suspense boundaries",
    icon: Zap,
    href: "/examples/streaming",
    badge: "Performance",
    color: "bg-green-50 border-green-200 text-green-800",
    features: ["Loading progressivo", "Skeletons", "Suspense aninhado"],
  },
  {
    title: "Estratégias de Rendering",
    description: "Compare SSG, SSR, ISR e CSR lado a lado",
    icon: RefreshCw,
    href: "/examples/rendering",
    badge: "Comparativo",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    features: ["SSG/SSR/ISR/CSR", "Casos de uso", "Performance"],
  },
  {
    title: "Sistema de Rotas",
    description: "Rotas dinâmicas e catch-all routes do App Router",
    icon: Code2,
    href: "/examples/routing",
    badge: "Routing",
    color: "bg-cyan-50 border-cyan-200 text-cyan-800",
    features: ["Dynamic [id]", "Catch-all [...slug]", "Params"],
  },
  {
    title: "Formulários",
    description: "React Hook Form + Zod para validação",
    icon: FormInput,
    href: "/examples/forms",
    badge: "Validação",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    features: ["Hook Form + Zod", "Validação simples", "UX otimizada"],
  },
  {
    title: "Error Handling & Loading",
    description: "Error boundaries, loading states e tratamento de falhas",
    icon: AlertTriangle,
    href: "/examples/error-handling",
    badge: "Resilência",
    color: "bg-red-50 border-red-200 text-red-800",
    features: ["Error boundaries", "Loading states", "Fallbacks"],
  },
];

export default function ExamplesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">Exemplos Next.js 15+</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => {
          const IconComponent = example.icon;

          return (
            <Card
              key={`${example.href}-${index}`}
              className="group hover:shadow-lg transition-all duration-200"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-2 rounded-lg ${example.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{example.badge}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {example.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-1">
                    {example.features.map((feature, featureIndex) => (
                      <li
                        key={`${index}-${featureIndex}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full group-hover:bg-primary/90 transition-colors"
                  >
                    <Link
                      href={example.href}
                      className="flex items-center justify-center gap-2"
                    >
                      Ver Exemplo
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
