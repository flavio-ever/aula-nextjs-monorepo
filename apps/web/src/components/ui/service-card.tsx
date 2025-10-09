"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { getIconByName } from "@/lib/icon-map";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color?: string;
  className?: string;
}

export function Icon({ name }: { name: string }) {
  const IconComponent = getIconByName(name);
  return <IconComponent />;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  color = 'bg-primary',
  className
}: ServiceCardProps) {

  
  // Extract the color value for the hover border
  const colorMap: { [key: string]: string } = {
    'bg-red-500': '#ef4444',
    'bg-emerald-500': '#10b981', 
    'bg-blue-500': '#3b82f6',
    'bg-orange-500': '#f97316',
    'bg-green-500': '#22c55e',
    'bg-purple-500': '#a855f7'
  };
  
  const hoverBorderColor = colorMap[color] || '#6b7280';
  
  return (
    <Link 
      href={href}
      className={cn(
        "group relative block bg-white border-2 border-gray-200 rounded-xl p-4 transition-all duration-200 cursor-pointer",
        "dark:bg-gray-800 dark:border-gray-700",
        className
      )}
      style={{
        '--hover-border-color': hoverBorderColor,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = hoverBorderColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '';
      }}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
           <div className={cn(
             "w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0",
             color
           )}>
             <Icon name={icon} />
           </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
} 