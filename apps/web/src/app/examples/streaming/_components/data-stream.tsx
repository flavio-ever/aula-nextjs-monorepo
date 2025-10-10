import { Users, Package, ShoppingCart } from "lucide-react";

interface DataStreamProps {
  type: "users" | "products" | "orders";
}

async function fetchData(type: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay));
  
  const data = {
    users: { count: 1234, label: "Usuários Ativos" },
    products: { count: 567, label: "Produtos" },
    orders: { count: 890, label: "Pedidos" },
  };
  
  return data[type as keyof typeof data];
}

export async function DataStream({ type }: DataStreamProps) {
  // Diferentes delays para mostrar streaming
  const delays = { users: 1000, products: 1500, orders: 2000 };
  const data = await fetchData(type, delays[type]);
  
  const icons = {
    users: Users,
    products: Package,
    orders: ShoppingCart,
  };
  
  const Icon = icons[type];
  
  return (
    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-5 w-5 text-purple-600" />
        <h3 className="font-semibold text-purple-800">{data.label}</h3>
      </div>
      <p className="text-2xl font-bold text-purple-700">
        {data.count.toLocaleString("pt-BR")}
      </p>
      <p className="text-purple-600 text-xs mt-1">
        Carregado em {delays[type] / 1000}s
      </p>
    </div>
  );
}