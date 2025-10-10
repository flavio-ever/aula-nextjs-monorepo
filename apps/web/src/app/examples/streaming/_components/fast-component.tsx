import { CheckCircle } from "lucide-react";

export function FastComponent() {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <h3 className="font-semibold text-green-800">Carregamento Instantâneo</h3>
      </div>
      <p className="text-green-700 text-sm">
        Este componente carrega imediatamente pois não possui nenhuma operação assíncrona.
        Ele demonstra como componentes síncronos são renderizados sem delay.
      </p>
    </div>
  );
}