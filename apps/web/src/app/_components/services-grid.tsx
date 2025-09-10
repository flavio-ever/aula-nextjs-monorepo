import { getServicesData } from "@/lib/api";
import { ServicesGridClient } from "./services-grid-client";

export async function ServicesGrid() {
  const { services } = await getServicesData();

  return <ServicesGridClient services={services} />;
}
