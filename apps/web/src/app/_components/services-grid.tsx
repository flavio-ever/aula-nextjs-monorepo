import { ServiceCard } from "@/components/ui/service-card";
import { getServicesData } from "@/lib/api";

const colorMap = {
  Financeiro: "bg-blue-500",
  Benefícios: "bg-emerald-500",
  Conta: "bg-purple-500",
  Segurança: "bg-red-500",
  Suporte: "bg-green-500",
  default: "bg-gray-500",
};

export async function ServicesGrid() {
  const { services } = await getServicesData();

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Seus Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Acesse rapidamente os serviços mais utilizados do Portal do Cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              color={
                colorMap[service.category as keyof typeof colorMap] ||
                colorMap.default
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
