export interface ServiceItem {
  title: string;
  href: string;
  description: string;
  icon?: string;
}

export interface NavigationSection {
  title: string;
  items: ServiceItem[];
}

export interface NavItem {
  title: string;
  href: string;
}

export interface UserMenuItem {
  title: string;
  href: string;
  icon?: string;
}

export interface NavigationData {
  navigationData: NavigationSection[];
  mainNav: NavItem[];
  userMenu: UserMenuItem[];
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  priority: number;
}

export interface BannerData {
  banners: Banner[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  href: string;
  featured: boolean;
  status: 'active' | 'inactive' | 'maintenance';
}

export interface ServicesData {
  services: Service[];
  featuredServices: Service[];
}