"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, RefreshCw, Loader2, Activity, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ClientData {
  timestamp: string;
  userAgent: string;
  screenResolution: string;
  timezone: string;
  language: string;
  isOnline: boolean;
}

export default function CSRPage() {
  const [data, setData] = useState<ClientData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshCount, setRefreshCount] = useState(0);

  const fetchClientData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData({
        timestamp: new Date().toLocaleString("pt-BR"),
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        isOnline: navigator.onLine,
      });
      setIsLoading(false);
      setRefreshCount(prev => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    fetchClientData();
  }, []);

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
          <Globe className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Client-Side Rendering (CSR)</h1>
          <Badge variant="secondary">Cliente</Badge>
        </div>
        <p className="text-muted-foreground">
          Esta página é renderizada no cliente usando React, permitindo interatividade completa e acesso às APIs do browser.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              <CardTitle>Informações do Cliente</CardTitle>
            </div>
            <CardDescription>
              Dados coletados diretamente no browser
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Carregando dados do cliente...</span>
              </div>
            ) : data ? (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Timestamp Local</h3>
                  <p className="text-sm bg-muted p-2 rounded font-mono break-all">
                    {data.timestamp}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Resolução da Tela</h3>
                  <p className="text-sm bg-muted p-2 rounded font-mono">
                    {data.screenResolution}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Fuso Horário</h3>
                  <p className="text-sm bg-muted p-2 rounded font-mono">
                    {data.timezone}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Idioma</h3>
                  <p className="text-sm bg-muted p-2 rounded font-mono">
                    {data.language}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold mb-2">User Agent</h3>
                  <p className="text-xs bg-muted p-2 rounded font-mono break-all">
                    {data.userAgent}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Status da Conexão</h3>
                  <p className="text-sm bg-muted p-2 rounded">
                    {data.isOnline ? "🟢 Online" : "🔴 Offline"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Atualizações</h3>
                  <p className="text-sm bg-muted p-2 rounded font-mono">
                    {refreshCount} vez(es)
                  </p>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5" />
              <CardTitle>Interatividade do Cliente</CardTitle>
            </div>
            <CardDescription>
              Demonstração de funcionalidades client-side
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Como esta página roda no cliente, você pode atualizar os dados sem recarregar a página:
              </p>
              <Button 
                onClick={fetchClientData}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Atualizando...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Atualizar Dados do Cliente
                  </>
                )}
              </Button>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Considerações do CSR</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• SEO limitado (conteúdo não visível para crawlers inicialmente)</li>
                  <li>• Tempo de carregamento inicial pode ser maior</li>
                  <li>• Ideal para dashboards e aplicações interativas</li>
                  <li>• Permite acesso completo às APIs do browser</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}