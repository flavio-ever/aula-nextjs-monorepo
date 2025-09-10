import { getNavigationData } from "@/lib/api";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { Navigation } from "./navigation";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";

export async function Header() {
  const userData = {
    name: "Flavio Ever",
    location: "São Paulo, SP",
    notifications: 3,
  };

  const navigationData = await getNavigationData();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <SearchBar
          placeholder="Buscar ajuda, produtos..."
          className="mx-8 flex-1 max-w-2xl hidden md:block"
        />
        <div className="flex items-center space-x-2">
          <UserMenu userData={userData} />
          <MobileMenu navigationData={navigationData} />
        </div>
      </div>

      <div className="border-t hidden md:block">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-3">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
