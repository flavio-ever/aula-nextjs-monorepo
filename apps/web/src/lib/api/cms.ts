import { apiClient } from "./client";
import type { BannerData, NavigationData, ServicesData } from "./types";

export async function getNavigationData(): Promise<NavigationData> {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/navigation?delayMs=4000` : `/cms/navigation`;

    const data = await apiClient.get<NavigationData>(endpoint, {
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
              href: "/examples",
              description:
                "Veja todas suas movimentações financeiras em tempo real",
              icon: "FileText",
            },
            {
              title: "Quitação de Débitos",
              href: "/examples",
              description:
                "Negocie e quite seus débitos pendentes com desconto",
              icon: "CreditCard",
            },
            {
              title: "Resgate de Pontos",
              href: "/examples",
              description:
                "Troque seus pontos por produtos e descontos exclusivos",
              icon: "Gift",
            },
            {
              title: "Recuperar Senha",
              href: "/examples",
              description: "Redefina sua senha de acesso de forma segura",
              icon: "Key",
            },
            {
              title: "Central de Ajuda",
              href: "/examples",
              description:
                "Encontre respostas para suas dúvidas mais frequentes",
              icon: "HelpCircle",
            },
            {
              title: "Meus Dados",
              href: "/examples",
              description: "Atualize suas informações pessoais e preferências",
              icon: "User",
            },
          ],
        },
      ],
      mainNav: [
        { title: "FAQ", href: "/examples" },
        { title: "Contato", href: "/examples" },
        { title: "Minha Conta", href: "/examples" },
      ],
      userMenu: [
        { title: "Notificações", href: "/examples", icon: "Bell" },
        { title: "Meu Perfil", href: "/examples", icon: "User" },
      ],
    };
  }
}

export async function getBannerData(): Promise<BannerData> {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/banner?delayMs=10000` : `/cms/banner`;

    const data = await apiClient.get<BannerData>(endpoint, {
      next: {
        revalidate: 60,
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

export async function getServicesData(): Promise<ServicesData> {
  try {
    const isDev = process.env.NODE_ENV === "development";
    const endpoint = isDev ? `/cms/services?delayMs=12000` : `/cms/services`;

    const data = await apiClient.get<ServicesData>(endpoint, {
      next: {
        revalidate: 60,
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch services from NestJS:", error);

    // Fallback data
    return {
      services: [
        {
          id: "examples",
          title: "Exemplos Next.js 15",
          description: "Veja exemplos de funcionalidades do Next.js 15",
          icon: "Code",
          category: "Suporte",
          href: "/examples",
          featured: true,
          status: "active",
        },
      ],
      featuredServices: [
        {
          id: "examples",
          title: "Exemplos Next.js 15",
          description: "Veja exemplos de funcionalidades do Next.js 15",
          icon: "Code",
          category: "Suporte",
          href: "/examples",
          featured: true,
          status: "active",
        },
      ],
    };
  }
}
