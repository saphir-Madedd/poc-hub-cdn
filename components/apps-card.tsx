"use client";

import { cn } from "@/lib/utils";

interface AppCard {
  id: string;
  name: string;
  logo?: React.ReactNode;
  href?: string;
}

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex h-12 w-18 items-center justify-center rounded-md border border-dashed border-external-app-card-border px-2 text-[10px] font-medium uppercase tracking-[0.08em] text-external-app-card-logo-placeholder">
    {name}
  </div>
);

const appCards: AppCard[] = [
  { id: "eurecia", name: "EURECIA", href: "#" },
  { id: "sellsy", name: "SELLSY", href: "#" },
  { id: "m-files", name: "M-FILES", href: "#" },
  { id: "salesforce", name: "SALESFORCE", href: "#" },
  { id: "odoo", name: "ODOO", href: "#" },
  { id: "netexplorer", name: "NETEXPLORER", href: "#" },
  { id: "logitricks", name: "LOGITRICKS", href: "#" },
];

interface AppCardItemProps {
  card: AppCard;
  className?: string;
}

function AppCardItem({ card, className }: AppCardItemProps) {
  return (
    <a
      href={card.href}
      className={cn(
        "group flex h-33 w-33 flex-col items-center shadow-sm justify-center gap-5 rounded-2xl border bg-external-app-card-background px-4 py-5 text-center",
        "border-external-app-card-border",
        "transition-all duration-200  hover:border-external-app-card-hover-border hover:shadow-md",
        className,
      )}
    >
      <div className="flex h-12 items-center justify-center text-external-app-card-logo">
        {card.logo ?? <LogoPlaceholder name={card.name} />}
      </div>

      <span className="text-[12px] font-bold uppercase leading-none text-external-app-card-title">
        {card.name}
      </span>
    </a>
  );
}

interface AppsCardsProps {
  className?: string;
}

export function AppsCards({ className }: AppsCardsProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {appCards.map((card) => (
        <AppCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export { AppCardItem, type AppCard };
