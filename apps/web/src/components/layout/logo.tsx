import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">PC</span>
      </div>
      <span className="font-bold text-xl">Portal do Cliente</span>
    </Link>
  );
} 