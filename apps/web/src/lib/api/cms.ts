import { apiClient } from "./client";
import type { BannerData, NavigationData, ServicesData } from "./types";

export async function getNavigationData(options?: {
  revalidate?: number;
  tags?: string[];
}): Promise<NavigationData> {
  try {
    const endpoint = `/cms/navigation?delayMs=4000`;

    const data = await apiClient.get<NavigationData>(endpoint, {
      next: {
        // revalidate: options?.revalidate ?? 10,
        tags: options?.tags ?? ["navigation"],
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch navigation from NestJS:", error);

    // Fallback data
    return {
      navigationData: [
        {
          title: "Serviços",
          items: [
            {
              title: "Central de Ajuda",
              href: "/faq",
              description: "Encontre respostas (fallback)",
              icon: "HelpCircle",
            },
            {
              title: "Contato",
              href: "/contato",
              description: "Entre em contato (fallback)",
              icon: "Phone",
            },
            {
              title: "Minha Conta",
              href: "/perfil",
              description: "Gerencie sua conta (fallback)",
              icon: "User",
            },
          ],
        },
      ],
      mainNav: [
        { title: "FAQ", href: "/faq" },
        { title: "Contato", href: "/contato" },
      ],
      userMenu: [{ title: "Meu Perfil", href: "/perfil", icon: "User" }],
    };
  }
}

export async function getBannerData(options?: {
  revalidate?: number;
  tags?: string[];
}): Promise<BannerData> {
  try {
    const endpoint = `/cms/banner?delayMs=10000`;

    const data = await apiClient.get<BannerData>(endpoint, {
      next: {
        // revalidate: options?.revalidate ?? 60, // Cache banner por 1 minuto
        tags: options?.tags ?? ["banner"],
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch banner from NestJS:", error);

    // Fallback data
    return {
      banners: [
        {
          id: 1,
          title: "Portal do Cliente (Fallback)",
          subtitle: "Serviço temporariamente indisponível",
          description: "Por favor, tente novamente em alguns minutos.",
          image: "/images/banner-fallback.jpg",
          ctaText: "Tentar Novamente",
          ctaLink: "/",
          priority: 1,
        },
      ],
    };
  }
}

export async function getServicesData(options?: {
  revalidate?: number;
  tags?: string[];
}): Promise<ServicesData> {
  try {
    const endpoint = `/cms/services?delayMs=12000`;

    const data = await apiClient.get<ServicesData>(endpoint, {
      next: {
        // revalidate: options?.revalidate ?? 30, // Cache services por 30 segundos
        tags: options?.tags ?? ["services"],
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch services from NestJS:", error);

    // Fallback data
    return {
      services: [
        {
          id: "faq",
          title: "Central de Ajuda (Fallback)",
          description: "Encontre respostas para suas dúvidas",
          icon: "HelpCircle",
          category: "Suporte",
          href: "/faq",
          featured: true,
          status: "active",
        },
      ],
      featuredServices: [
        {
          id: "faq",
          title: "Central de Ajuda (Fallback)",
          description: "Encontre respostas para suas dúvidas",
          icon: "HelpCircle",
          category: "Suporte",
          href: "/faq",
          featured: true,
          status: "active",
        },
      ],
    };
  }
}
