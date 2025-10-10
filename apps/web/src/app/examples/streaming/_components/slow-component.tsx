import { Clock } from "lucide-react";

async function fetchSlowData() {
  // Simula operação lenta (2 segundos)
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    message: "Dados carregados após 2 segundos!",
    timestamp: new Date().toLocaleTimeString("pt-BR"),
  };
}

export async function SlowComponent() {
  const data = await fetchSlowData();
  
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-blue-800">Carregamento Lento</h3>
      </div>
      <p className="text-blue-700 text-sm mb-2">
        {data.message}
      </p>
      <p className="text-blue-600 text-xs">
        Carregado em: {data.timestamp}
      </p>
    </div>
  );
}