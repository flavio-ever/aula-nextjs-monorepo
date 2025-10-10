"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export function LoadingSkeleton() {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="h-5 w-5 text-red-600" />
        <h3 className="font-semibold text-red-800">Ops! Algo deu errado</h3>
      </div>
      
      <div className="space-y-3">
        <p className="text-red-700 text-sm">
          Encontramos um problema ao carregar este conteúdo.
        </p>
        
        <details className="group">
          <summary className="cursor-pointer text-red-600 text-sm hover:text-red-800 transition-colors">
            Detalhes técnicos
          </summary>
          <div className="mt-2 p-2 bg-red-100 rounded text-xs font-mono text-red-800 break-all">
            {error.message}
          </div>
        </details>
        
        <Button 
          onClick={resetErrorBoundary}
          size="sm"
          variant="outline"
          className="border-red-300 text-red-700 hover:bg-red-100"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Tentar Novamente
        </Button>
      </div>
    </div>
  );
}