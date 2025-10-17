import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CmsService {
  private readonly logger = new Logger(CmsService.name);

  getNavigationData() {
    const navigationData = [
      {
        title: 'Serviços',
        items: [
          {
            title: 'Consultar Extrato',
            href: '/examples',
            description:
              'Veja todas suas movimentações financeiras em tempo real',
            icon: 'FileText',
          },
          {
            title: 'Quitação de Débitos',
            href: '/examples',
            description: 'Negocie e quite seus débitos pendentes com desconto',
            icon: 'CreditCard',
          },
          {
            title: 'Resgate de Pontos',
            href: '/examples',
            description:
              'Troque seus pontos por produtos e descontos exclusivos',
            icon: 'Gift',
          },
          {
            title: 'Recuperar Senha',
            href: '/examples',
            description: 'Redefina sua senha de acesso de forma segura',
            icon: 'Key',
          },
          {
            title: 'Central de Ajuda',
            href: '/examples',
            description: 'Encontre respostas para suas dúvidas mais frequentes',
            icon: 'HelpCircle',
          },
          {
            title: 'Meus Dados',
            href: '/examples',
            description: 'Atualize suas informações pessoais e preferências',
            icon: 'User',
          },
        ],
      },
    ];

    const mainNav = [
      { title: 'FAQ', href: '/examples' },
      { title: 'Contato', href: '/examples' },
      { title: 'Minha Conta', href: '/examples' },
    ];

    const userMenu = [
      { title: 'Notificações', href: '/examples', icon: 'Bell' },
      { title: 'Meu Perfil', href: '/examples', icon: 'User' },
    ];

    return {
      navigationData,
      mainNav,
      userMenu,
    };
  }

  getBannerData() {
    const banners = [
      {
        id: 1,
        title: 'Portal do Cliente',
        subtitle: 'Acesse todos os serviços em um só lugar',
        description:
          'Gerencie sua conta, consulte extratos, negocie débitos e muito mais com praticidade e segurança.',
        image: '/images/banner-principal.jpg',
        ctaText: 'Começar Agora',
        ctaLink: '/dashboard',
        priority: 1,
      },
      {
        id: 2,
        title: 'Novos Benefícios Disponíveis',
        subtitle: 'Troque seus pontos por produtos exclusivos',
        description:
          'Acesse nossa loja de benefícios e descubra as novidades disponíveis para resgate.',
        image: '/images/banner-beneficios.jpg',
        ctaText: 'Ver Benefícios',
        ctaLink: '/beneficios',
        priority: 2,
      },
      {
        id: 3,
        title: 'Quitação com Desconto',
        subtitle: 'Negocie seus débitos com condições especiais',
        description:
          'Aproveite as condições especiais para quitar seus débitos com desconto de até 70%.',
        image: '/images/banner-negociacao.jpg',
        ctaText: 'Negociar Agora',
        ctaLink: '/debitos',
        priority: 3,
      },
    ];

    return { banners };
  }

  getServicesData() {
    const services = [
      {
        id: 'extrato',
        title: 'Consultar Extrato',
        description:
          'Acesse seu histórico completo de movimentações financeiras com detalhes e filtros avançados',
        icon: 'FileText',
        category: 'Financeiro',
        href: '/examples',
        featured: true,
        status: 'active',
      },
      {
        id: 'debitos',
        title: 'Quitação de Débitos',
        description:
          'Negocie e quite seus débitos pendentes com condições especiais e descontos exclusivos',
        icon: 'CreditCard',
        category: 'Financeiro',
        href: '/examples',
        featured: true,
        status: 'active',
      },
      {
        id: 'beneficios',
        title: 'Resgate de Pontos',
        description:
          'Troque seus pontos acumulados por produtos, serviços e descontos em nossa loja de benefícios',
        icon: 'Gift',
        category: 'Benefícios',
        href: '/examples',
        featured: true,
        status: 'active',
      },
      {
        id: 'perfil',
        title: 'Meus Dados',
        description:
          'Atualize suas informações pessoais, endereços e preferências de comunicação',
        icon: 'User',
        category: 'Conta',
        href: '/examples',
        featured: false,
        status: 'active',
      },
      {
        id: 'senha',
        title: 'Recuperar Senha',
        description:
          'Redefina sua senha de acesso de forma rápida e segura através do seu email ou SMS',
        icon: 'Key',
        category: 'Segurança',
        href: '/examples',
        featured: false,
        status: 'active',
      },
      {
        id: 'faq',
        title: 'Central de Ajuda',
        description:
          'Encontre respostas para suas dúvidas mais frequentes e tutoriais detalhados',
        icon: 'HelpCircle',
        category: 'Suporte',
        href: '/examples',
        featured: false,
        status: 'active',
      },
    ];

    return {
      services,
      featuredServices: services.filter((s) => s.featured),
    };
  }
}
