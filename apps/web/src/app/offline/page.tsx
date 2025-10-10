"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  WifiOff,
  RefreshCw,
  Home,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function OfflinePage() {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    setIsOnline(navigator.onLine);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRetry = () => {
    if (navigator.onLine) {
      router.back();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Ícone de offline */}
        <div className="flex justify-center">
          <WifiOff className="w-24 h-24 text-muted-foreground" />
        </div>

        {/* Mensagem */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Você está offline
          </h1>
          <p className="text-muted-foreground text-lg">
            Parece que você perdeu a conexão com a internet. Verifique sua
            conexão e tente novamente.
          </p>
        </div>

        {/* Status de conexão */}
        {isOnline && (
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Conexão restaurada!</span>
            </div>
          </div>
        )}

        {/* Botão de retry */}
        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Tentar novamente
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Voltar para a página inicial
          </button>
        </div>

        {/* Dicas */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Enquanto isso, você pode:
          </p>
          <ul className="text-sm text-muted-foreground space-y-2 text-left">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>Verificar sua conexão Wi-Fi ou dados móveis</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>Ativar/desativar o modo avião</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>Verificar se outros dispositivos estão conectados</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
