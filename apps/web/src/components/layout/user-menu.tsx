import { Button } from "@/components/ui/button";
import { Bell, MapPin, User } from "lucide-react";

interface UserData {
  name: string;
  location?: string;
  notifications?: number;
}

interface UserMenuProps {
  userData: UserData;
}

export function UserMenu({ userData }: UserMenuProps) {
  return (
    <div className="flex items-center space-x-4">
      {userData.location && (
        <div className="hidden md:flex items-center space-x-1 text-sm text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{userData.location}</span>
        </div>
      )}

      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-4 w-4" />
        {userData.notifications && userData.notifications > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
            {userData.notifications}
          </span>
        )}
      </Button>

      <Button variant="ghost" className="flex items-center space-x-2">
        <User className="h-4 w-4" />
        <span className="hidden md:block">{userData.name}</span>
      </Button>
    </div>
  );
}
