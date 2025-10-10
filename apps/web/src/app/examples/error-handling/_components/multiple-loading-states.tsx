"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle, RefreshCw } from "lucide-react";

interface LoadingStep {
  id: string;
  title: string;
  duration: number;
  status: "pending" | "loading" | "completed";
}

export function MultipleLoadingStates() {
  const [steps, setSteps] = useState<LoadingStep[]>([
    { id: "auth", title: "Autenticação", duration: 1000, status: "pending" },
    { id: "data", title: "Carregando dados", duration: 2000, status: "pending" },
    { id: "ui", title: "Preparando interface", duration: 1500, status: "pending" },
    { id: "final", title: "Finalizando", duration: 800, status: "pending" },
  ]);

  const [isRunning, setIsRunning] = useState(false);

  const startLoading = async () => {
    setIsRunning(true);
    
    // Reset all steps
    setSteps(prev => prev.map(step => ({ ...step, status: "pending" })));

    for (let i = 0; i < steps.length; i++) {
      // Mark current step as loading
      setSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index === i ? "loading" : index < i ? "completed" : "pending"
      })));

      // Wait for the step duration
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));

      // Mark current step as completed
      setSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index <= i ? "completed" : "pending"
      })));
    }

    setIsRunning(false);
  };

  const reset = () => {
    setSteps(prev => prev.map(step => ({ ...step, status: "pending" })));
    setIsRunning(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button 
          onClick={startLoading} 
          disabled={isRunning}
          className="flex-1"
        >
          {isRunning ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            "Iniciar Demonstração"
          )}
        </Button>
        <Button 
          onClick={reset} 
          variant="outline"
          disabled={isRunning}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
              step.status === "loading" 
                ? "bg-blue-50 border-blue-200" 
                : step.status === "completed" 
                  ? "bg-green-50 border-green-200"
                  : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6">
                {step.status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                ) : step.status === "completed" ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                )}
              </div>
              <span className={`font-medium ${
                step.status === "loading" 
                  ? "text-blue-800" 
                  : step.status === "completed" 
                    ? "text-green-800"
                    : "text-gray-600"
              }`}>
                {step.title}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge 
                variant={
                  step.status === "loading" 
                    ? "default" 
                    : step.status === "completed" 
                      ? "secondary"
                      : "outline"
                }
              >
                {step.status === "loading" 
                  ? "Carregando..." 
                  : step.status === "completed" 
                    ? "Concluído"
                    : "Pendente"
                }
              </Badge>
              <span className="text-xs text-gray-500">
                {step.duration / 1000}s
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Dica sobre Loading States</h4>
        <p className="text-sm text-yellow-700">
          Usar múltiplos loading states ajuda a manter o usuário informado sobre o progresso da operação,
          especialmente em processos longos. Cada etapa pode ter seu próprio Suspense boundary.
        </p>
      </div>
    </div>
  );
}