"use client";

import { Logo } from "@/components/layout/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bell,
  CreditCard,
  FileText,
  Gift,
  HelpCircle,
  Key,
  Menu,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  navigationData: {
    navigationData: Array<{
      title: string;
      items: Array<{
        title: string;
        href: string;
        description?: string;
        icon?: string;
      }>;
    }>;
    mainNav: Array<{
      title: string;
      href: string;
    }>;
    userMenu: Array<{
      title: string;
      href: string;
      icon?: string;
    }>;
  };
}

export function MobileMenu({ navigationData }: MobileMenuProps) {
  const sections = navigationData.navigationData || [];
  const mainNav = navigationData.mainNav || [];
  const userMenu = navigationData.userMenu || [];

  const getIcon = (iconName?: string) => {
    const icons = {
      FileText: FileText,
      CreditCard: CreditCard,
      Gift: Gift,
      Key: Key,
      HelpCircle: HelpCircle,
      User: User,
      Phone: Phone,
      Bell: Bell,
    };

    return iconName ? icons[iconName as keyof typeof icons] : HelpCircle;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="text-left p-6 pb-4">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </SheetHeader>

          <div className="flex items-center space-x-3 px-6 py-3 border-b">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">Flavio Ever</div>
              <div className="text-xs text-muted-foreground">São Paulo, SP</div>
            </div>
            <Badge variant="secondary" className="h-5 px-2 text-xs">
              3
            </Badge>
          </div>

          <nav className="flex-1 py-4">
            {/* Seção de Serviços */}
            <div className="px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Serviços
            </div>
            {sections
              .flatMap((section) => section.items)
              .map((item) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-6 py-3 hover:bg-muted/50 transition-colors"
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}

            {/* Divisor */}
            <div className="mx-6 my-3 border-t" />

            {/* Links principais */}
            <div className="px-6 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Menu
            </div>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-6 py-3 hover:bg-muted/50 transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </nav>

          <div className="border-t px-6 py-4 pb-8 space-y-2">
            {userMenu.map((item) => {
              const IconComponent = getIcon(item.icon);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start h-10"
                  size="sm"
                  asChild
                >
                  <Link href={item.href}>
                    <IconComponent className="w-4 h-4 mr-3" />
                    <span>{item.title}</span>
                  </Link>
                </Button>
              );
            })}

            <div className="pt-2">
              <Button variant="outline" className="w-full h-10">
                Sair da Conta
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
