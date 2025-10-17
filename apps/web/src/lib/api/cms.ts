import { apiClient } from "./client";
import type { BannerData, NavigationData, ServicesData } from "./types";

export async function getNavigationData(options?: {
  revalidate?: number;
  tags?: string[];
}): Promise<NavigationData> {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/navigation?delayMs=4000` : `/cms/navigation`;

    const data = await apiClient.get<NavigationData>(endpoint, {
      next: {
        revalidate: options?.revalidate ?? 0,
        tags: options?.tags ?? ["navigation"],
      },
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch navigation from NestJS:", error);
    console.log("Using fallback navigation data with all services");

    // Fallback data
    return {
      navigationData: [
        {
          title: "Serviços",
          items: [
            {
              title: "Consultar Extrato",
              href: "/extrato",
              description: "Veja todas suas movimentações financeiras em tempo real",
              icon: "FileText",
            },
            {
              title: "Quitação de Débitos",
              href: "/debitos",
              description: "Negocie e quite seus débitos pendentes com desconto",
              icon: "CreditCard",
            },
            {
              title: "Resgate de Pontos",
              href: "/beneficios",
              description: "Troque seus pontos por produtos e descontos exclusivos",
              icon: "Gift",
            },
            {
              title: "Recuperar Senha",
              href: "/recuperar-senha",
              description: "Redefina sua senha de acesso de forma segura",
              icon: "Key",
            },
            {
              title: "Central de Ajuda",
              href: "/faq",
              description: "Encontre respostas para suas dúvidas mais frequentes",
              icon: "HelpCircle",
            },
            {
              title: "Meus Dados",
              href: "/perfil",
              description: "Atualize suas informações pessoais e preferências",
              icon: "User",
            },
          ],
        },
      ],
      mainNav: [
        { title: "FAQ", href: "/faq" },
        { title: "Contato", href: "/contato" },
        { title: "Minha Conta", href: "/perfil" },
      ],
      userMenu: [
        { title: "Notificações", href: "/notificacoes", icon: "Bell" },
        { title: "Meu Perfil", href: "/perfil", icon: "User" },
      ],
    };
  }
}

export async function getBannerData(options?: {
  revalidate?: number;
  tags?: string[];
}): Promise<BannerData> {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/banner?delayMs=10000` : `/cms/banner`;

    const data = await apiClient.get<BannerData>(endpoint, {
      next: {
        revalidate: options?.revalidate ?? 60,
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
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/services?delayMs=12000` : `/cms/services`;

    const data = await apiClient.get<ServicesData>(endpoint, {
      next: {
        revalidate: options?.revalidate ?? 60,
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
