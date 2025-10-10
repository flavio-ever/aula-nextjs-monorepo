import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "./_components/contact-form";
import { RegistrationForm } from "./_components/registration-form";
import { FeedbackForm } from "./_components/feedback-form";

export default function FormsPage() {
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
        <h1 className="text-3xl font-bold mb-4">Demonstração: Formulários</h1>
        <p className="text-muted-foreground mb-6">
          Esta página demonstra o uso de React Hook Form + Zod para validação simples e eficaz.
        </p>
      </div>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Formulário de Contato</CardTitle>
            <CardDescription>
              Validação simples com feedback em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de Registro</CardTitle>
            <CardDescription>
              Validação complexa com múltiplos campos e regras customizadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegistrationForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de Feedback</CardTitle>
            <CardDescription>
              Demonstra upload de arquivos e campos condicionais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeedbackForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}