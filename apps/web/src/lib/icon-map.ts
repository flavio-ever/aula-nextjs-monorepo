import { 
  FileText, 
  CreditCard, 
  Gift, 
  HelpCircle, 
  Key, 
  User, 
  Shield, 
  Bell,
  Phone,
  LucideIcon
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  FileText,
  CreditCard,
  Gift,
  HelpCircle,
  Key,
  User,
  Shield,
  Bell,
  Phone,
};

export function getIconByName(iconName: string): LucideIcon {
  return iconMap[iconName] || HelpCircle;
}