import { Clock, CheckCircle } from "lucide-react";

async function fetchSlowData() {
  // Simula operação lenta (3 segundos)
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return {
    data: "Dados carregados com sucesso!",
    timestamp: new Date().toLocaleTimeString("pt-BR"),
    processingTime: "3.0s",
  };
}

export async function SlowDataComponent() {
  const result = await fetchSlowData();
  
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <h3 className="font-semibold text-green-800">Dados Carregados</h3>
      </div>
      
      <div className="space-y-2 text-sm">
        <p className="text-green-700">{result.data}</p>
        <div className="flex items-center gap-2 text-green-600">
          <Clock className="h-4 w-4" />
          <span>Carregado em: {result.timestamp}</span>
        </div>
        <p className="text-green-600">Tempo de processamento: {result.processingTime}</p>
      </div>
    </div>
  );
}