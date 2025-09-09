import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3 } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--whatsapp-bg)] border border-[var(--whatsapp-border)] rounded-lg py-[14px] px-4 flex items-start justify-between flex-shrink-0 w-[88.5rem] relative overflow-hidden">
      {/* Logo */}
      <div className="flex-shrink-0 w-[98.32px] h-[30px] relative overflow-visible">
        <Image
          src="/rategen-logo.png"
          alt="RateGen Logo"
          width={98.32}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-0">
        <Button
          variant="ghost"
          className="px-3 py-1 text-[var(--whatsapp-primary)] font-semibold"
        >
          WhatsApp
        </Button>
        <Button
          variant="ghost"
          className="px-3 py-1 text-[var(--whatsapp-text)] font-normal"
        >
          Rates
        </Button>
        <Button
          variant="ghost"
          className="px-3 py-1 text-[var(--whatsapp-text)] font-normal"
        >
          Queries
        </Button>
        <Button
          variant="ghost"
          className="px-3 py-1 text-[var(--whatsapp-text)] font-normal"
        >
          Playground
        </Button>
        <Button
          variant="ghost"
          className="px-3 py-1 text-[var(--whatsapp-text)] font-normal"
        >
          Docs
        </Button>

        {/* Usage Button */}
        <div className="px-2.5">
          <Button className="bg-[var(--whatsapp-primary)] hover:bg-[var(--whatsapp-primary)]/90 text-[var(--whatsapp-text)] rounded-[9px] px-3 py-1.5 flex items-center gap-2.5">
            <BarChart3 size={19} />
            <span className="text-sm font-normal">Usage</span>
          </Button>
        </div>

        {/* User Avatar */}
        <div className="px-3 py-1 flex items-center justify-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
}
