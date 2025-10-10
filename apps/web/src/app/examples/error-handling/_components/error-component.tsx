"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function ErrorComponent() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // Força um erro para demonstrar o Error Boundary
    throw new Error("Este é um erro simulado para demonstração do Error Boundary!");
  }

  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-blue-800">Componente com Possível Erro</h3>
      </div>
      
      <div className="space-y-4">
        <p className="text-blue-700 text-sm">
          Este componente está funcionando normalmente. Clique no botão abaixo para simular um erro 
          e ver como o Error Boundary captura e trata o problema.
        </p>
        
        <Button 
          onClick={() => setShouldError(true)}
          variant="destructive"
          size="sm"
        >
          Simular Erro
        </Button>
      </div>
    </div>
  );
}